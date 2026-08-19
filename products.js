const products = [
  {
    id: 1,
    name: 'Kingdom Kit',
    emoji: '🧔',
    images: ['images/kingdom-kit.jpg'],
    desc: 'Personalised beard care gift set. Name printed on the bottle, full kit personalisation available on request.',
    price: 300,
    options: [],
    cats: ['christian-gifts', 'fathers-day', 'for-him'],
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
    desc: 'A refined gift set for the man who means business. Choose your tier, from a personalised travel mug up to the full executive bundle.',
    price: 0,
    options: [
      { name: 'Personalised travel mug', price: 200 },
      { name: 'Personalised travel mug + personalised tie', price: 350 },
      { name: 'Personalised travel mug + personalised tie + personalised mousepad', price: 450 }
    ],
    cats: ['fathers-day', 'for-him'],
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
    cats: ['fathers-day', 'for-him'],
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
    desc: 'For the dad who deserves to rest. A personalised relaxation set, choose the level of luxury.',
    price: 0,
    options: [
      { name: 'Personalised slippers', price: 270 },
      { name: 'Personalised slippers + personalised gown', price: 690 },
      { name: 'Personalised slippers + personalised gown + personalised mug', price: 790 }
    ],
    cats: ['best-sellers', 'fathers-day', 'for-him'],
    fathersDay: true,
    fathersDayTiered: true
  },
  {
    id: 5,
    name: 'Kingdom Man Bible Set',
    emoji: '📖',
    images: ['images/bible_notebook_pen_mug.jpg'],
    desc: 'Personalised Bible, notebook, mug, and pen, every piece carrying his name.',
    price: 600,
    options: [],
    cats: ['gift-boxes', 'christian-gifts', 'fathers-day', 'for-him'],
    fathersDay: true
  },
  {
    id: 6,
    name: 'Football Set',
    emoji: '⚽',
    images: ['images/football-set.jpg'],
    desc: "Personalised mug, mug box, and flask with matching gift bag, all printed in his favourite team's colours.",
    price: 450,
    options: [],
    cats: ['gift-boxes', 'fathers-day', 'for-him'],
    fathersDay: true
  },
  {
    id: 7,
    name: 'Personalised Toolbox Set',
    emoji: '🔧',
    images: ['images/toolbox-set.jpg'],
    desc: 'A personalised toolbox set, built for the man who fixes everything.',
    price: 500,
    options: [],
    cats: ['gift-boxes', 'fathers-day', 'for-him'],
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
    cats: ['fathers-day', 'for-him'],
    fathersDay: true
  },
  {
    id: 9,
    name: 'Personalised Travel & Gym Bag',
    emoji: '🏋️',
    images: ['images/travel_gym_sports_bag.jpg'],
    desc: 'Built for the man always on the move. A quality bag personalised with his name, from the gym to the weekend away.',
    price: 500,
    options: [],
    cats: ['fathers-day', 'for-him'],
    fathersDay: true
  },
    {
    id: 10,
    name: 'Personalised Thermo Display Flask',
    emoji: '🌡️',
    images: ['images/flask_thermometer.jpg'],
    desc: 'A personalised flask with a temperature display built into the lid, so their drink is always just right. Sleek, functional, and entirely theirs.',
    price: 300,
    options: [],
    cats: ['fathers-day', 'for-him', 'mugs']
  },
  {
    id: 11,
    name: 'Personalised Dad Socks',
    emoji: '🧦',
    images: ['images/dad_socks.jpg'],
    desc: "His favourite scripture, his nickname, or a message only he'll understand, sublimation-printed on soft polyester. Moisture-wicking and quick-drying, they pull sweat away two to three times faster than cotton, hard-wearing and colour-fast from the gym to everyday wear.",
    price: 150,
    options: [],
    cats: ['christian-gifts', 'fathers-day', 'for-him']
  },
  {
    id: 12,
    name: 'Personalised Wooden Cutting Board',
    emoji: '🪵',
    images: ['images/personalised_wooden_cutting-board.jpg'],
    desc: 'A quality wooden cutting board engraved with his name or a meaningful message. Built to last, made to matter.',
    price: 250,
    options: [],
    cats: ['fathers-day', 'for-him', 'home']
  },
  {
    id: 13,
    name: 'Personalised Hip Flask',
    emoji: '🥃',
    images: ['images/personalised_hip_flask.jpg'],
    desc: 'Pocket-sized and personal. Engraved with his name or a message for the man who appreciates the finer things.',
    price: 200,
    options: [],
    cats: ['fathers-day', 'for-him']
  },
  {
    id: 14,
    name: 'Personalised Wallet',
    emoji: '👛',
    images: [
      'images/personalised_wallet_1.jpg',
      'images/personalised_wallet_2.jpg'
    ],
    desc: "A wallet personalised with his favourite scripture or a message that speaks to who he is, carried with him every day.",
    price: 250,
    options: [],
    cats: ['christian-gifts', 'fathers-day', 'for-him']
  },
  {
    id: 15,
    name: 'Personalised Lighter',
    emoji: '🔥',
    images: ['images/personalised_lighter.jpg'],
    desc: 'Small but significant. A personalised lighter engraved with his name or a short message he will always carry.',
    price: 150,
    options: [],
    cats: ['fathers-day', 'for-him']
  },
  {
    id: 16,
    name: 'Personalised Keyring',
    emoji: '🔑',
    images: ['images/personalised_keyring.jpg'],
    desc: "Every time he reaches for his keys, he carries a piece of you. A lightweight polymer keyring, sublimation-printed to resist cracking, scratching, and fading, so it lasts as long as the sentiment.",
    price: 90,
    options: [],
    cats: ['fathers-day', 'for-him']
  },
  {
    id: 17,
    name: 'The Cap & Crew Set',
    emoji: '🧢',
    images: ['images/cap_set.jpg'],
    desc: "A durable, flexible trucker cap with a keyring, coaster, and mug, a full lifestyle set for the man who moves with style. Everything personalised, nothing generic.",
    price: 580,
    options: [],
    cats: ['gift-boxes', 'fathers-day', 'for-him'],
    fathersDay: true
  },
  {
    id: 18,
    name: 'The Glam Girl Set',
    emoji: '💄',
    images: ['images/make_upset.jpg'],
    desc: 'She deserves to feel seen. A personalised compact mirror and bamboo sippy cup, because the woman who gives everything should have something made just for her.',
    price: 550,
    options: [],
    cats: ['mothers-day', 'for-her']
  },
  {
    id: 19,
    name: 'The Her Time Set',
    emoji: '🍷',
    images: ['images/wine_tumbler.jpg'],
    desc: "For the woman who never stops, a wine tumbler, a notebook for her thoughts, and a 1.2L tumbler to keep her going. All personalised, all hers.",
    price: 750,
    options: [],
    cats: ['gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 20,
    name: 'Personalised Platter Board',
    emoji: '🧀',
    images: ['images/platter_board.jpg'],
    desc: 'She hosts, she feeds, she gathers people together. A personalised platter board engraved with her name, for the woman who makes every table feel like home.',
    price: 300,
    options: [],
    cats: ['celebrating-love', 'mothers-day', 'for-her', 'home']
  },
  {
    id: 21,
    name: 'Personalised Wooden Cutting Board',
    emoji: '🪵',
    images: ['images/wooden_cutting_board.jpg'],
    desc: 'In her kitchen, everything is made with love. A personalised wooden cutting board engraved with her name, a daily reminder that she is appreciated.',
    price: 250,
    options: [],
    cats: ['celebrating-love', 'mothers-day', 'for-her', 'home']
  },
  {
    id: 22,
    name: 'Personalised Sippy Cup',
    emoji: '🥤',
    images: ['images/sippy_cup.jpg'],
    desc: 'Small gift, big feeling. A personalised bamboo-lid sippy cup carrying her name, because even the smallest things can say exactly the right thing.',
    price: 160,
    options: [],
    cats: ['mothers-day', 'for-her']
  },
  {
    id: 23,
    name: 'The Write Her Off Set',
    emoji: '📓',
    images: ['images/notebook_tumbler_set.jpg'],
    desc: 'A personalised notebook for her dreams and a tumbler for her mornings. For the woman who is always thinking, always planning, always doing.',
    price: 400,
    options: [],
    cats: ['mothers-day', 'for-her']
  },
  {
    id: 24,
    name: 'The Memory Blanket',
    emoji: '🛋️',
    images: ['images/personalised_fleece_blanket.jpg'],
    desc: 'Wrap her in every moment that matters. A personalised fleece blanket printed with photos, kids\'s drawings, or memories, 100x160cm of pure love.',
    price: 350,
    options: [],
    cats: ['celebrating-love', 'mothers-day', 'for-her', 'home']
  },
  {
    id: 25,
    name: 'The Sweet Treat Set',
    emoji: '🎁',
    images: ['images/tote_bag_sippy-cup_set.jpg'],
    desc: 'A personalised sippy cup, a tote bag she\'ll actually use, and 8-piece chocolates to make her smile. Everything she deserves, nothing she expected.',
    price: 340,
    options: [],
    cats: ['mothers-day', 'for-her']
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
    desc: 'Tell her to put her feet up, literally. Personalised slippers, a mug made for her, and Ferrero Rocher chocolates. For the woman who has earned every second of rest.',
    price: 450,
    options: [],
    cats: ['best-sellers', 'gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 27,
    name: 'The Full Bouquet Experience',
    emoji: '💐',
    images: ['images/flowers-sippy-cup_set.jpg'],
    desc: 'Fresh flowers, a personalised sippy cup, latte sachets, non-alcoholic champagne, dark chocolate, and a keyring. When you want her to feel everything at once.',
    price: 1050,
    options: [],
    cats: ['gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 28,
    name: 'The Celebration Board',
    emoji: '🎉',
    images: ['images/personalised_charcuterie_board.jpg'],
    desc: 'A personalised charcuterie board loaded with assorted cheese, crackers, Ferrero Rocher, and nuts. For the woman worth celebrating properly.',
    price: 700,
    options: [],
    cats: ['mothers-day', 'for-her']
  },
  {
    id: 29,
    name: 'The Treat Yourself Set',
    emoji: '☕',
    images: ['images/notebook_tumbler_chocolate_set.jpg'],
    desc: 'A personalised notebook, tumbler, mug, sweets, and chocolates, all in one gift. Because sometimes the best gift is everything she wouldn\'t buy for herself.',
    price: 650,
    options: [],
    cats: ['gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 30,
    name: 'The Cosy Corner Set',
    emoji: '🛋️',
    images: ['images/cushion_mug_set.jpg'],
    desc: "A personalised cushion and mug, wrapped in a gift bag and ready to make her feel at home. For the woman who deserves her own little corner of comfort.",
    price: 330,
    options: [],
    cats: ['for-her']
  },
  {
    id: 31,
    name: 'The Boss Her Set',
    emoji: '📋',
    images: ['images/organiser_set.jpg'],
    desc: 'Planner, notebook, bamboo sippy cup, door hanger, mat, and pencil case, all personalised. For the woman who runs everything and deserves to look good doing it.',
    price: 600,
    options: [],
    cats: ['gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 32,
    name: "The Gift Box She'll Actually Love",
    emoji: '🎀',
    images: ['images/notebook_tumbler_sweet_choc_gift_box.jpg'],
    desc: "A personalised notebook and tumbler paired with sweets and chocolates, boxed and ready to give. No overthinking, just everything she loves in one place.",
    price: 550,
    options: [],
    cats: ['gift-boxes', 'mothers-day', 'for-her']
  },
  {
    id: 33,
    name: 'The Soft Life Set',
    emoji: '💫',
    images: ['images/cushion_notebook_set.jpg'],
    desc: "A personalised cushion and notebook set in a gift bag. For the woman who carries everyone else's world and deserves something made entirely for hers.",
    price: 450,
    options: [],
    cats: ['mothers-day', 'for-her']
  },
  {
    id: 34,
    name: 'The Bold & Blessed Set',
    emoji: '✨',
    images: ['images/sequin_notebook.jpg'],
    desc: "For the woman who shines without apology. A sequin notebook and 1.2L tumbler in a gift bag, because her faith is loud, her vision is clear, and she was never meant to blend in.",
    price: 680,
    options: [],
    cats: ['gift-boxes', 'christian-gifts', 'mothers-day', 'for-her']
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
    desc: 'Because first impressions are everything. A fully branded corporate basket, personalised mousepad, notebook, tumbler, sweet treats, chocolate, and lotion. The kind of gift that says your company pays attention.',
    price: 880,
    options: [],
    cats: ['best-sellers', 'corporate']
  },
  {
    id: 36,
    name: 'The Intentional Desk',
    emoji: '📋',
    images: [
      'images/the_organised_set_1.jpg',
      'images/the_organised_set_2.jpg'
    ],
    desc: 'For the person who builds their day with purpose. A branded mousepad, diary, notebook, and tumbler, everything they reach for every morning, carrying your company\'s name.',
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
    desc: "They carry it everywhere, to meetings, to the gym, through long days. A 1.2L Stanley tumbler branded with your company logo. Useful enough to use daily. Quality enough to mean something.",
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
    desc: 'Simple. Sharp. Unmistakably yours. A branded corporate mug presented in a matching gift box, the kind of detail that makes your company look like it cares, because it does.',
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
    desc: 'For the woman on your team who holds everything together. A branded tumbler, compact mirror, makeup bag, notebook, and lotion, a corporate gift that finally feels personal.',
    price: 800,
    options: [],
    cats: ['corporate']
  },
  {
    id: 40,
    name: 'The Signature Pour',
    emoji: '🍷',
    images: ['images/corporate_wine_tumblers.jpg'],
    desc: 'Your logo on the glass they raise at the end of a hard week. A single branded wine tumbler, understated, elegant, and entirely on brand. The kind of gift that gets noticed without trying.',
    price: 200,
    options: [],
    cats: ['corporate']
  },
  {
    id: 41,
    name: "The Men's Appreciation Box",
    emoji: '🎖️',
    images: ['images/mens_appreciation_gift.jpg'],
    desc: 'For the man who shows up every day and rarely hears thank you. A branded notebook, tumbler, chocolates, and sweets, packaged to say what words often don\'t. Recognition, done properly.',
    price: 550,
    options: [],
    cats: ['gift-boxes', 'corporate']
  },
  {
    id: 42,
    name: 'The Glamour Desk Set',
    emoji: '✨',
    images: ['images/glamour_set_tumbler.jpg'],
    desc: 'She brings beauty to everything she touches, her workspace should be no different. A branded tumbler, sequin mousepad, makeup bag, and notebook. For the woman who works hard and looks good doing it.',
    price: 780,
    options: [],
    cats: ['gift-boxes', 'for-her', 'corporate']
  },
  {
    id: 43,
    name: 'The Executive Lunch Set',
    emoji: '🍱',
    images: [
      'images/lunch_deluxe_set_1.jpg',
      'images/lunch_deluxe_set_2.jpg'
    ],
    desc: 'Everything he needs, monogrammed and ready. A personalised lunch bag, leather notebook, tumbler, stylus pen, and power bank, built for the executive who moves fast and never compromises on detail.',
    price: 750,
    options: [],
    cats: ['gift-boxes', 'corporate']
  },
  {
    id: 44,
    name: 'The Two-Tone Mug',
    emoji: '☕',
    images: [
      'images/two_toned_mug_1.jpg',
      'images/two_toned_mug_2.jpg'
    ],
    desc: 'The mug on every desk that starts every conversation. A personalised two-tone mug with matching spoon, branded with a name or logo, and impossible to mistake for anyone else\'s.',
    price: 130,
    options: [],
    cats: ['corporate']
  },
  {
    id: 45,
    name: 'The Welcome Romper',
    emoji: '👶',
    images: ['images/baby_romper_long_sleeve.jpg'],
    desc: 'Their name. Their arrival. Their first piece of something made just for them. A personalised long-sleeve baby romper, soft, warm, and ready to welcome the newest person in your world.',
    price: 150,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 46,
    name: 'The Little One Set',
    emoji: '🧢',
    images: ['images/baby_romper_hat_set.jpg'],
    desc: 'A short-sleeve romper and matching hat, both personalised with baby\'s name. The kind of gift that gets kept long after they\'ve grown out of it, because it was made for them before they even knew who they were.',
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
    desc: 'Soft, personalised, and made to be held close. A fleece or receiving blanket printed with baby\'s name, for every feed, every nap, and every moment that deserves to feel like home.',
    price: 250,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 48,
    name: 'The First Hello Romper',
    emoji: '🌟',
    images: ['images/baby_romper.jpg'],
    desc: 'Simple, soft, and entirely theirs. A personalised baby romper carrying their name from day one, because even the smallest person deserves something made just for them.',
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
    desc: "Their name on the cup they reach for first. A 320ml stainless steel baby feeding cup, sublimation-printed and built to last, because even the smallest details of their earliest days deserve to be made just for them.",
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
    desc: 'Their name on their back before they even know where they\'re going. A personalised kiddies backpack, for the little one who is already on an adventure.',
    price: 250,
    options: [],
    cats: ['new-baby']
  },
  {
    id: 51,
    name: 'The Gentle Touch Cloth',
    emoji: '🤍',
    images: ['images/burp_cloths.jpg'],
    desc: 'Soft on their skin, personal from day one. Personalised burp cloths carrying baby\'s name, for every tender moment in those early weeks that go by far too fast.',
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
    desc: 'For the family who just changed forever. A teddy, burp cloth, blanket, dummy, feeding cup, beanie, and baby grow, every piece personalised, everything they need for the first days of the rest of their lives.',
    price: 1150,
    options: [],
    cats: ['best-sellers', 'new-baby']
  },
  {
    id: 53,
    name: 'The Adventure Starts Here Set',
    emoji: '🧸',
    images: ['images/teddy_backpack_set.jpg'],
    desc: 'A teddy with a personalised top, a personalised blanket, feeding cup, and backpack, because from the very first day, they are going somewhere. Help them arrive in style.',
    price: 1080,
    options: [],
    cats: ['gift-boxes', 'new-baby']
  },
  {
    id: 54,
    name: 'The Welcome To The World Set',
    emoji: '⭐',
    images: [
      'images/baby_grow_set_1.jpg',
      'images/baby_grow_set_2.jpg'
    ],
    desc: 'A personalised baby grow, beanie, teddy, dummy, feeding cup, and blanket, everything waiting for them the moment they arrive. The gift that says we were ready for you, and we made it just for you.',
    price: 1050,
    options: [],
    cats: ['gift-boxes', 'new-baby']
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
    desc: 'Their name, softly printed, on something that holds them close. A personalised baby cushion, a small comfort that becomes a lasting keepsake.',
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
    desc: 'A personalised backpack, teddy, blanket, and feeding cup, for the little one who hasn\'t gone anywhere yet but is already going everywhere. The complete set for their very first chapter.',
    price: 980,
    options: [],
    cats: ['gift-boxes', 'new-baby']
  },
  {
    id: 57,
    name: 'The Welcomed With Love Basket',
    emoji: '🧴',
    images: ['images/baby_lotion_powder_set.jpg'],
    desc: 'Baby lotion, powder, and wash. A personalised outfit with vest, a personalised basket, dummy, and feeding cup, a full welcome, wrapped in care. For the baby who is already so loved, and the parents who want to show it.',
    price: 850,
    options: [],
    cats: ['gift-boxes', 'new-baby']
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
    desc: "The thing that quiets the world for them. A personalised dummy: small, soft, and carrying their name before they can even say it.",
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
    desc: "The things they reach for every single day: a personalised feeding cup, vest, blanket, and dummy. Simple gifts that become the rhythm of their earliest life.",
    price: 650,
    options: [],
    cats: ['gift-boxes', 'new-baby']
  },
  {
    id: 60,
    name: 'The Grand Welcome Basket',
    emoji: '🧺',
    images: [
      'images/basket_hat_blanket_1.jpg',
      'images/basket_hat_blanket_2.jpg'
    ],
    desc: "Everything they could need, all in one place. A personalised basket with hat, blanket, burp cloth, feeding cup, vest, and teddy. The kind of gift that makes a family feel truly celebrated.",
    price: 1100,
    options: [],
    cats: ['gift-boxes', 'new-baby']
  },
  {
    id: 61,
    name: 'The Soothe & Nourish Set',
    emoji: '💛',
    images: ['images/feed_cup_dummy.jpg'],
    desc: "Two of the most-reached-for things in a new baby's world: a personalised feeding cup and a personalised dummy. Practical, personal, and impossible to mix up with anyone else's.",
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
    desc: "A blanket, feeding cup, cushion, burp cloth, teddy, and romper, all personalised. For every moment they are held, fed, and wrapped in love. The gift for the family in the thick of the beautiful, exhausting beginning.",
    price: 950,
    options: [],
    cats: ['gift-boxes', 'new-baby']
  },
  {
    id: 63,
    name: 'The Adventure Bottle',
    emoji: '🍶',
    images: [
      'images/kids_stainless_steel_bottle_1.jpg',
      'images/kids_stainless_steel_bottle_2.jpg',
      'images/kids_sippy_bottle.jpg'
    ],
    desc: "Their name on the bottle they carry everywhere. A personalised kids bottle, built for school bags, sports days, and every adventure in between.",
    price: 200,
    options: [],
    cats: ['kids', 'mugs']
  },
  {
    id: 64,
    name: 'The Ready For Anything Set',
    emoji: '🎒',
    images: ['images/kids_backpack_bottle_set_1.jpg'],
    desc: "A personalised backpack and matching bottle, because every big day starts with having everything you need. Made for the little one who is always on the go.",
    price: 430,
    options: [],
    cats: ['kids']
  },
  {
    id: 66,
    name: 'The Lunchtime Set',
    emoji: '🥪',
    images: [
      'images/lunch_box_and_bottle.jpg',
      'images/lunch_box_and_bottle_2.jpg'
    ],
    desc: "Lunchtime just got personal. A personalised kids lunch box and matching bottle, because the things they use every day should feel like they were made just for them. Because they were.",
    price: 350,
    options: [],
    cats: ['best-sellers', 'kids']
  },
  {
    id: 67,
    name: 'The Carry It Proud Bag',
    emoji: '👜',
    images: [
      'images/kids_bag.jpg',
      'images/kids_bag_2.jpg',
      'images/kids_lunch_bags.jpg'
    ],
    desc: "Their name on the bag they carry into school every single day. A personalised kids school bag, big enough for everything they need, made to feel like theirs.",
    price: 300,
    options: [],
    cats: ['kids']
  },
  {
    id: 68,
    name: 'The Full Pack Set',
    emoji: '🎁',
    images: ['images/kids_backpack_puzzle_bottle.jpg'],
    desc: "A personalised backpack, puzzle, bottle, and gift bag: everything a child needs, wrapped up and ready to give. For the kid who deserves a gift that actually gets used.",
    price: 600,
    options: [],
    cats: ['gift-boxes', 'kids']
  },
  {
    id: 69,
    name: 'The Complete Lunchtime Kit',
    emoji: '🍱',
    images: ['images/lunch_bag.jpg'],
    desc: "Lunch bag, bottle, and lunchbox, all personalised, all in one. For the child who deserves to open their bag and find something made just for them, every single day.",
    price: 530,
    options: [],
    cats: ['gift-boxes', 'kids']
  },
    {
    id: 71,
    name: 'The 40oz Tumbler',
    emoji: '🥤',
    images: [
      'images/40oz_tumbler.jpg',
      'images/40oz_tumbler_2.jpg',
      'images/kids_tubler.jpg'
    ],
    desc: "A 1.2L personalised tumbler that keeps up with the day. Sublimation-printed so the design won't peel or fade, their name, their colour, their cup, from the desk to the drive home.",
    price: 400,
    options: [],
    cats: ['kids', 'mugs']
  },
  {
    id: 72,
    name: 'The Two-Tone Explorer',
    emoji: '🍶',
    images: [
      'images/kids_two_toned_bottle.jpg',
      'images/kids_two_toned_bottle_2.jpg'
    ],
    desc: "Two colours, one name, zero excuses for losing it. A personalised two-tone stainless steel bottle, the one they'll actually want to carry.",
    price: 250,
    options: [],
    cats: ['kids', 'mugs']
  },
  {
    id: 73,
    name: 'The Healing Basket',
    emoji: '🌿',
    images: ['images/teddy_ginger_tea_set.jpg'],
    desc: "When words aren't enough, send this. A wooden basket filled with a tumbler, teddy, ginger tea, honey, Ferrero Rocher, nuts, fruit bits, a plant, devotional book, candle, and a card: everything they need to feel held, loved, and on the mend.",
    price: 1200,
    options: [],
    cats: ['gift-boxes', 'christian-gifts', 'get-well-soon']
  },
  {
    id: 74,
    name: 'The Rest & Restore Set',
    emoji: '🛁',
    images: ['images/gown_slipper_sick.jpg'],
    desc: "Tell them to stop, rest, and let their body do its work. A personalised gown and slippers paired with bath salts, body wash, body scrub, body butter, a candle, and a card. The gift that says slow down, we've got you.",
    price: 1200,
    options: [],
    cats: ['gift-boxes', 'get-well-soon']
  },
  {
    id: 75,
    name: 'The On The Mend Kit',
    emoji: '💛',
    images: ['images/head_rest_tubler.jpg'],
    desc: "Practical, personal, and full of care. A head rest, tumbler, five fruit and energy bars, toiletry bag, body lotion, nougat, and a card, because getting better is easier when someone thought of everything.",
    price: 950,
    options: [],
    cats: ['gift-boxes', 'get-well-soon']
  },
  {
    id: 76,
    name: 'The Wooden Handle Mug',
    emoji: '☕',
    images: ['images/mug_wooden_handle.jpg'],
    desc: "Warm hands, warm heart. A personalised mug with a natural wooden handle, the kind of cup that makes every morning feel a little more intentional.",
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
    desc: "Clean, classic, and entirely theirs. A personalised white mug, the one they reach for first, every single morning.",
    price: 0,
    options: [
      { name: 'Without box', price: 100 },
      { name: 'With gift box', price: 120 }
    ],
    cats: ['best-sellers', 'mugs']
  },
  {
    id: 78,
    name: 'The Black Frame Mug',
    emoji: '☕',
    images: ['images/black_frame_mug.jpg'],
    desc: "Bold framing, personal touch. A personalised black frame mug that turns an everyday cup into a statement, presented in a gift box for the full experience.",
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
    desc: "The matching set they didn't know they needed. A personalised mug with matching spoon, available in Green, Red, Navy, Blue, Yellow, Pink, Orange, and Purple. The perfect finishing touch for any desk or kitchen.",
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
    desc: "Soft finish, strong impression. A personalised frosted mug in Pink, Green, Yellow, Red, or Blue. The kind of gift that looks as good on the shelf as it does in their hands.",
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
      'images/corp_cuppacino_4.jpg',
      'images/cuppacino_mug.jpg'
    ],
    desc: "The mug that belongs in a meeting room and a kitchen table. A personalised cappuccino-style mug. Branded or gifted, it always looks the part.",
    price: 250,
    options: [],
    cats: ['mugs']
  },
  {
    id: 83,
    name: 'The Daily Carry',
    emoji: '👜',
    images: ['images/corporate_lunch_bag.jpg'],
    desc: 'A branded lunch bag they actually reach for, to the office, to site, to wherever the day takes them. Your logo, carried every single day.',
    price: 130,
    options: [],
    cats: ['corporate']
  },
  {
    id: 84,
    name: 'The Keyring They Keep',
    emoji: '🔑',
    images: ['images/corporate_key_ring.jpg'],
    desc: "Small, branded, and impossible to misplace. A lightweight polymer keyring that resists cracking, scratching, and fading, your company's name in their pocket and in their hand, every time they reach for their keys.",
    price: 100,
    options: [],
    cats: ['corporate']
  },
  {
    id: 85,
    name: 'The Signature Pen',
    emoji: '🖊️',
    images: ['images/branded_pen.jpg'],
    desc: 'The pen that ends up in every meeting and on every signature. Branded with your logo, understated, useful, and always within reach.',
    price: 80,
    options: [],
    cats: ['corporate']
  },
  {
    id: 86,
    name: 'The Carry-All Case',
    emoji: '✏️',
    images: ['images/branded_pencil_case.jpg'],
    desc: 'Branded and built to hold the everyday essentials. The kind of detail that makes your company look like it pays attention, because it does.',
    price: 130,
    options: [],
    cats: ['corporate']
  },
  {
    id: 87,
    name: 'The Blank Page',
    emoji: '📓',
    images: ['images/branded_note_book.jpg'],
    desc: 'Every good idea starts on a blank page. A branded notebook for the meetings, the plans, and the thinking that moves work forward, your logo on every one.',
    price: 150,
    options: [],
    cats: ['corporate']
  },
  {
    id: 88,
    name: 'The Desk Mark',
    emoji: '🖋️',
    images: ['images/branded_pen_holder.jpg'],
    desc: 'Branded and built to sit front and centre on their desk. A small daily reminder of who they work with, keeping their pens in place and your name in view.',
    price: 90,
    options: [],
    cats: ['corporate']
  },
  {
    id: 89,
    name: 'The Sports Day Bottle',
    emoji: '🏃',
    images: ['images/kids_sports_bottle.jpg'],
    desc: "For the kid who never sits still. A personalised sports bottle built for practice, matches, and everything in between. Their name on every sip.",
    price: 200,
    options: [],
    cats: ['kids', 'mugs']
  },
  {
    id: 90,
    name: 'The Little Scholar Set',
    emoji: '✏️',
    images: ['images/pencil_case_pen.jpg'],
    desc: "Back-to-school, sorted. A personalised pencil case and matching pen, their name on the desk essentials they'll reach for every day.",
    price: 180,
    options: [],
    cats: ['kids']
  },
  {
    id: 91,
    name: 'The Little Essentials Set',
    emoji: '🧦',
    images: ['images/socks_bottle_gift_bag.jpg'],
    desc: "The little things that make them feel special. Personalised socks and a matching bottle, wrapped in a gift bag and ready to give.",
    price: 400,
    options: [],
    cats: ['kids']
  },
  {
    id: 92,
    name: 'The Grab & Go Gift Bag',
    emoji: '🥤',
    images: ['images/tumbler_gift_bag.jpg'],
    desc: "A personalised tumbler wrapped and ready to gift. Their name, their colour, packed in a gift bag. Thoughtful, done, sorted.",
    price: 300,
    options: [],
    cats: ['kids']
  },
  {
    id: 93,
    name: 'The Mr & Mrs Home Set',
    emoji: '🕰️',
    images: ['images/coaster_mug_clock.jpg'],
    desc: "For the two who built a home together. A personalised ceramic clock, Mr & Mrs mugs, and a matching Mr & Mrs coaster, every piece marking the life you share.",
    price: 650,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 94,
    name: 'The Time Together Set',
    emoji: '🧩',
    images: ['images/clock_with_puzzle.jpg'],
    desc: "Every moment with them is worth keeping. A personalised ceramic clock paired with a personalised puzzle, a gift about the time you've spent and the pieces that make you, you.",
    price: 450,
    options: [],
    cats: ['celebrating-love']
  },
  {
    id: 95,
    name: 'The Keepsake Clock',
    emoji: '⏰',
    images: ['images/ceremic_clock.jpg'],
    desc: "A personalised ceramic clock made to mark what matters: their names, your date, a moment you'll never let slip. Simple, lasting, entirely yours.",
    price: 300,
    options: [],
    cats: ['celebrating-love']
  },
  {
    id: 96,
    name: 'The His & Hers Towel Set',
    emoji: '🛁',
    images: ['images/personlised_towels_set.jpg'],
    desc: "For the couple who share everything, including the bathroom. A personalised Mr & Mrs towel set, his and hers, each carrying their name.",
    price: 500,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 97,
    name: 'The Grand Gesture Set',
    emoji: '🎈',
    images: ['images/bag_balloons_flower_set.jpg'],
    desc: "When you want to say it loudly. A gift bag loaded with balloons, fresh flowers, Kit Kat and Ferrero Rocher, finished with a personalised keyring, the whole celebration in one.",
    price: 750,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 98,
    name: "The Gentleman's Bouquet",
    emoji: '💐',
    images: ['images/mens_bouquet.jpg'],
    desc: "A bouquet built for him. A personalised cap, Kit Kat and Ferrero Rocher, two pairs of socks, a personalised iPhone cover, and a personalised pen: everything he'd never buy himself.",
    price: 550,
    options: [],
    cats: ['celebrating-love']
  },
  {
    id: 99,
    name: 'The Piece by Piece Set',
    emoji: '🍷',
    images: ['images/piece_by_piece.jpg'],
    desc: "Because you fell for them piece by piece. A personalised puzzle with wine, a candle, Ferrero Rocher, and a heart chocolate, a slow, sweet celebration of the two of you.",
    price: 600,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 100,
    name: 'The Table for Two Set',
    emoji: '🧀',
    images: ['images/platter_mugs.jpg'],
    desc: "For the couple who host with heart. A personalised platter board, personalised mugs, personalised coasters, and a personalised gift bag. Set the table and let love do the rest.",
    price: 700,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 101,
    name: 'The Cosy Couple Set',
    emoji: '🛋️',
    images: ['images/mug_cushion_set.jpg'],
    desc: "Slow mornings and shared blankets. A personalised mug and cushion set made for the couple who love staying in.",
    price: 640,
    options: [],
    cats: ['celebrating-love']
  },
  {
    id: 102,
    name: 'The Whole Heart Set',
    emoji: '🎁',
    images: ['images/cushion_mug_coaster.jpg'],
    desc: "Everything, all at once. A personalised cushion, personalised mugs, personalised coasters, a personalised ceramic clock, and a gift box to hold it all, the fullest way to say how much they mean to you.",
    price: 800,
    options: [],
    cats: ['gift-boxes', 'celebrating-love']
  },
  {
    id: 103,
    name: 'The Cappuccino Ritual',
    emoji: '☕',
    images: ['images/corporate_capacino_mug.jpg'],
    desc: "The mid-morning moment, personalised. A branded cappuccino mug with nuts and dried fruit, a considered desk gift that keeps your name in their hands, cup after cup.",
    price: 480,
    options: [],
    cats: ['corporate']
  },
  {
    id: 104,
    name: 'The Executive Standard',
    emoji: '💼',
    images: [
      'images/pen_bottle_notebook.jpg',
      'images/pen_bottle_notebook_2.jpg'
    ],
    desc: "Everything the working day asks for, all personalised. A pen, bottle, lunch bag, and notebook, a complete corporate set that puts your brand to work every day.",
    price: 700,
    options: [],
    cats: ['corporate']
  },
  {
    id: 105,
    name: 'The Midday Carry',
    emoji: '🥪',
    images: ['images/lunch_bags.jpg'],
    desc: "A personalised lunch bag that moves from desk to boardroom and back. Practical, branded, and used daily. Corporate gifting that earns its keep.",
    price: 300,
    options: [],
    cats: ['corporate']
  },
  {
    id: 106,
    name: 'The Considered Trio',
    emoji: '🕯️',
    images: ['images/keyring_bottle_candle.jpg'],
    desc: "Three thoughtful pieces: a personalised keyring, bottle, and candle. Understated and genuinely useful, for staff appreciation or client thank-yous.",
    price: 500,
    options: [],
    cats: ['corporate']
  },
  {
    id: 107,
    name: 'The Field Set',
    emoji: '🖊️',
    images: ['images/flask_notebook_pen.jpg'],
    desc: "For the team that takes the work on the road. A personalised flask and notebook with a pen and Ferrero Rocher, a premium gift that travels well.",
    price: 600,
    options: [],
    cats: ['corporate']
  },
  {
    id: 108,
    name: 'The Living Desk',
    emoji: '🪴',
    images: ['images/plant_flask_notebook_pen.jpg'],
    desc: "A corporate gift that keeps growing. A personalised plant alongside a flask, notebook, and pen, a fresh, lasting addition to any desk.",
    price: 700,
    options: [],
    cats: ['corporate']
  },
  {
    id: 109,
    name: 'The Comfort & Care Hamper',
    emoji: '🧺',
    images: ['images/glass_display_mug_honey.jpg'],
    desc: "Everything they need to feel held while they heal. A glass display filled with a personalised mug, honey, biscuits, tea, tissues, a candle, and Ferrero Rocher and Lindt chocolates. Comfort, all in one place.",
    price: 800,
    options: [],
    cats: ['gift-boxes', 'get-well-soon']
  },
  {
    id: 110,
    name: 'The Proud Graduate Display',
    emoji: '🎓',
    images: ['images/graduation_display.jpg'],
    desc: "For the milestone worth framing. A personalised graduation display marking their name, their achievement, and the day they earned it, from creche caps to final years.",
    price: 200,
    options: [],
    cats: ['school']
  },
  {
    id: 111,
    name: 'The Class Mug & Box',
    emoji: '☕',
    images: ['images/mug__mugbox_school.jpg'],
    desc: "A personalised mug boxed and ready to gift, for a favourite teacher, a proud graduate, or a keepsake from the school year.",
    price: 120,
    options: [],
    cats: ['school']
  },
  {
    id: 112,
    name: 'The School Lunch Box',
    emoji: '🍱',
    images: ['images/lunch_box.jpg'],
    desc: "A personalised lunch box made for the school run, their name front and centre, built for every packed lunch of the year.",
    price: 150,
    options: [],
    cats: ['school']
  },
  {
    id: 113,
    name: 'The School Keyring',
    emoji: '🔑',
    images: ['images/keyring_school.jpg'],
    desc: "A small personalised keyring in lightweight, hard-wearing polymer that resists cracking, scratching, and fading. An easy, affordable keepsake for class gifts, party packs, or end-of-year thank-yous.",
    price: 100,
    options: [],
    cats: ['school']
  },
  {
    id: 114,
    name: 'The School Sippy Cup',
    emoji: '🥤',
    images: ['images/sippy_cup_school.jpg'],
    desc: "A personalised sippy cup in a playful school design, perfect for creche, little graduates, and everything in between.",
    price: 200,
    options: [],
    cats: ['school']
  },
  {
    id: 115,
    name: 'The School Water Bottle',
    emoji: '💧',
    images: ['images/water_bottles_school.jpg'],
    desc: "A personalised water bottle made for the school day. Their name on the one they carry to class, to practice, and back.",
    price: 150,
    options: [],
    cats: ['school']
  },
  {
    id: 116,
    name: 'The School Pencil Case',
    emoji: '✏️',
    images: ['images/pencil_case_school.jpg'],
    desc: "A personalised pencil case sized for the school bag. Their name on the one that holds everything they need for class.",
    price: 90,
    options: [],
    cats: ['school']
  },
  {
    id: 117,
    name: 'The Pencil Case & Crayons Set',
    emoji: '🖍️',
    images: [
      'images/pencil_case_crayons.jpg',
      'images/pencil_case_crayons_2.jpg'
    ],
    desc: "A personalised pencil case packed with crayons, ready for the classroom. Their name on the set they colour, write, and learn with.",
    price: 150,
    options: [],
    cats: ['gift-boxes', 'school']
  },
  {
    id: 118,
    name: 'The School Stationery Set',
    emoji: '🖊️',
    images: ['images/pen_pencil_case_school.jpg'],
    desc: "A personalised pencil case and matching pen in a school design. Their name on the desk essentials they reach for every day.",
    price: 180,
    options: [],
    cats: ['school']
  },
  {
    id: 119,
    name: 'The School Arm Sleeves',
    emoji: '💪',
    images: ['images/arm_sleeves.jpg'],
    desc: "A pair of personalised arm sleeves. Their name on a practical extra for school, sports days, and time in the sun.",
    price: 100,
    options: [],
    cats: ['school']
  },
  {
    id: 120,
    name: 'The Comrades Winner Set',
    emoji: '🏅',
    images: ['images/comrades_winner_set.jpg'],
    desc: "For the runner who conquered the ultimate. A personalised T-shirt, cap, mug, keyring, and coaster, celebrating the medal, the miles, and everything it took to earn them.",
    price: 640,
    options: [],
    cats: ['gift-boxes', 'for-him']
  },
  {
    id: 121,
    name: "The Runner's Overnight Bag",
    emoji: '🏃',
    images: ['images/runner_bag_sports.jpg'],
    desc: "A personalised sports and overnight bag built for the runner always heading somewhere. Race day, training camp, or the weekend away.",
    price: 600,
    options: [],
    cats: ['for-him']
  },
  {
    id: 122,
    name: "The Athlete's Bag Set",
    emoji: '🎽',
    images: ['images/bag_towel_set.jpg'],
    desc: "Everything the athlete needs to train and travel. A personalised bag, towel, and bottle, their name on the kit that goes the distance with them.",
    price: 1000,
    options: [],
    cats: ['gift-boxes', 'for-him']
  },
  {
    id: 123,
    name: 'The Comrades Flask',
    emoji: '🥤',
    images: ['images/comrades_flask.jpg'],
    desc: "A personalised flask for the Comrades runner. Keeps them going through the miles, and marks the achievement long after the finish.",
    price: 300,
    options: [],
    cats: ['for-him']
  },
  {
    id: 124,
    name: 'The Event Mug & Pen Set',
    emoji: '☕',
    images: ['images/mug_pen_events.png'],
    desc: "A personalised mug and matching pen, boxed and ready to hand out. A smart, useful favour for conferences, launches, and celebrations.",
    price: 170,
    options: [],
    cats: ['gift-boxes', 'corporate']
  },
  {
    id: 125,
    name: 'The Full Delegate Set',
    emoji: '📋',
    images: ['images/mousepad_notebook_pen_events.jpg'],
    desc: "Everything a guest needs to take notes and take part. A personalised mousepad, notebook, pen, and flask, the complete set for conferences, workshops, and corporate events.",
    price: 630,
    options: [],
    cats: ['gift-boxes', 'corporate']
  },
  {
    id: 126,
    name: 'The Event Pencil Bag',
    emoji: '✏️',
    images: ['images/packaging_pencil_bag_events.jpg'],
    desc: "A personalised pencil bag, packaged and ready to give. A neat, practical favour that guests actually keep.",
    price: 95,
    options: [],
    cats: ['corporate']
  },
  {
    id: 127,
    name: 'The Compact Mirror Favour',
    emoji: '🪞',
    images: ['images/packaging_compact_mirror.jpg'],
    desc: "A personalised compact mirror in gift packaging. A small, thoughtful touch for weddings, parties, and events.",
    price: 150,
    options: [],
    cats: ['corporate']
  },
  {
    id: 128,
    name: 'The Sequin Makeup Bag',
    emoji: '👜',
    images: ['images/packaging_sequin_makeup.jpg'],
    desc: "A personalised sequin makeup bag, packaged to impress. A favour with a bit of sparkle for the guests who love the details.",
    price: 150,
    options: [],
    cats: ['corporate']
  },
  {
    id: 129,
    name: 'The Boxed Candle',
    emoji: '🕯️',
    images: ['images/box_candle_set.jpg'],
    desc: "A personalised candle presented in a gift box. A warm, welcoming favour that suits any occasion.",
    price: 190,
    options: [],
    cats: ['corporate']
  },
  {
    id: 130,
    name: 'The Charm Keyring Favour',
    emoji: '🔑',
    images: ['images/packaging_charm_keyring.jpg'],
    desc: "A personalised charm keyring in lightweight, hard-wearing polymer, gift-packaged and ready to hand out. A small keepsake guests carry long after the event.",
    price: 150,
    options: [],
    cats: ['corporate']
  },
  {
    id: 131,
    name: 'The Boxed Glass Bottle',
    emoji: '🍶',
    images: ['images/box_glass.jpg'],
    desc: "A personalised glass bottle boxed and ready to give. A clean, useful favour for launches, weddings, and corporate days.",
    price: 190,
    options: [],
    cats: ['corporate']
  },
  {
    id: 132,
    name: 'The Succulent Favour',
    emoji: '🌵',
    images: ['images/box_succulent_event.jpg'],
    desc: "A potted succulent presented in a gift box. A living favour that keeps growing well past the event.",
    price: 200,
    options: [],
    cats: ['corporate']
  },
  {
    id: 133,
    name: 'The Phone-Stand Pen',
    emoji: '🖊️',
    images: ['images/packaging_pen_events.jpg'],
    desc: "A personalised pen that doubles as a phone stand, packaged and ready to give. A clever little favour guests will actually use at their desk.",
    price: 65,
    options: [],
    cats: ['corporate']
  },
  {
    id: 134,
    name: 'The Notebook & Pen Box',
    emoji: '📓',
    images: ['images/box_notebook_pen.jpg'],
    desc: "A personalised notebook and pen in a gift box. A polished favour for delegates, guests, and teams.",
    price: 200,
    options: [],
    cats: ['gift-boxes', 'corporate']
  },
  {
    id: 135,
    name: 'The Event Tumbler Set',
    emoji: '🥤',
    images: [
      'images/gift_bag_tumbler_events.jpg',
      'images/gift_bag_tumbler_events_2.jpg'
    ],
    desc: "A personalised 1.2L tumbler in a matching gift bag. A premium favour that guests carry everywhere, keeping your event in hand long after.",
    price: 450,
    options: [],
    cats: ['corporate']
  },
  {
    id: 136,
    name: 'The Quiet Time Set',
    emoji: '📖',
    images: [
      'images/bible_notebook_pen.jpg',
      'images/bible_notebook_pen_2.jpg'
    ],
    desc: "For the mornings spent in the Word. A personalised Bible, notebook, and pen, made for prayer, reflection, and the quiet time that shapes everything else.",
    price: 550,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 137,
    name: 'The Kingdom Hoodie & Cap',
    emoji: '🧥',
    images: ['images/hoodie_cap.jpg'],
    desc: "Wear your faith with ease. A personalised hoodie and matching trucker cap, durable and flexible, for the man who carries the Kingdom into every room he walks.",
    price: 500,
    options: [],
    cats: ['christian-gifts', 'fathers-day', 'for-him']
  },
  {
    id: 138,
    name: 'The Scripture Tumbler',
    emoji: '🥤',
    images: ['images/tumbler_scripture.jpg'],
    desc: "A personalised 1.2L tumbler in a scripture design. Sublimation-printed for colour that lasts, it keeps them going through the day with a word to hold onto, right there in their hands.",
    price: 400,
    options: [],
    cats: ['christian-gifts']
  },
  {
    id: 139,
    name: 'The Carry the Word Set',
    emoji: '📱',
    images: ['images/scripture_bag_iphone_case.jpg'],
    desc: "Faith that goes everywhere they go. A personalised Bible bag, iPhone cover, and flask, so the Word travels with them from the pew to the everyday.",
    price: 700,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 140,
    name: 'The Faithful Essentials Set',
    emoji: '✒️',
    images: ['images/christian_notebook_keyring_pen.jpg'],
    desc: "The everyday tools for a life of faith. A personalised notebook, keyring, pen, and flask, ready for sermons, study, and everything in between.",
    price: 500,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 141,
    name: 'The Bible Bag',
    emoji: '👜',
    images: [
      'images/bible_bag.jpg',
      'images/bible_bag_2.jpg'
    ],
    desc: "A personalised bag made to carry the Word. Room for their Bible, notebook, and pen, with their name on the outside.",
    price: 350,
    options: [],
    cats: ['christian-gifts']
  },
  {
    id: 142,
    name: 'The Word on the Go Set',
    emoji: '☕',
    images: ['images/bible_bag_travel_mug.jpg'],
    desc: "For faith on the move. A personalised Bible bag and travel mug, ready for early services, small groups, and the commute in between.",
    price: 500,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 143,
    name: 'The Complete Kingdom Set',
    emoji: '✝️',
    images: ['images/bible_bag_coaster_keyring.jpg'],
    desc: "Everything for a life rooted in the Word. A personalised Bible bag, keyring, mug, coaster, notebook, and Bible, the full set for the person who lives their faith out loud.",
    price: 1050,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 144,
    name: 'The Walk in Faith Set',
    emoji: '🧦',
    images: ['images/bible_pen_socks.jpg'],
    desc: "For every step of the journey. A personalised Bible, notebook, pen, socks, and keyring, a complete set for the one walking their faith daily.",
    price: 750,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 145,
    name: 'The Blessed & Bright Set',
    emoji: '✨',
    images: ['images/sequin_pillow_notebook.jpg'],
    desc: "For the woman whose faith shines. A personalised sequin cushion and matching sequin notebook in a gift bag, bold, bright, and unapologetically hers.",
    price: 480,
    options: [],
    cats: ['gift-boxes', 'christian-gifts']
  },
  {
    id: 146,
    name: 'The Glass Display Clock',
    emoji: '🕰️',
    images: ['images/glass_clock_display.jpg'],
    desc: "A personalised glass display clock made to mark the moments that matter. Their names, a date, or a message, set in glass for the mantel or the desk.",
    price: 300,
    options: [],
    cats: ['celebrating-love', 'home']
  },
  {
    id: 147,
    name: 'The Slate Heart Keepsake',
    emoji: '🖤',
    images: ['images/slate_stone.jpg'],
    desc: "A heart-shaped personalised slate stone, engraved with a name, a date, or a few words that say it all. A small, lasting piece for any home.",
    price: 200,
    options: [],
    cats: ['celebrating-love', 'home']
  },
  {
    id: 148,
    name: 'The Frosted Glass',
    emoji: '🥂',
    images: ['images/frosted_glasses.jpg'],
    desc: "A personalised frosted glass etched with their name or a message. Priced per glass, so build the set that suits your table.",
    price: 100,
    options: [],
    cats: ['home']
  },
  {
    id: 149,
    name: 'The Personalised Plate',
    emoji: '🍽️',
    images: ['images/personalised_plate.jpg'],
    desc: "A personalised plate made with your own design, ready to bring to the table again and again. Priced per plate.",
    price: 100,
    options: [],
    cats: ['celebrating-love', 'home']
  },
  {
    id: 151,
    name: 'The Double-Walled Bottle',
    emoji: '💧',
    images: [
      'images/double_walled_bottle.jpg',
      'images/double_walled_bottle_2.jpg',
      'images/double_walled_bottle_3.jpg'
    ],
    desc: "A personalised double-walled bottle that keeps drinks hot or cold for hours. Priced per bottle, available in a range of colours.",
    price: 250,
    options: [],
    cats: ['mugs']
  },
  {
    id: 152,
    name: 'The Can Tumbler',
    emoji: '🥫',
    images: ['images/can_tumbler.jpg'],
    desc: "A personalised can-style tumbler for the drink that travels with them. Sleek, insulated, and entirely theirs.",
    price: 250,
    options: [],
    cats: ['mugs']
  },
  {
    id: 153,
    name: 'The Travel Mug',
    emoji: '☕',
    images: [
      'images/travel_mug.jpg',
      'images/travel_mug_2.jpg'
    ],
    desc: "A personalised travel mug built for the commute and the coffee run. Their name on the lid, ready for the road.",
    price: 200,
    options: [],
    cats: ['mugs']
  },
  {
    id: 154,
    name: 'The 20oz Tumbler',
    emoji: '🥤',
    images: [
      'images/20oz_tumbler.jpg',
      'images/20oz_tumbler_2.jpg'
    ],
    desc: "A 590ml personalised tumbler that keeps up with the day. Sublimation-printed so it never peels or fades, their name, their colour, from the desk to the drive home.",
    price: 250,
    options: [],
    cats: ['mugs']
  },
  {
    id: 155,
    name: 'The Wine Tumbler',
    emoji: '🍷',
    images: ['images/wine_tumbler_design.jpg'],
    desc: "A 355ml personalised wine tumbler for the pour that travels, from the patio to the picnic. Sublimation-printed so the design never peels, their name, no stem, no spills.",
    price: 200,
    options: [],
    cats: ['celebrating-love', 'for-her', 'mugs']
  },
  {
    id: 156,
    name: 'The Full-Print Wine Tumbler',
    emoji: '🍾',
    images: ['images/wine_tumbler_full_print.jpg'],
    desc: "A 355ml personalised wine tumbler wrapped in a full-print, edge-to-edge design. Sublimation-printed for colour that stays vivid wash after wash, bold from top to bottom.",
    price: 250,
    options: [],
    cats: ['celebrating-love', 'for-her', 'mugs']
  },
  {
    id: 157,
    name: 'The Sleek Tumbler',
    emoji: '🥤',
    images: ['images/sleek_tubler.jpg'],
    desc: "A personalised sleek tumbler built for the day on the move. Slim, insulated, and entirely theirs.",
    price: 250,
    options: [],
    cats: ['mugs']
  }
];
