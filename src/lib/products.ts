export type Badge = 'new' | 'trending' | '';

export type Category =
  | 'Sachets'
  | 'Decorative'
  | 'Novelty'
  | 'Statement'
  | 'Gift Sets'
  | 'Others';

export interface Product {
  id: string;
  name: string;
  brandName: string;
  category: Category;
  price: number;
  oldPrice?: number;
  dimensions: string;
  emoji: string;
  badge: Badge;
  description: string;
  slug: string;
}

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const products: Product[] = [
  // ─── Sachets ───────────────────────────────────────────────────────────────
  {
    id: 'SAC-001',
    name: 'Aangan Bloom Sachet Large',
    brandName: 'Aangan Bloom',
    category: 'Sachets',
    price: 279,
    dimensions: '12 × 9 × 3 cm',
    emoji: '🌸',
    badge: '',
    description:
      'A lush floral sachet handcrafted to fill wardrobes and linen drawers with a delicate garden bloom. Perfect for gifting or a quiet touch of luxury in everyday spaces.',
    slug: toSlug('Aangan Bloom Sachet Large'),
  },
  {
    id: 'SAC-002',
    name: 'Aangan Bloom Sachet Petite',
    brandName: 'Aangan Bloom',
    category: 'Sachets',
    price: 179,
    dimensions: '8 × 6 × 2.5 cm',
    emoji: '🌸',
    badge: '',
    description:
      'The same beloved Aangan Bloom fragrance in a compact, travel-friendly size that slips easily into a handbag, car, or desk drawer. A small luxury that makes a thoughtful everyday gift.',
    slug: toSlug('Aangan Bloom Sachet Petite'),
  },
  {
    id: 'SAC-003',
    name: 'Aangan Bloom Sachet Gol',
    brandName: 'Aangan Bloom',
    category: 'Sachets',
    price: 229,
    dimensions: '⌀ 9 cm',
    emoji: '🌸',
    badge: '',
    description:
      'A round, pillow-shaped sachet with the signature Aangan Bloom scent, designed to double as a whimsical décor accent. Hang it, shelf it, or nestle it among your belongings for lasting fragrance.',
    slug: toSlug('Aangan Bloom Sachet Gol'),
  },

  // ─── Decorative ────────────────────────────────────────────────────────────
  {
    id: 'DEC-001',
    name: 'Pushpa Lotus Pond',
    brandName: 'Pushpa',
    category: 'Decorative',
    price: 449,
    oldPrice: 549,
    dimensions: '10 × 10 × 5 cm',
    emoji: '🪷',
    badge: '',
    description:
      'A handpoured wax candle shaped like a serene lotus in bloom, inspired by the tranquil ponds of Bengal. Its layered petals and warm floral scent make it a centrepiece worthy of any mantle or puja corner.',
    slug: toSlug('Pushpa Lotus Pond'),
  },
  {
    id: 'DEC-002',
    name: 'Narikel Coconut',
    brandName: 'Narikel',
    category: 'Decorative',
    price: 499,
    dimensions: '9 × 9 × 11 cm',
    emoji: '🥥',
    badge: '',
    description:
      'Sculpted to mimic a halved coconut shell, this candle carries a fresh, tropical coconut fragrance rooted in coastal nostalgia. A conversation-starting décor piece that smells as good as it looks.',
    slug: toSlug('Narikel Coconut'),
  },
  {
    id: 'DEC-003',
    name: 'Reti Rang Desert S',
    brandName: 'Reti Rang',
    category: 'Decorative',
    price: 299,
    dimensions: '6 × 6 × 7 cm',
    emoji: '🏜️',
    badge: '',
    description:
      'The compact Desert candle from the Reti Rang collection channels the warmth and stillness of Rajasthani sands. Earthy amber and dry-wood notes fill the room with a quiet, grounding calm.',
    slug: toSlug('Reti Rang Desert S'),
  },
  {
    id: 'DEC-004',
    name: 'Reti Rang Desert L',
    brandName: 'Reti Rang',
    category: 'Decorative',
    price: 499,
    dimensions: '8 × 8 × 10 cm',
    emoji: '🏜️',
    badge: '',
    description:
      'The large Desert candle brings bold sand-dune textures into your living room with a longer burn time and a richer earthy fragrance. It pairs beautifully with boho and minimalist interiors alike.',
    slug: toSlug('Reti Rang Desert L'),
  },
  {
    id: 'DEC-005',
    name: 'Reti Rang Desert Duo',
    brandName: 'Reti Rang',
    category: 'Decorative',
    price: 349,
    dimensions: '2 × (6 × 6 × 7 cm)',
    emoji: '🏜️',
    badge: '',
    description:
      'A matching pair of desert-textured candles designed to be displayed together for a layered, sculptural effect. Gift them as a set or use them to anchor a styled shelf or tray vignette.',
    slug: toSlug('Reti Rang Desert Duo'),
  },
  {
    id: 'DEC-006',
    name: 'Narangi Orange Desert',
    brandName: 'Narangi',
    category: 'Decorative',
    price: 349,
    dimensions: '7 × 7 × 8 cm',
    emoji: '🍊',
    badge: '',
    description:
      'A vivid terracotta-orange candle with the zesty sweetness of ripe citrus over a warm desert base note. The bold colour and uplifting scent make it an instant mood-booster for any room.',
    slug: toSlug('Narangi Orange Desert'),
  },
  {
    id: 'DEC-007',
    name: 'Gulabi Reti Rose',
    brandName: 'Gulabi Reti',
    category: 'Decorative',
    price: 649,
    oldPrice: 799,
    dimensions: '9 × 9 × 10 cm',
    emoji: '🌹',
    badge: '',
    description:
      'A blush-pink desert-textured candle infused with the timeless richness of gulabi rose — romantic, heady, and unmistakably Indian. An heirloom-quality piece that works equally well as décor or a cherished gift.',
    slug: toSlug('Gulabi Reti Rose'),
  },
  {
    id: 'DEC-008',
    name: 'Phool Pari Daisy',
    brandName: 'Phool Pari',
    category: 'Decorative',
    price: 149,
    dimensions: '5 × 5 × 4 cm',
    emoji: '🌼',
    badge: '',
    description:
      'A cheerful, daisy-shaped candle that is as adorable as it is fragrant — an entry-level pick for candle lovers at an irresistible price. Its light floral scent and sunny yellow hue brighten up any corner instantly.',
    slug: toSlug('Phool Pari Daisy'),
  },
  {
    id: 'DEC-009',
    name: 'Phool Small Bloom',
    brandName: 'Phool',
    category: 'Decorative',
    price: 249,
    dimensions: '6 × 6 × 5 cm',
    emoji: '🌺',
    badge: 'new',
    description:
      'A brand-new floral candle from the Phool family, shaped like a delicate bloom with soft, layered petals. Its gentle floral fragrance makes it a sweet addition to dressing tables, study corners, or gifting hampers.',
    slug: toSlug('Phool Small Bloom'),
  },

  // ─── Novelty ───────────────────────────────────────────────────────────────
  {
    id: 'NOV-001',
    name: 'Prem Jaal Heart Net',
    brandName: 'Prem Jaal',
    category: 'Novelty',
    price: 179,
    dimensions: '7 × 7 × 5 cm',
    emoji: '💜',
    badge: '',
    description:
      'A heart-shaped candle wrapped in a delicate net pattern, crafted to symbolise love tangled in warmth. Its affordable price makes it a popular choice for valentines, anniversaries, and heartfelt little surprises.',
    slug: toSlug('Prem Jaal Heart Net'),
  },
  {
    id: 'NOV-002',
    name: 'Kaapi Khushbu Coffee L',
    brandName: 'Kaapi Khushbu',
    category: 'Novelty',
    price: 549,
    dimensions: '10 × 8 × 12 cm',
    emoji: '☕',
    badge: '',
    description:
      'A large coffee-mug-shaped candle that fills your space with the rich, roasted aroma of freshly brewed South Indian kaapi. The perfect desk companion for coffee lovers who want their favourite scent to linger all day.',
    slug: toSlug('Kaapi Khushbu Coffee L'),
  },
  {
    id: 'NOV-003',
    name: 'Kaapi Khushbu Coffee S',
    brandName: 'Kaapi Khushbu',
    category: 'Novelty',
    price: 349,
    dimensions: '7 × 6 × 8 cm',
    emoji: '☕',
    badge: '',
    description:
      'The compact version of the beloved Kaapi Khushbu, delivering the same warm coffee fragrance in a smaller, giftable size. Ideal for tiny nooks, bedside tables, or as a sweet add-on in a gift hamper.',
    slug: toSlug('Kaapi Khushbu Coffee S'),
  },
  {
    id: 'NOV-004',
    name: 'Cheers Beer Mug',
    brandName: 'Cheers',
    category: 'Novelty',
    price: 399,
    dimensions: '9 × 7 × 11 cm',
    emoji: '🍺',
    badge: '',
    description:
      'A fun, realistic beer-mug candle — frothy white "foam" top and all — that makes the ultimate novelty gift for friends who love a good pint. Its warm, malty amber fragrance adds a cosy pub-night feel to any space.',
    slug: toSlug('Cheers Beer Mug'),
  },
  {
    id: 'NOV-005',
    name: 'Mocha Madira',
    brandName: 'Mocha Madira',
    category: 'Novelty',
    price: 349,
    dimensions: '8 × 6 × 10 cm',
    emoji: '🥃',
    badge: 'new',
    description:
      'A wine-glass-shaped candle blending dark mocha and warm spice notes for a rich, indulgent fragrance experience. Just launched, it is already a favourite among those who love a café-bar aesthetic in their décor.',
    slug: toSlug('Mocha Madira'),
  },
  {
    id: 'NOV-006',
    name: 'Dil Pink Heart',
    brandName: 'Dil',
    category: 'Novelty',
    price: 349,
    dimensions: '9 × 9 × 7 cm',
    emoji: '💗',
    badge: 'new',
    description:
      'A bold, oversized pink heart candle with a soft shimmer finish and a romantic rose-musk fragrance. Freshly added to the Aaloki lineup, it is already a go-to for birthday and anniversary gifting.',
    slug: toSlug('Dil Pink Heart'),
  },
  {
    id: 'NOV-007',
    name: 'Guddu Teddy',
    brandName: 'Guddu',
    category: 'Novelty',
    price: 399,
    dimensions: '8 × 7 × 12 cm',
    emoji: '🧸',
    badge: 'new',
    description:
      'An adorable teddy-bear candle handcrafted with a soft vanilla-caramel fragrance that feels like the warmest of hugs. A new arrival that is irresistible for gifting to friends, kids, or anyone who needs a little sweetness.',
    slug: toSlug('Guddu Teddy'),
  },

  // ─── Statement ─────────────────────────────────────────────────────────────
  {
    id: 'STM-001',
    name: 'Mithas Cotton Candy',
    brandName: 'Mithas',
    category: 'Statement',
    price: 399,
    dimensions: '10 × 10 × 14 cm',
    emoji: '🍭',
    badge: '',
    description:
      'A tall, pastel-swirled pillar candle with the dreamy sweetness of cotton candy, designed to be a visual anchor in any styled space. Soft pinks and lavenders make it as photogenic as it is fragrant.',
    slug: toSlug('Mithas Cotton Candy'),
  },
  {
    id: 'STM-002',
    name: 'Kulfi Ice Cream',
    brandName: 'Kulfi',
    category: 'Statement',
    price: 899,
    oldPrice: 1099,
    dimensions: '8 × 8 × 18 cm',
    emoji: '🍦',
    badge: '',
    description:
      'A statement sculptural candle shaped like a classic kulfi on a stick, with layered notes of pistachio, rose, and milky sweetness in every whiff. Tall, detailed, and unapologetically Indian — a hero piece on any shelf.',
    slug: toSlug('Kulfi Ice Cream'),
  },
  {
    id: 'STM-003',
    name: 'Aakruti Oval',
    brandName: 'Aakruti',
    category: 'Statement',
    price: 1099,
    dimensions: '12 × 9 × 20 cm',
    emoji: '🕯️',
    badge: '',
    description:
      'A large, refined oval pillar candle with a smooth, architectural form and a deeply blended signature fragrance. It commands attention on a console table, dining centrepiece, or curated bedroom shelf.',
    slug: toSlug('Aakruti Oval'),
  },
  {
    id: 'STM-004',
    name: 'Gola Round',
    brandName: 'Gola',
    category: 'Statement',
    price: 1099,
    dimensions: '⌀ 15 × 12 cm',
    emoji: '🌕',
    badge: '',
    description:
      'A substantial spherical candle that doubles as a sculptural object — its smooth, moon-like surface and warm amber-and-oud fragrance create a luxurious, meditative ambience. The ultimate centrepiece for slow evenings at home.',
    slug: toSlug('Gola Round'),
  },

  // ─── Gift Sets ─────────────────────────────────────────────────────────────
  {
    id: 'GFT-001',
    name: 'Meetha Utsav Mithai Box',
    brandName: 'Meetha Utsav',
    category: 'Gift Sets',
    price: 1049,
    dimensions: '22 × 22 × 8 cm (box)',
    emoji: '🎁',
    badge: '',
    description:
      "A curated gift set presented in mithai-box-inspired packaging, featuring a handpicked selection of Aaloki's best-loved candles. Beautifully gift-ready for Diwali, Eid, birthdays, and every celebration in between.",
    slug: toSlug('Meetha Utsav Mithai Box'),
  },

  // ─── Others ────────────────────────────────────────────────────────────────
  {
    id: 'OTH-001',
    name: 'Neela Jal Aqua Gel',
    brandName: 'Neela Jal',
    category: 'Others',
    price: 349,
    dimensions: '7 × 7 × 10 cm',
    emoji: '💧',
    badge: '',
    description:
      'A translucent aqua-blue gel candle that glows like sunlight through water, with a clean oceanic fragrance that instantly freshens a room. Its mesmerising clarity makes it as much art as it is candle.',
    slug: toSlug('Neela Jal Aqua Gel'),
  },
  {
    id: 'OTH-002',
    name: 'Rang Sheesha Coloured Glass',
    brandName: 'Rang Sheesha',
    category: 'Others',
    price: 179,
    dimensions: '6 × 6 × 7 cm',
    emoji: '🌈',
    badge: '',
    description:
      'A small candle set in a vibrant coloured glass vessel that throws jewel-toned light across the room when lit. An affordable, cheerful addition to any windowsill or tabletop.',
    slug: toSlug('Rang Sheesha Coloured Glass'),
  },
  {
    id: 'OTH-003',
    name: 'Bubbles Cube Bubble',
    brandName: 'Bubbles',
    category: 'Others',
    price: 449,
    oldPrice: 499,
    dimensions: '9 × 9 × 9 cm',
    emoji: '🫧',
    badge: 'trending',
    description:
      "A cubic candle covered in playful bubble-like wax beads, creating a striking 3D texture that is currently one of Aaloki's most-photographed pieces. A fresh floral-aqua fragrance completes its light, airy personality.",
    slug: toSlug('Bubbles Cube Bubble'),
  },
];

export const categories: Category[] = [
  'Sachets',
  'Decorative',
  'Novelty',
  'Statement',
  'Gift Sets',
  'Others',
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
