/* ═══════════════════════════════════════════════════════════════
   KADASH CHRISTMAS 2026
   Everything lives in this file plus christmas.css.

   Switches itself off: the banner stops after the last order day,
   and the whole theme stops after themeEnds. To switch it off by
   hand, set enabled to false (or remove the two tags in index.html).

   Music: put the track at audio/christmas.mp3. If the file is not
   there, the music buttons simply do not appear.
═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var XMAS = {
    enabled: true,

    orderBy: [2026, 12, 18],   // last day for Christmas orders (inclusive)
    orderByLabel: "18 December",
    themeEnds: [2026, 12, 25], // snow, music and sleigh stop after this day (inclusive)

    musicSrc: "audio/christmas.mp3",
    musicCredit: "",           // e.g. "Music: Title by Artist, CC BY 4.0". Leave empty if no credit is required.
    musicVolume: 0.35,

    sleighFirstDelayMs: 7000,  // first flight, after the visitor is in
    sleighEveryMs: 45000,      // then once every 45 seconds
    sleighCrossMs: 15000,      // time to cross the screen

    waNumber: "27738383486",

    heroHeadline: "Make Christmas Personal.",
    // Optional hero photo: upload these two files and the slide uses them behind the text.
    // Until they exist, the slide is burgundy with ornaments and snow.
    heroImage: { desktop: "images/heroes/christmas-desktop.jpg", mobile: "images/heroes/christmas-mobile.jpg" },
    // Products shown in the Christmas strip under the hero (product IDs from products.js)
    stripIds: [93, 5, 42, 17, 71, 100, 155, 41, 162, 6]
  };

  var GATE_KEY = "kadash-xmas-2026-gate";

  /* ─── Date check: do nothing at all once the season is over ─── */
  function endOfDay(a) { return new Date(a[0], a[1] - 1, a[2], 23, 59, 59, 999); }
  var now = new Date();
  if (!XMAS.enabled || now > endOfDay(XMAS.themeEnds)) { return; }
  var ordersOpen = now <= endOfDay(XMAS.orderBy);

  var reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ─── Small helpers ─── */
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked, carry on */ } }
  function trk(name, params) { try { if (typeof track === "function") { track(name, params || {}); } } catch (e) { /* analytics must never break the page */ } }

  function waMessage() {
    var msg = "Hi Kadash Gifts, I would like to order a personalised Christmas gift. Could you help me choose?";
    if (ordersOpen) { msg += " I know the last day for Christmas orders is " + XMAS.orderByLabel + "."; }
    return msg;
  }
  function waLink() { return "https://wa.me/" + XMAS.waNumber + "?text=" + encodeURIComponent(waMessage()); }

  /* ═══ BANNER ═══ */
  function addBanner() {
    var bar = document.getElementById("announcementBar");
    var b = document.createElement("div");
    b.className = "xmas-banner";
    b.setAttribute("role", "region");
    b.setAttribute("aria-label", "Christmas ordering");
    b.innerHTML =
      '<span class="xmas-banner-text">Order by <strong>' + XMAS.orderByLabel + "</strong> for Christmas delivery</span>" +
      '<span class="xmas-banner-actions">' +
      '<a class="xmas-banner-link" href="#products" data-xmas="shop">Shop Christmas gifts</a>' +
      '<a class="xmas-banner-cta" href="' + waLink() + '" target="_blank" rel="noopener" data-xmas="wa">Order on WhatsApp</a>' +
      "</span>";
    if (bar && bar.parentNode) { bar.parentNode.insertBefore(b, bar.nextSibling); }
    else { document.body.insertBefore(b, document.body.firstChild); }

    b.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-xmas]") : null;
      if (!t) { return; }
      if (t.getAttribute("data-xmas") === "shop") {
        e.preventDefault();
        trk("christmas_banner_shop", {});
        if (typeof filterByCategory === "function") { filterByCategory("christmas"); }
        else { window.location.hash = "products"; }
      } else {
        trk("christmas_banner_whatsapp", {});
      }
    });
  }

  /* Pre-fill existing WhatsApp links and the gift helper with a Christmas message */
  function wireWhatsApp() {
    var links = document.querySelectorAll('a[href^="https://wa.me/"]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("href").indexOf("?") === -1 && !links[i].hasAttribute("data-xmas")) {
        links[i].setAttribute("href", waLink());
      }
    }
    var sel = document.getElementById("helperOccasion");
    if (sel) { sel.value = "Christmas"; }
  }

  function addCredit() {
    if (!XMAS.musicCredit) { return; }
    var copy = document.querySelector(".footer-copy");
    if (!copy || !copy.parentNode) { return; }
    var d = document.createElement("div");
    d.className = "xmas-credit";
    d.textContent = XMAS.musicCredit;
    copy.parentNode.insertBefore(d, copy.nextSibling);
  }

  /* ═══ SNOW ═══ */
  var canvas = null, ctx = null, flakes = [], raf = 0, lastTs = 0, W = 0, H = 0, dpr = 1;

  function makeFlake(randomY) {
    var r = 1.6 + Math.random() * 3.2;
    return {
      x: Math.random() * W,
      y: randomY ? Math.random() * H : -10,
      r: r,
      vy: 0.35 + r * 0.22,
      ph: Math.random() * 6.28,
      sp: 0.01 + Math.random() * 0.02,
      sw: 0.15 + Math.random() * 0.3,
      kind: Math.random() < 0.65 ? 0 : 1,
      a: 0.7 + Math.random() * 0.3
    };
  }
  function sizeSnow() {
    W = window.innerWidth; H = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var target = W < 700 ? 48 : 90;
    while (flakes.length < target) { flakes.push(makeFlake(true)); }
    if (flakes.length > target) { flakes.length = target; }
  }
  function snowFrame(ts) {
    raf = requestAnimationFrame(snowFrame);
    var dt = Math.min((ts - lastTs) / 16.7, 3);
    lastTs = ts;
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.ph += f.sp * dt;
      f.y += f.vy * dt;
      f.x += Math.sin(f.ph) * f.sw * dt;
      if (f.y > H + 10) { f.y = -10; f.x = Math.random() * W; }
      if (f.x > W + 10) { f.x = -10; } else if (f.x < -10) { f.x = W + 10; }
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 2, 0, 6.2832);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, 6.2832);
      if (f.kind === 0) {
        ctx.fillStyle = "rgba(212,180,131," + f.a + ")";
        ctx.fill();
      } else {
        ctx.fillStyle = "rgba(255,255,255," + f.a + ")";
        ctx.fill();
        ctx.lineWidth = 0.7;
        ctx.strokeStyle = "rgba(184,150,90,0.8)";
        ctx.stroke();
      }
    }
  }
  function startSnowLoop() { if (!raf && ctx) { lastTs = performance.now(); raf = requestAnimationFrame(snowFrame); } }
  function stopSnowLoop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

  function startSnow() {
    canvas = document.createElement("canvas");
    canvas.className = "xmas-snow";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    if (!ctx) { return; }
    sizeSnow();
    var rt = 0;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(sizeSnow, 200); });
    startSnowLoop();
  }

  /* ═══ SLEIGH ═══ */
  var sleighEl = null, sleighStarted = false;

  function sleighSVG() {
    return '<svg viewBox="0 0 360 130" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M36 54 C28 34 48 20 66 28 C80 34 82 48 78 54 Z" fill="currentColor" stroke="none"/>' +
      '<path d="M52 30 C50 24 56 20 60 24" stroke-width="2.5"/>' +
      '<path d="M22 54 L114 54 C121 54 124 59 122 66 C117 86 98 92 78 92 L50 92 C34 92 26 80 22 54 Z" fill="currentColor" stroke="none"/>' +
      '<path d="M22 54 C12 50 8 40 14 33" stroke-width="3.5"/>' +
      '<path d="M14 106 C44 111 104 111 132 100 C141 96 145 88 140 81" stroke-width="3.5"/>' +
      '<path d="M50 92 L48 106 M102 90 L104 103" stroke-width="3"/>' +
      '<path d="M130 66 C160 74 190 70 214 62" stroke-width="1.6"/>' +
      '<path d="M205 58 C205 45 226 40 252 42 C276 40 293 46 293 58 C293 70 277 75 252 75 C226 75 205 71 205 58 Z" fill="currentColor" stroke="none"/>' +
      '<path d="M280 48 C288 40 294 30 300 24 C306 18 316 16 324 20 C332 23 337 29 338 34 C335 38 327 38 321 36 C313 38 308 46 303 56 Z" fill="currentColor" stroke="none"/>' +
      '<path d="M306 19 C300 8 292 1 285 3 M301 10 C296 13 290 11 288 7 M313 17 C318 6 326 0 333 2 M318 9 C324 10 329 8 331 4" stroke-width="3"/>' +
      '<path d="M284 68 L305 82 L320 79" stroke-width="5"/>' +
      '<path d="M274 71 L290 90 L282 104" stroke-width="5"/>' +
      '<path d="M222 69 L206 86 L190 89" stroke-width="5"/>' +
      '<path d="M234 72 L228 92 L214 104" stroke-width="5"/>' +
      '<path d="M206 54 L196 48" stroke-width="4"/>' +
      '<circle cx="337" cy="33" r="3.8" fill="#9E2A2F" stroke="none"/>' +
      '<path d="M6 70 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 z" fill="#D4B483" stroke="none"/>' +
      "</svg>";
  }

  function flySleigh() {
    if (document.hidden || !sleighEl || !sleighEl.animate) { return; }
    var w = sleighEl.offsetWidth || 240;
    sleighEl.style.top = (9 + Math.random() * 13).toFixed(1) + "vh";
    sleighEl.animate([
      { transform: "translate3d(" + (-w - 20) + "px,0,0)", opacity: 1 },
      { transform: "translate3d(" + (window.innerWidth + 20) + "px,0,0)", opacity: 1 }
    ], { duration: XMAS.sleighCrossMs, easing: "linear" });
  }
  function scheduleSleigh() {
    if (reduced || sleighStarted) { return; }
    sleighStarted = true;
    sleighEl = document.createElement("div");
    sleighEl.className = "xmas-sleigh";
    sleighEl.setAttribute("aria-hidden", "true");
    sleighEl.innerHTML = sleighSVG();
    document.body.appendChild(sleighEl);
    setTimeout(function () {
      flySleigh();
      setInterval(flySleigh, XMAS.sleighEveryMs);
    }, XMAS.sleighFirstDelayMs);
  }

  /* ═══ MUSIC ═══ */
  var musicAvailable = false, audio = null, playing = false, resumeAfterHide = false, fadeTimer = 0, musicBtn = null;

  function checkMusic(cb) {
    var finished = false;
    function fin(v) { if (!finished) { finished = true; cb(v); } }
    if (!window.fetch) { fin(false); return; }
    var t = setTimeout(function () { fin(false); }, 2500);
    fetch(XMAS.musicSrc, { method: "HEAD" })
      .then(function (r) { clearTimeout(t); fin(r.ok); })
      .catch(function () { clearTimeout(t); fin(false); });
  }

  function getAudio() {
    if (audio) { return audio; }
    audio = new Audio();
    audio.preload = "none";
    audio.loop = true;
    audio.volume = 0;
    audio.src = XMAS.musicSrc;
    audio.addEventListener("error", function () {
      playing = false;
      musicAvailable = false;
      if (musicBtn && musicBtn.parentNode) { musicBtn.parentNode.removeChild(musicBtn); musicBtn = null; }
    });
    return audio;
  }
  function fadeTo(target, ms, done) {
    var a = getAudio();
    clearInterval(fadeTimer);
    var from = a.volume, steps = 12, i = 0;
    fadeTimer = setInterval(function () {
      i++;
      a.volume = Math.max(0, Math.min(1, from + (target - from) * (i / steps)));
      if (i >= steps) { clearInterval(fadeTimer); if (done) { done(); } }
    }, ms / steps);
  }
  function syncMusicBtn() {
    if (!musicBtn) { return; }
    musicBtn.setAttribute("aria-pressed", playing ? "true" : "false");
    var label = playing ? "Turn Christmas music off" : "Turn Christmas music on";
    musicBtn.setAttribute("aria-label", label);
    musicBtn.title = label;
  }
  function playMusic() {
    var a = getAudio();
    playing = true;
    syncMusicBtn();
    var p = a.play();
    if (p && p.then) {
      p.then(function () { fadeTo(XMAS.musicVolume, 700); })
       .catch(function () { playing = false; syncMusicBtn(); });
    } else {
      fadeTo(XMAS.musicVolume, 700);
    }
  }
  function pauseMusic() {
    if (!audio) { return; }
    playing = false;
    syncMusicBtn();
    fadeTo(0, 400, function () { audio.pause(); });
  }
  function addMusicButton() {
    if (musicBtn) { return; }
    musicBtn = document.createElement("button");
    musicBtn.type = "button";
    musicBtn.className = "xmas-music";
    musicBtn.innerHTML =
      '<svg class="xmas-ico-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>' +
      '<svg class="xmas-ico-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>';
    musicBtn.addEventListener("click", function () {
      if (playing) { pauseMusic(); trk("christmas_music", { state: "off" }); }
      else { playMusic(); trk("christmas_music", { state: "on" }); }
    });
    document.body.appendChild(musicBtn);
    syncMusicBtn();
  }

  /* ═══ ENTRY SCREEN ═══ */
  function shouldShowGate() {
    if (lsGet(GATE_KEY)) { return false; }
    // Never put a screen in front of someone who clicked an ad or a product link
    if (window.location.hash && window.location.hash.length > 1) { return false; }
    if (/[?&](utm_|fbclid|ttclid|gclid)/i.test(window.location.search)) { return false; }
    return true;
  }

  function showGate() {
    var g = document.createElement("div");
    g.className = "xmas-gate";
    g.setAttribute("role", "dialog");
    g.setAttribute("aria-modal", "true");
    g.setAttribute("aria-labelledby", "xmasGateTitle");
    var sub = ordersOpen
      ? "Personalised gifts, made to order. Order by " + XMAS.orderByLabel + " for Christmas delivery."
      : "Personalised gifts, made to order and delivered nationwide.";
    var buttons = musicAvailable
      ? '<button type="button" class="xmas-btn xmas-btn-primary" data-enter="music">Enter with music</button>' +
        '<button type="button" class="xmas-btn xmas-btn-quiet" data-enter="quiet">Enter without music</button>'
      : '<button type="button" class="xmas-btn xmas-btn-primary" data-enter="quiet">Enter the shop</button>';
    g.innerHTML =
      '<div class="xmas-gate-card"><h2 class="xmas-gate-title" id="xmasGateTitle">Christmas at Kadash</h2>' +
      '<p class="xmas-gate-sub">' + sub + "</p>" + buttons + "</div>";

    document.body.classList.add("xmas-gate-open");
    document.body.appendChild(g);
    requestAnimationFrame(function () { g.classList.add("in"); });

    var btns = g.querySelectorAll("button");
    btns[0].focus();

    function enter(withMusic) {
      document.removeEventListener("keydown", onKey, true);
      lsSet(GATE_KEY, "1");
      document.body.classList.remove("xmas-gate-open");
      g.classList.remove("in");
      g.classList.add("out");
      setTimeout(function () { if (g.parentNode) { g.parentNode.removeChild(g); } }, 600);
      if (withMusic) { playMusic(); } // runs inside the tap, which is what lets the browser allow audio
      trk("christmas_gate_enter", { music: withMusic ? "on" : "off" });
      scheduleSleigh();
    }
    function onKey(e) {
      if (e.key === "Escape") { enter(false); return; }
      if (e.key === "Tab") {
        var first = btns[0], last = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKey, true);
    g.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-enter]") : null;
      if (t) { enter(t.getAttribute("data-enter") === "music"); }
    });
  }

  /* ═══ CHRISTMAS HERO SLIDE ═══ */
  function escHtml(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function findProduct(id) {
    if (typeof products === "undefined" || !products.length) { return null; }
    for (var i = 0; i < products.length; i++) { if (products[i].id === id) { return products[i]; } }
    return null;
  }

  function baublesSVG() {
    return '<svg viewBox="0 0 140 150" aria-hidden="true">' +
      '<path d="M30 0V52M80 0V30M112 0V78" stroke="#D4B483" stroke-width="1.2" fill="none"/>' +
      '<rect x="25" y="49" width="10" height="6" rx="1.5" fill="#D4B483"/>' +
      '<circle cx="30" cy="73" r="19" fill="#B8965A"/>' +
      '<path d="M19 66a14 14 0 0 1 10-8" stroke="#F0E4CC" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>' +
      '<rect x="75" y="27" width="10" height="6" rx="1.5" fill="#D4B483"/>' +
      '<circle cx="80" cy="50" r="17" fill="#F0E4CC"/>' +
      '<path d="M63.5 46h33M63.5 54h33" stroke="#B8965A" stroke-width="2.5" fill="none"/>' +
      '<rect x="107" y="75" width="10" height="6" rx="1.5" fill="#D4B483"/>' +
      '<circle cx="112" cy="102" r="22" fill="#9E2A2F"/>' +
      '<path d="M98 94a17 17 0 0 1 12-10" stroke="#F0E4CC" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>' +
      "</svg>";
  }

  function tryHeroPhoto(el) {
    var src = window.innerWidth <= 700 ? XMAS.heroImage.mobile : XMAS.heroImage.desktop;
    var im = new Image();
    im.onload = function () {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add("has-photo");
    };
    im.src = src;
  }

  function addHeroSlide() {
    var wrap = document.getElementById("heroSlides");
    if (!wrap || typeof renderHeroDots !== "function") { return; }
    var s = document.createElement("div");
    s.className = "hero-slide xmas-hero-slide active";
    s.innerHTML =
      '<div class="xmas-baubles left">' + baublesSVG() + "</div>" +
      '<div class="xmas-baubles right">' + baublesSVG() + "</div>" +
      '<div class="xmas-hero-inner">' +
      '<h2 class="xmas-hero-title">' + escHtml(XMAS.heroHeadline) + "</h2>" +
      '<p class="xmas-hero-sub">Personalised Christmas gifts, made with their name on and delivered nationwide.</p>' +
      '<div class="xmas-hero-deadline">Order by ' + escHtml(XMAS.orderByLabel) + "</div>" +
      '<a class="hero-slide-cta" href="#products">Shop Christmas gifts</a>' +
      "</div>";

    var existing = wrap.querySelectorAll(".hero-slide");
    var firstOld = existing.length ? existing[0] : null;
    for (var i = 0; i < existing.length; i++) { existing[i].classList.remove("active"); }
    // The original first slide moves to the back, so Christmas leads
    if (firstOld) { wrap.appendChild(firstOld); }
    wrap.insertBefore(s, wrap.firstChild);
    heroIndex = 0;
    renderHeroDots();

    s.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      trk("christmas_hero_shop", {});
      if (typeof filterByCategory === "function") { filterByCategory("christmas"); }
    });
    tryHeroPhoto(s);
  }

  /* ═══ CHRISTMAS STRIP (products straight under the hero) ═══ */
  function addStrip() {
    var anchor = document.getElementById("trustBar");
    if (!anchor || !anchor.parentNode) { return; }
    var cards = "";
    for (var i = 0; i < XMAS.stripIds.length; i++) {
      var p = findProduct(XMAS.stripIds[i]);
      if (!p || !p.images || !p.images.length) { continue; }
      var price = (p.options && p.options.length)
        ? "From R" + Math.min.apply(null, p.options.map(function (o) { return o.price; }))
        : "R" + p.price;
      cards +=
        '<button type="button" class="xmas-card" data-id="' + p.id + '">' +
        '<img src="' + escHtml(p.images[0]) + '" alt="' + escHtml(p.name) + '" loading="lazy">' +
        '<span class="xmas-card-body"><span class="xmas-card-name">' + escHtml(p.name) + "</span>" +
        '<span class="xmas-card-price">' + price + "</span></span></button>";
    }
    if (!cards) { return; }
    var sec = document.createElement("section");
    sec.className = "xmas-strip";
    sec.setAttribute("aria-label", "Christmas gifts");
    sec.innerHTML =
      '<div class="xmas-strip-head"><h2 class="xmas-strip-title">Christmas gifts with their name on</h2>' +
      '<p class="xmas-strip-sub">Order by ' + escHtml(XMAS.orderByLabel) + ". Delivered nationwide.</p></div>" +
      '<div class="xmas-strip-track">' + cards + "</div>" +
      '<div class="xmas-strip-more"><button type="button" class="xmas-btn xmas-btn-primary" data-more="1">See all Christmas gifts</button></div>';
    anchor.parentNode.insertBefore(sec, anchor);
    sec.addEventListener("click", function (e) {
      var card = e.target.closest ? e.target.closest(".xmas-card") : null;
      if (card) {
        var id = parseInt(card.getAttribute("data-id"), 10);
        trk("christmas_strip_item", { item_id: String(id) });
        if (typeof openModal === "function") { openModal(id); }
        return;
      }
      if (e.target.closest && e.target.closest("[data-more]")) {
        trk("christmas_strip_more", {});
        if (typeof filterByCategory === "function") { filterByCategory("christmas"); }
      }
    });
  }

  /* ═══ RIBBONS ON CHRISTMAS PRODUCT CARDS ═══ */
  function decorateCards() {
    var cards = document.querySelectorAll("#productGrid .product-card");
    for (var i = 0; i < cards.length; i++) {
      var box = cards[i].querySelector(".product-img");
      if (!box || box.querySelector(".xmas-ribbon")) { continue; }
      var m = /openModal\((\d+)\)/.exec(box.getAttribute("onclick") || "");
      if (!m) { continue; }
      var p = findProduct(parseInt(m[1], 10));
      if (p && p.cats && p.cats.indexOf("christmas") > -1) {
        var r = document.createElement("span");
        r.className = "xmas-ribbon";
        r.textContent = "Christmas gift";
        box.appendChild(r);
      }
    }
  }
  function patchRender() {
    if (typeof window.renderProducts !== "function") { return; }
    var orig = window.renderProducts;
    window.renderProducts = function () {
      var out = orig.apply(this, arguments);
      decorateCards();
      return out;
    };
    decorateCards();
  }

  /* Hide filter chips for seasons that are switched off (Father's Day, Mother's Day) */
  function hideInactiveFilters() {
    if (typeof categories === "undefined") { return; }
    var off = {};
    for (var i = 0; i < categories.length; i++) { if (categories[i].active === false) { off[categories[i].id] = true; } }
    var chips = document.querySelectorAll("#filterBar .filter-btn");
    for (var k = 0; k < chips.length; k++) {
      if (off[chips[k].getAttribute("data-filter")]) { chips[k].style.display = "none"; }
    }
  }

  /* ═══ START ═══ */
  function init() {
    document.body.classList.add("christmas");
    if (ordersOpen) { addBanner(); addHeroSlide(); addStrip(); }
    wireWhatsApp();
    patchRender();
    hideInactiveFilters();
    var catTitle = document.querySelector("#categories .section-title");
    if (catTitle) { catTitle.textContent = "A gift for every Christmas moment"; }
    if (!reduced) { startSnow(); }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopSnowLoop();
        resumeAfterHide = playing;
        if (playing && audio) { audio.pause(); }
      } else {
        if (!reduced) { startSnowLoop(); }
        if (resumeAfterHide && audio) {
          audio.play().catch(function () { playing = false; syncMusicBtn(); });
        }
        resumeAfterHide = false;
      }
    });

    checkMusic(function (ok) {
      musicAvailable = ok;
      if (ok) { addMusicButton(); addCredit(); }
      if (shouldShowGate()) { showGate(); }
      else { scheduleSleigh(); }
    });
  }

  if (document.body) { init(); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
