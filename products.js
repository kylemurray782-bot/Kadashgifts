const products = [
  {
    id: 1,
    name: 'Kingdom Kit',
    emoji: '🧔',
    images: ['images/kingdom-kit.jpg'],
    desc: 'Personalised beard care gift set. Name printed on the bottle — full kit personalisation available on request.',
    price: 300,
    options: [],
    cats: ['fathers-day', 'birthday-him'],
    fathersDay: true
  },
  {
    id: 2,
    name: 'The Urban Gentleman Set',
    emoji: '👔',
    images: [
      'images/Urban-gentlemen-1.jpg',
      'images/Urban-gentlemen-2.jpg',
      'images/Urban-gentlemen-3.jpg'
    ],
    desc: 'A refined gift set for the man who means business. Choose your tier — from a personalised travel mug up to the full executive bundle.',
    price: 0,
    options: [
      { name: 'Personalised travel mug', price: 200 },
      { name: 'Personalised travel mug + personalised tie', price: 350 },
      { name: 'Personalised travel mug + personalised tie + personalised mousepad', price: 450 }
    ],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true,
    fathersDayTiered: true
  },
  {
    id: 3,
    name: 'The Executives Lunch Set',
    emoji: '💼',
    images: [
      'images/The-executives-lunch-set-1.jpg',
      'images/The-executives-lunch-set-2.jpg',
      'images/The-executives-lunch-set-3.jpg'
    ],
    desc: 'A smart, personalised lunch set for the working man. Build the bundle that fits your budget.',
    price: 0,
    options: [
      { name: 'Personalised lunch bag', price: 250 },
      { name: 'Personalised lunch bag + personalised tumbler', price: 500 },
      { name: 'Personalised lunch bag + personalised tumbler + personalised notebook & pen', price: 650 }
    ],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true,
    fathersDayTiered: true
  },
  {
    id: 4,
    name: 'The Reset Set',
    emoji: '🛁',
    images: [
      'images/The-reset-set-1.jpg',
      'images/The-reset-set-2.jpg',
      'images/The-reset-set-3.jpg'
    ],
    desc: 'For the dad who deserves to rest. A personalised relaxation set — choose the level of luxury.',
    price: 0,
    options: [
      { name: 'Personalised slippers', price: 270 },
      { name: 'Personalised slippers + personalised gown', price: 690 },
      { name: 'Personalised slippers + personalised gown + personalised mug', price: 790 }
    ],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true,
    fathersDayTiered: true
  },
  {
    id: 5,
    name: 'Kingdom Man Bible Set',
    emoji: '📖',
    images: ['images/kingdom-man-bible-set.jpg'],
    desc: 'Personalised Bible, notebook, mug, and pen — every piece carrying his name.',
    price: 600,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 6,
    name: 'Football Set',
    emoji: '⚽',
    images: ['images/football-set.jpg'],
    desc: "Personalised mug, mug box, and flask with matching gift bag — all printed in his favourite team's colours.",
    price: 450,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 7,
    name: 'Personalised Toolbox Set',
    emoji: '🔧',
    images: ['images/toolbox-set.jpg'],
    desc: 'A personalised toolbox set — built for the man who fixes everything.',
    price: 500,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 8,
    name: 'Personalised Braai Master Dad Set',
    emoji: '🔥',
    images: ['images/braai_master.jpg'],
    desc: 'His name on the apron, his tools in hand. The ultimate gift for the man who rules the fire.',
    price: 380,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 9,
    name: 'Personalised Travel & Gym Bag',
    emoji: '🏋️',
    images: ['images/travel_gym_sports_bag.jpg'],
    desc: 'Built for the man always on the move. A quality bag personalised with his name — from the gym to the weekend away.',
    price: 500,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 10,
    name: 'Personalised Thermo Display Flask',
    emoji: '🌡️',
    images: ['images/thermo_display_flask.jpg'],
    desc: 'Keeps his drink at the right temperature and his name front and centre. Sleek, functional, and entirely his.',
    price: 250,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 11,
    name: 'Personalised Dad Socks',
    emoji: '🧦',
    images: ['images/dad_socks.jpg'],
    desc: "His favourite scripture, his nickname, or a message only he'll understand — printed on the pair he'll actually wear.",
    price: 150,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 12,
    name: 'Personalised Wooden Cutting Board',
    emoji: '🪵',
    images: ['images/personalised_wooden_cutting-board.jpg'],
    desc: 'A quality wooden cutting board engraved with his name or a meaningful message. Built to last, made to matter.',
    price: 250,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 13,
    name: 'Personalised Hip Flask',
    emoji: '🥃',
    images: ['images/personalised_hip_flask.jpg'],
    desc: 'Pocket-sized and personal. Engraved with his name or a message for the man who appreciates the finer things.',
    price: 200,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 14,
    name: 'Personalised Wallet',
    emoji: '👛',
    images: [
      'images/personalised_wallet_1.jpg',
      'images/personalised_wallet_2.jpg'
    ],
    desc: "A wallet personalised with his favourite scripture or a message that speaks to who he is — carried with him every day.",
    price: 250,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 15,
    name: 'Personalised Lighter',
    emoji: '🔥',
    images: ['images/personalised_lighter.jpg'],
    desc: 'Small but significant. A personalised lighter engraved with his name or a short message he will always carry.',
    price: 150,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 16,
    name: 'Personalised Keyring',
    emoji: '🔑',
    images: ['images/personalised_keyring.jpg'],
    desc: 'Every time he reaches for his keys, he carries a piece of you. A simple, lasting personalised token.',
    price: 90,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 17,
    name: 'The Cap & Crew Set',
    emoji: '🧢',
    images: ['images/cap_set.jpg'],
    desc: 'Cap, keyring, coaster, and mug — a full lifestyle set for the man who moves with style. Everything personalised, nothing generic.',
    price: 580,
    options: [],
    cats: ['birthday-him', 'fathers-day'],
    fathersDay: true
  },
  {
    id: 18,
    name: 'The Glam Girl Set',
    emoji: '💄',
    images: ['images/make_upset.jpg'],
    desc: 'She deserves to feel seen. A personalised compact mirror and bamboo sippy cup — because the woman who gives everything should have something made just for her.',
    price: 550,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 19,
    name: 'The Her Time Set',
    emoji: '🍷',
    images: ['images/wine_tumbler.jpg'],
    desc: 'For the woman who never stops — a wine tumbler, a notebook for her thoughts, and a 40oz tumbler to keep her going. All personalised, all hers.',
    price: 750,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 20,
    name: 'Personalised Platter Board',
    emoji: '🧀',
    images: ['images/platter_board.jpg'],
    desc: 'She hosts, she feeds, she gathers people together. A personalised platter board engraved with her name — for the woman who makes every table feel like home.',
    price: 300,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 21,
    name: 'Personalised Wooden Cutting Board',
    emoji: '🪵',
    images: ['images/wooden_cutting_board.jpg'],
    desc: 'In her kitchen, everything is made with love. A personalised wooden cutting board engraved with her name — a daily reminder that she is appreciated.',
    price: 250,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 22,
    name: 'Personalised Sippy Cup',
    emoji: '🥤',
    images: ['images/sippy_cup.jpg'],
    desc: 'Small gift, big feeling. A personalised bamboo-lid sippy cup carrying her name — because even the smallest things can say exactly the right thing.',
    price: 160,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 23,
    name: 'The Write Her Off Set',
    emoji: '📓',
    images: ['images/notebook_tumbler_set.jpg'],
    desc: 'A personalised notebook for her dreams and a tumbler for her mornings. For the woman who is always thinking, always planning, always doing.',
    price: 400,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 24,
    name: 'The Memory Blanket',
    emoji: '🛋️',
    images: ['images/personalised_fleece_blanket.jpg'],
    desc: 'Wrap her in every moment that matters. A personalised fleece blanket printed with photos, kids\'s drawings, or memories — 100x160cm of pure love.',
    price: 350,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 25,
    name: 'The Sweet Treat Set',
    emoji: '🎁',
    images: ['images/tote_bag_sippy-cup_set.jpg'],
    desc: 'A personalised sippy cup, a tote bag she\'ll actually use, and 8-piece chocolates to make her smile. Everything she deserves, nothing she expected.',
    price: 340,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 26,
    name: 'The Rest Well Set',
    emoji: '🩴',
    images: [
      'images/personalised_slipper_set_1.jpg',
      'images/personalised_slipper_set_2.jpg',
      'images/personalised_slipper_set_3.jpg',
      'images/personalised_slipper_set_4.jpg'
    ],
    desc: 'Tell her to put her feet up — literally. Personalised slippers, a mug made for her, and Ferrero Rocher chocolates. For the woman who has earned every second of rest.',
    price: 450,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 27,
    name: 'The Full Bouquet Experience',
    emoji: '💐',
    images: ['images/flowers-sippy-cup_set.jpg'],
    desc: 'Fresh flowers, a personalised sippy cup, latte sachets, non-alcoholic champagne, dark chocolate, and a keyring. When you want her to feel everything at once.',
    price: 1050,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 28,
    name: 'The Celebration Board',
    emoji: '🎉',
    images: ['images/personalised_charcuterie_board.jpg'],
    desc: 'A personalised charcuterie board loaded with assorted cheese, crackers, Ferrero Rocher, and nuts. For the woman worth celebrating properly.',
    price: 700,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 29,
    name: 'The Treat Yourself Set',
    emoji: '☕',
    images: ['images/notebook_tumbler_chocolate_set.jpg'],
    desc: 'A personalised notebook, tumbler, mug, sweets, and chocolates — all in one gift. Because sometimes the best gift is everything she wouldn\'t buy for herself.',
    price: 650,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 30,
    name: 'The Cosy Corner Set',
    emoji: '🛋️',
    images: ['images/cushion_mug_set.jpg'],
    desc: "A personalised cushion and mug, wrapped in a gift bag and ready to make her feel at home. For the woman who deserves her own little corner of comfort.",
    price: 330,
    options: [],
    cats: ['birthday-her']
  },
  {
    id: 31,
    name: 'The Boss Her Set',
    emoji: '📋',
    images: ['images/organiser_set.jpg'],
    desc: 'Planner, notebook, bamboo sippy cup, door hanger, mat, and pencil case — all personalised. For the woman who runs everything and deserves to look good doing it.',
    price: 600,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 32,
    name: "The Gift Box She'll Actually Love",
    emoji: '🎀',
    images: ['images/notebook_tumbler_sweet_choc_gift_box.jpg'],
    desc: "A personalised notebook and tumbler paired with sweets and chocolates, boxed and ready to give. No overthinking — just everything she loves in one place.",
    price: 550,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 33,
    name: 'The Soft Life Set',
    emoji: '💫',
    images: ['images/cushion_notebook_set.jpg'],
    desc: "A personalised cushion and notebook set in a gift bag — for the woman who carries everyone else's world and deserves something made entirely for hers.",
    price: 450,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 34,
    name: 'The Bold & Blessed Set',
    emoji: '✨',
    images: ['images/sequin_notebook.jpg'],
    desc: "For the woman who shines without apology. A sequin notebook and 40oz tumbler in a gift bag — because her faith is loud, her vision is clear, and she was never meant to blend in.",
    price: 680,
    options: [],
    cats: ['birthday-her', 'mothers-day']
  },
  {
    id: 35,
    name: 'The Curated Welcome',
    emoji: '🎁',
    images: [
      'images/aesthetic_basket_1.jpg',
      'images/aesthetic_basket_2.jpg',
      'images/aesthetic_basket_3.jpg',
      'images/aesthetic_basket_4.jpg'
    ],
    desc: 'Because first impressions are everything. A fully branded corporate basket — personalised mousepad, notebook, tumbler, sweet treats, chocolate, and lotion. The kind of gift that says your company pays attention.',
    price: 880,
    options: [],
    cats: ['corporate']
  },
  {
    id: 36,
    name: 'The Intentional Desk',
    emoji: '📋',
    images: [
      'images/the_organised_set_1.jpg',
      'images/the_organised_set_2.jpg'
    ],
    desc: 'For the person who builds their day with purpose. A branded mousepad, diary, notebook, and tumbler — everything they reach for every morning, carrying your company\'s name.',
    price: 850,
    options: [],
    cats: ['corporate']
  },
  {
    id: 37,
    name: 'The Branded Stanley',
    emoji: '🥤',
    images: [
      'images/company_tubler_1.jpg',
      'images/company_tubler_2.jpg'
    ],
    desc: 'They carry it everywhere — to meetings, to the gym, through long days. A 40oz Stanley tumbler branded with your company logo. Useful enough to use daily. Quality enough to mean something.',
    price: 450,
    options: [],
    cats: ['corporate']
  },
  {
    id: 38,
    name: 'The Boardroom Mug',
    emoji: '☕',
    images: [
      'images/corporate_mug_1.jpg',
      'images/corporate_mug_2.jpg'
    ],
    desc: 'Simple. Sharp. Unmistakably yours. A branded corporate mug presented in a matching gift box — the kind of detail that makes your company look like it cares, because it does.',
    price: 120,
    options: [],
    cats: ['corporate']
  },
  {
    id: 39,
    name: 'The Beauty Edit',
    emoji: '💄',
    images: [
      'images/beauty_set_1.jpg',
      'images/beauty_set_2.jpg'
    ],
    desc: 'For the woman on your team who holds everything together. A branded tumbler, compact mirror, makeup bag, notebook, and lotion — a corporate gift that finally feels personal.',
    price: 800,
    options: [],
    cats: ['corporate']
  },
  {
    id: 40,
    name: 'The Signature Pour',
    emoji: '🍷',
    images: ['images/corporate_wine_tumblers.jpg'],
    desc: 'Your logo on the glass they raise at the end of a hard week. A single branded wine tumbler — understated, elegant, and entirely on brand. The kind of gift that gets noticed without trying.',
    price: 200,
    options: [],
    cats: ['corporate']
  },
  {
    id: 41,
    name: "The Men's Appreciation Box",
    emoji: '🎖️',
    images: ['images/mens_appreciation_gift.jpg'],
    desc: 'For the man who shows up every day and rarely hears thank you. A branded notebook, tumbler, chocolates, and sweets — packaged to say what words often don\'t. Recognition, done properly.',
    price: 550,
    options: [],
    cats: ['corporate']
  },
  {
    id: 42,
    name: 'The Glamour Desk Set',
    emoji: '✨',
    images: ['images/glamour_set_tumbler.jpg'],
    desc: 'She brings beauty to everything she touches — her workspace should be no different. A branded tumbler, sequin mousepad, makeup bag, and notebook. For the woman who works hard and looks good doing it.',
    price: 780,
    options: [],
    cats: ['corporate', 'birthday-her']
  },
  {
    id: 43,
    name: 'The Executive Lunch Set',
    emoji: '🍱',
    images: [
      'images/lunch_deluxe_set_1.jpg',
      'images/lunch_deluxe_set_2.jpg'
    ],
    desc: 'Everything he needs, monogrammed and ready. A personalised lunch bag, leather notebook, tumbler, stylus pen, and power bank — built for the executive who moves fast and never compromises on detail.',
    price: 750,
    options: [],
    cats: ['corporate']
  },
  {
    id: 44,
    name: 'The Two-Tone Mug',
    emoji: '☕',
    images: [
      'images/two_toned_mug_1.jpg',
      'images/two_toned_mug_2.jpg'
    ],
    desc: 'The mug on every desk that starts every conversation. A personalised two-tone mug with matching spoon — branded with a name or logo, and impossible to mistake for anyone else\'s.',
    price: 130,
    options: [],
    cats: ['corporate']
  },
  {
    id: 45,
    name: 'The Welcome Romper',
    emoji: '👶',
    images: ['images/baby_romper_long_sleeve.jpg'],
    desc: 'Their name. Their arrival. Their first piece of something made just for them. A personalised long-sleeve baby romper — soft, warm, and ready to welcome the newest person in your world.',
    price: 150,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 46,
    name: 'The Little One Set',
    emoji: '🧢',
    images: ['images/baby_romper_hat_set.jpg'],
    desc: 'A short-sleeve romper and matching hat, both personalised with baby\'s name. The kind of gift that gets kept long after they\'ve grown out of it — because it was made for them before they even knew who they were.',
    price: 230,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 47,
    name: 'The Wrap Them In Love Blanket',
    emoji: '🛏️',
    images: [
      'images/baby_fleece_receiving_blankets_1.jpg',
      'images/baby_fleece_receiving_blankets_2.jpg',
      'images/baby_fleece_receiving_blankets_3.jpg'
    ],
    desc: 'Soft, personalised, and made to be held close. A fleece or receiving blanket printed with baby\'s name — for every feed, every nap, and every moment that deserves to feel like home.',
    price: 250,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 48,
    name: 'The First Hello Romper',
    emoji: '🌟',
    images: ['images/baby_romper.jpg'],
    desc: 'Simple, soft, and entirely theirs. A personalised baby romper carrying their name from day one — because even the smallest person deserves something made just for them.',
    price: 130,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 49,
    name: 'The First Sip Cup',
    emoji: '🍼',
    images: [
      'images/baby_feeding_cup_1.jpg',
      'images/baby_feeding_cup_2.jpg'
    ],
    desc: 'Their name on the cup they reach for first. A personalised baby feeding cup — because even the smallest details of their earliest days deserve to be made just for them.',
    price: 250,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 50,
    name: 'The Little Explorer Pack',
    emoji: '🎒',
    images: [
      'images/kiddies_backpack_1.jpg',
      'images/kiddies_backpack_2.jpg'
    ],
    desc: 'Their name on their back before they even know where they\'re going. A personalised kiddies backpack — for the little one who is already on an adventure.',
    price: 250,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 51,
    name: 'The Gentle Touch Cloth',
    emoji: '🤍',
    images: ['images/burp_cloths.jpg'],
    desc: 'Soft on their skin, personal from day one. Personalised burp cloths carrying baby\'s name — for every tender moment in those early weeks that go by far too fast.',
    price: 150,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 52,
    name: 'The Full Arrival Gift',
    emoji: '🌈',
    images: [
      'images/teddy_burp_1.jpg',
      'images/teddy_burp_2.jpg'
    ],
    desc: 'For the family who just changed forever. A teddy, burp cloth, blanket, dummy, feeding cup, beanie, and baby grow — every piece personalised, everything they need for the first days of the rest of their lives.',
    price: 1150,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 53,
    name: 'The Adventure Starts Here Set',
    emoji: '🧸',
    images: ['images/teddy_backpack_set.jpg'],
    desc: 'A teddy with a personalised top, a personalised blanket, feeding cup, and backpack — because from the very first day, they are going somewhere. Help them arrive in style.',
    price: 1080,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 54,
    name: 'The Welcome To The World Set',
    emoji: '⭐',
    images: [
      'images/baby_grow_set_1.jpg',
      'images/baby_grow_set_2.jpg'
    ],
    desc: 'A personalised baby grow, beanie, teddy, dummy, feeding cup, and blanket — everything waiting for them the moment they arrive. The gift that says we were ready for you, and we made it just for you.',
    price: 1050,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 55,
    name: 'Personalised Baby Cushion',
    emoji: '💛',
    images: [
      'images/baby_cushion_1.jpg',
      'images/baby_cushion_2.jpg',
      'images/baby_cushion_3.jpg'
    ],
    desc: 'Their name, softly printed, on something that holds them close. A personalised baby cushion — a small comfort that becomes a lasting keepsake.',
    price: 160,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 56,
    name: 'The Tiny Traveller Set',
    emoji: '🌍',
    images: [
      'images/backpack_teddy_1.jpg',
      'images/backpack_teddy_2.jpg'
    ],
    desc: 'A personalised backpack, teddy, blanket, and feeding cup — for the little one who hasn\'t gone anywhere yet but is already going everywhere. The complete set for their very first chapter.',
    price: 980,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 57,
    name: 'The Welcomed With Love Basket',
    emoji: '🧴',
    images: ['images/baby_lotion_powder_set.jpg'],
    desc: 'Baby lotion, powder, and wash. A personalised outfit with vest, a personalised basket, dummy, and feeding cup — a full welcome, wrapped in care. For the baby who is already so loved, and the parents who want to show it.',
    price: 850,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 58,
    name: 'The Comfort Keeper',
    emoji: '🤍',
    images: [
      'images/baby_dummy_1.jpg',
      'images/baby_dummy_2.jpg',
      'images/baby_dummy_3.jpg'
    ],
    desc: "The thing that quiets the world for them. A personalised dummy — small, soft, and carrying their name before they can even say it.",
    price: 150,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 59,
    name: 'The Daily Essentials Set',
    emoji: '🍼',
    images: [
      'images/feeding_cup_vest_set_1.jpg',
      'images/feeding_cup_vest_set_2.jpg'
    ],
    desc: "The things they reach for every single day — a personalised feeding cup, vest, blanket, and dummy. Simple gifts that become the rhythm of their earliest life.",
    price: 650,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 60,
    name: 'The Grand Welcome Basket',
    emoji: '🧺',
    images: [
      'images/basket_hat_blanket_1.jpg',
      'images/basket_hat_blanket_2.jpg'
    ],
    desc: "Everything they could need, all in one place. A personalised basket with hat, blanket, burp cloth, feeding cup, vest, and teddy — the kind of gift that makes a family feel truly celebrated.",
    price: 1100,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 61,
    name: 'The Soothe & Nourish Set',
    emoji: '💛',
    images: ['images/feed_cup_dummy.jpg'],
    desc: "Two of the most-reached-for things in a new baby's world — a personalised feeding cup and a personalised dummy. Practical, personal, and impossible to mix up with anyone else's.",
    price: 320,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 62,
    name: 'The Held Close Set',
    emoji: '🌸',
    images: [
      'images/cushion_burp_cloth_set_1.jpg',
      'images/cushion_burp_cloth_set_2.jpg'
    ],
    desc: "A blanket, feeding cup, cushion, burp cloth, teddy, and romper — all personalised. For every moment they are held, fed, and wrapped in love. The gift for the family in the thick of the beautiful, exhausting beginning.",
    price: 950,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 63,
    name: 'The Adventure Bottle',
    emoji: '🍶',
    images: [
      'images/kids_stainless_steel_bottle_1.jpg',
      'images/kids_stainless_steel_bottle_2.jpg'
    ],
    desc: "Their name on the bottle they carry everywhere. A personalised stainless steel kids bottle — built for school bags, sports days, and every adventure in between.",
    price: 200,
    options: [],
    cats: ['kids']
  },
  {
    id: 64,
    name: 'The Ready For Anything Set',
    emoji: '🎒',
    images: ['images/kids_backpack_bottle_set_1.jpg'],
    desc: "A personalised backpack and matching bottle — because every big day starts with having everything you need. Made for the little one who is always on the go.",
    price: 430,
    options: [],
    cats: ['kids']
  },
  {
    id: 65,
    name: 'The Little Legend Pack',
    emoji: '🎒',
    images: ['images/kids_backpack.jpg'],
    desc: "Their name on their back, their whole world inside. A personalised kids backpack — for the child who shows up ready for whatever the day brings.",
    price: 250,
    options: [],
    cats: ['kids']
  },
  {
    id: 66,
    name: 'The Lunchtime Set',
    emoji: '🥪',
    images: [
      'images/kids_lunchbox_set_1.jpg',
      'images/kids_lunchbox_set_2.jpg',
      'images/kids_lunchbox_set_3.jpg'
    ],
    desc: "Lunchtime just got personal. A personalised kids lunchbox set — because the things they use every day should feel like they were made just for them. Because they were.",
    price: 330,
    options: [],
    cats: ['kids']
  },
  {
    id: 67,
    name: 'The Carry It Proud Bag',
    emoji: '👜',
    images: ['images/kids_lunch_bags.jpg'],
    desc: "Their name on the bag they carry into school every single day. A personalised kids lunch bag — small enough to pack, big enough to matter.",
    price: 200,
    options: [],
    cats: ['kids']
  },
  {
    id: 68,
    name: 'The Full Pack Set',
    emoji: '🎁',
    images: ['images/kids_backpack_puzzle_bottle.jpg'],
    desc: "A personalised backpack, puzzle, bottle, and gift bag — everything a child needs, wrapped up and ready to give. For the kid who deserves a gift that actually gets used.",
    price: 600,
    options: [],
    cats: ['kids']
  },
  {
    id: 69,
    name: 'The Complete Lunchtime Kit',
    emoji: '🍱',
    images: ['images/lunch_bag.jpg'],
    desc: "Lunch bag, bottle, and lunchbox — all personalised, all in one. For the child who deserves to open their bag and find something made just for them, every single day.",
    price: 530,
    options: [],
    cats: ['kids']
  },
  {
    id: 70,
    name: 'The Pampered Little One Set',
    emoji: '🛁',
    images: ['images/kids_gown_1.jpg'],
    desc: "A personalised gown and slippers — because even the little ones deserve to feel completely at home in something made just for them. Wrap them in comfort, wrap them in their name.",
    price: 550,
    options: [],
    cats: ['kids']
  },
  {
    id: 71,
    name: 'The Big Kid Tumbler',
    emoji: '🥤',
    images: ['images/kids_tubler.jpg'],
    desc: "They grow up fast — give them something that keeps up. A personalised 40oz tumbler for the kid who means business. Their name, their colour, their cup.",
    price: 400,
    options: [],
    cats: ['kids', 'bottles']
  },
  {
    id: 72,
    name: 'The Two-Tone Explorer',
    emoji: '🍶',
    images: ['images/stainless_steel_bottle.jpg'],
    desc: "Two colours, one name, zero excuses for losing it. A personalised two-tone stainless steel bottle — the one they'll actually want to carry.",
    price: 230,
    options: [],
    cats: ['kids', 'bottles']
  },
  {
    id: 73,
    name: 'The Healing Basket',
    emoji: '🌿',
    images: ['images/teddy_ginger_tea_set.jpg'],
    desc: "When words aren't enough, send this. A wooden basket filled with a tumbler, teddy, ginger tea, honey, Ferrero Rocher, nuts, fruit bits, a plant, devotional book, candle, and a card — everything they need to feel held, loved, and on the mend.",
    price: 1200,
    options: [],
    cats: ['get-well-soon']
  },
  {
    id: 74,
    name: 'The Rest & Restore Set',
    emoji: '🛁',
    images: ['images/gown_slipper_sick.jpg'],
    desc: "Tell them to stop, rest, and let their body do its work. A personalised gown and slippers paired with bath salts, body wash, body scrub, body butter, a candle, and a card — the gift that says slow down, we've got you.",
    price: 1200,
    options: [],
    cats: ['get-well-soon']
  },
  {
    id: 75,
    name: 'The On The Mend Kit',
    emoji: '💛',
    images: ['images/head_rest_tubler.jpg'],
    desc: "Practical, personal, and full of care. A head rest, tumbler, five fruit and energy bars, toiletry bag, body lotion, nougat, and a card — because getting better is easier when someone thought of everything.",
    price: 950,
    options: [],
    cats: ['get-well-soon']
  },
  {
    id: 76,
    name: 'The Wooden Handle Mug',
    emoji: '☕',
    images: ['images/mug_wooden_handle.jpg'],
    desc: "Warm hands, warm heart. A personalised mug with a natural wooden handle — the kind of cup that makes every morning feel a little more intentional.",
    price: 130,
    options: [],
    cats: ['mugs']
  },
  {
    id: 77,
    name: 'The Classic Mug',
    emoji: '☕',
    images: [
      'images/plain_white_mug.jpg',
      'images/plain_white_mug_with_box.jpg'
    ],
    desc: "Clean, classic, and entirely theirs. A personalised white mug — the one they reach for first, every single morning.",
    price: 0,
    options: [
      { name: 'Without box', price: 100 },
      { name: 'With gift box', price: 120 }
    ],
    cats: ['mugs']
  },
  {
    id: 78,
    name: 'The Black Frame Mug',
    emoji: '☕',
    images: ['images/black_frame_mug.jpg'],
    desc: "Bold framing, personal touch. A personalised black frame mug that turns an everyday cup into a statement — presented in a gift box for the full experience.",
    price: 0,
    options: [
      { name: 'Without box', price: 130 },
      { name: 'With gift box', price: 150 }
    ],
    cats: ['mugs']
  },
  {
    id: 79,
    name: 'The Spoon & Sip Mug',
    emoji: '🥄',
    images: ['images/mug_with_spoon.jpg'],
    desc: "The matching set they didn't know they needed. A personalised mug with matching spoon — available in Green, Red, Navy, Blue, Yellow, Pink, Orange, and Purple. The perfect finishing touch for any desk or kitchen.",
    price: 0,
    options: [
      { name: 'Without box', price: 120 },
      { name: 'With gift box', price: 140 }
    ],
    cats: ['mugs']
  },
  {
    id: 80,
    name: 'The Two-Tone Mug',
    emoji: '☕',
    images: [
      'images/two-toned-mug.jpg',
      'images/two_toned_mug_with_box.jpg'
    ],
    desc: "Two colours, one name, zero chance of being mistaken for someone else's. A personalised two-tone mug available in Green, Red, Navy, Blue, Yellow, Pink, Orange, and Purple.",
    price: 0,
    options: [
      { name: 'Without box', price: 110 },
      { name: 'With gift box', price: 130 }
    ],
    cats: ['mugs']
  },
  {
    id: 81,
    name: 'The Frosted Mug',
    emoji: '☕',
    images: [
      'images/frosted_mug.jpg',
      'images/frosted_mug_with_box.jpg'
    ],
    desc: "Soft finish, strong impression. A personalised frosted mug in Pink, Green, Yellow, Red, or Blue — the kind of gift that looks as good on the shelf as it does in their hands.",
    price: 0,
    options: [
      { name: 'Without box', price: 110 },
      { name: 'With gift box', price: 120 }
    ],
    cats: ['mugs']
  },
  {
    id: 82,
    name: 'The Cappuccino Mug',
    emoji: '☕',
    images: [
      'images/corp_cuppacino_1.jpg',
      'images/corp_cuppacino_2.jpg',
      'images/corp_cuppacino_3.jpg',
      'images/corp_cuppacino_4.jpg'
    ],
    desc: "The mug that belongs in a meeting room and a kitchen table. A personalised cappuccino-style mug — branded or gifted, it always looks the part.",
    price: 120,
    options: [],
    cats: ['mugs']
  }
];
