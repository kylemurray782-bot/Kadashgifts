const products = [
  {
    id: 1,
    name: 'Kingdom Kit',
    emoji: '🧔',
    images: ['images/kingdom-kit.jpg'],
    desc: 'Personalised beard care gift set. Name printed on the bottle — full kit personalisation available on request.',
    price: 300,
    options: [],
    cats: ['fathers-day', 'birthday-him']
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
    cats: ['birthday-him', 'fathers-day']
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
    cats: ['birthday-him', 'fathers-day']
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
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 5,
    name: 'Kingdom Man Bible Set',
    emoji: '📖',
    images: ['images/kingdom-man-bible-set.jpg'],
    desc: 'Personalised Bible, notebook, mug, and pen — every piece carrying his name.',
    price: 600,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 6,
    name: 'Football Set',
    emoji: '⚽',
    images: ['images/football-set.jpg'],
    desc: "Personalised mug, mug box, and flask with matching gift bag — all printed in his favourite team's colours.",
    price: 450,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 7,
    name: 'Personalised Toolbox Set',
    emoji: '🔧',
    images: ['images/toolbox-set.jpg'],
    desc: 'A personalised toolbox set — built for the man who fixes everything.',
    price: 500,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 8,
    name: 'Personalised Braai Master Dad Set',
    emoji: '🔥',
    images: ['images/braai_master.jpg'],
    desc: 'His name on the apron, his tools in hand. The ultimate gift for the man who rules the fire.',
    price: 380,
    options: [],
    cats: ['birthday-him', 'fathers-day']
  },
  {
    id: 9,
    name: 'Personalised Travel & Gym Bag',
    emoji: '🏋️',
    images: ['images/travel_gym_sports_bag.jpg'],
    desc: 'Built for the man always on the move. A quality bag personalised with his name — from the gym to the weekend away.',
    price: 500,
    options: [],
    cats: ['birthday-him', 'fathers-day']
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
    cats: ['birthday-him', 'fathers-day']
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
    desc: 'Wrap her in every moment that matters. A personalised fleece blanket printed with photos, kids\' drawings, or memories — 100x160cm of pure love.',
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
  }
];
