/**
 * LUMIÈRE Architecture — Curated Product Collection for Imluy
 */

import type { ImluyProduct } from "./types";

export const imluyProducts: ImluyProduct[] = [
  {
    id: "iml-001",
    name: "Noir Sculptural Coat",
    price: 2890,
    description:
      "Architectural silhouette in double-faced cashmere wool. Clean lines meet fluid draping in this statement outerwear piece, hand-finished in our Milanese atelier.",
    category: "outerwear",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Noir", hex: "#0A0A0A" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    tags: ["bestseller", "handcrafted"],
    isFeatured: true,
    material: "95% Cashmere Wool, 5% Silk",
    careInstructions: ["Dry clean only", "Store on padded hanger"],
    stockCount: 12,
  },
  {
    id: "iml-002",
    name: "Ivory Draped Gown",
    price: 4250,
    description:
      "Ethereal silk charmeuse gown with asymmetric draping. A modern interpretation of classical elegance, designed for moments that demand attention.",
    category: "evening",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Champagne", hex: "#F7E7CE" },
    ],
    tags: ["new-arrival", "exclusive"],
    isNew: true,
    isFeatured: true,
    material: "100% Silk Charmeuse",
    careInstructions: ["Professional clean only", "Store in garment bag", "Avoid direct sunlight"],
    stockCount: 4,
  },
  {
    id: "iml-003",
    name: "Obsidian Tailored Blazer",
    price: 1650,
    description:
      "Precision-cut single-breasted blazer in Italian virgin wool. The foundation of modern power dressing, with a subtly relaxed shoulder for contemporary ease.",
    category: "tailoring",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian", hex: "#1B1B1B" },
      { name: "Midnight", hex: "#191970" },
    ],
    tags: ["essential"],
    material: "100% Italian Virgin Wool",
    careInstructions: ["Dry clean recommended", "Steam to refresh"],
    stockCount: 18,
  },
  {
    id: "iml-004",
    name: "Cashmere Cloud Pullover",
    price: 890,
    originalPrice: 1120,
    description:
      "Weightless Mongolian cashmere in a relaxed oversized silhouette. The everyday luxury piece that redefines comfort with understated sophistication.",
    category: "knitwear",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#D4C5A9" },
      { name: "Fog", hex: "#C7C3BB" },
      { name: "Noir", hex: "#0A0A0A" },
    ],
    tags: ["bestseller"],
    material: "100% Grade-A Mongolian Cashmere",
    careInstructions: ["Hand wash cold", "Lay flat to dry", "Fold — do not hang"],
    stockCount: 25,
  },
  {
    id: "iml-005",
    name: "Silk Column Dress",
    price: 2100,
    description:
      "Minimalist column dress in heavyweight silk crepe. A study in restraint — the concealed zip and clean neckline let the fabric's natural lustre speak.",
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Emerald", hex: "#046307" },
      { name: "Burgundy", hex: "#800020" },
    ],
    tags: ["new-arrival"],
    isNew: true,
    material: "100% Silk Crepe de Chine",
    careInstructions: ["Dry clean only", "Iron on low heat"],
    stockCount: 8,
  },
  {
    id: "iml-006",
    name: "Leather Envelope Clutch",
    price: 780,
    description:
      "Architectural clutch in butter-soft nappa leather. Magnetic closure reveals a suede-lined interior with card slots. The essential evening companion.",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Cognac", hex: "#9A463D" },
    ],
    tags: ["handcrafted", "exclusive"],
    isFeatured: true,
    material: "Nappa Leather, Suede Interior",
    careInstructions: ["Store in dust bag", "Condition leather periodically"],
    stockCount: 15,
  },
  {
    id: "iml-007",
    name: "Merino Trench Coat",
    price: 3450,
    description:
      "Reimagined classic in water-resistant merino wool-cashmere blend. Storm flap, horn buttons, and a belted waist converge in a silhouette that transcends seasons.",
    category: "outerwear",
    images: [
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Slate", hex: "#708090" },
    ],
    tags: ["exclusive", "handcrafted"],
    isNew: true,
    material: "80% Merino Wool, 20% Cashmere",
    careInstructions: ["Specialist dry clean", "Store on wide hanger"],
    stockCount: 6,
  },
  {
    id: "iml-008",
    name: "Pleated Midi Skirt",
    price: 920,
    description:
      "Knife-pleated midi in lustrous satin. The accordion pleats create mesmerising movement, while the elasticated waist ensures effortless styling.",
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Noir", hex: "#0A0A0A" },
    ],
    tags: ["bestseller"],
    material: "100% Polyester Satin",
    careInstructions: ["Hand wash cold", "Hang to dry"],
    stockCount: 20,
  },
  // ── New additions ──────────────────────────────────────────
  {
    id: "iml-009",
    name: "Alpaca Wrap Cardigan",
    price: 1280,
    description:
      "Oversized wrap cardigan in baby alpaca blend. Dropped shoulders and a shawl collar create an effortlessly elegant layer for cooler days.",
    category: "knitwear",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ecru", hex: "#F5F0E6" },
      { name: "Taupe", hex: "#483C32" },
    ],
    tags: ["new-arrival"],
    isNew: true,
    material: "60% Baby Alpaca, 40% Merino",
    careInstructions: ["Hand wash cold", "Reshape while damp", "Dry flat"],
    stockCount: 10,
  },
  {
    id: "iml-010",
    name: "Structured Wool Trousers",
    price: 1150,
    description:
      "High-waisted wide-leg trousers in pressed wool crease. A clean, architectural line from hip to hem — the cornerstone of modern tailoring.",
    category: "tailoring",
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Noir", hex: "#0A0A0A" },
    ],
    tags: ["essential"],
    isFeatured: true,
    material: "98% Wool Crease, 2% Elastane",
    careInstructions: ["Dry clean only", "Press on reverse"],
    stockCount: 22,
  },
  {
    id: "iml-011",
    name: "Silk Twill Scarf",
    price: 420,
    description:
      "Hand-rolled silk twill scarf in an exclusive Imluy abstract print. Each scarf is printed in limited runs at our Como atelier.",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Garden", hex: "#2D5A27" },
      { name: "Midnight", hex: "#191970" },
    ],
    tags: ["exclusive", "handcrafted"],
    material: "100% Silk Twill",
    careInstructions: ["Dry clean only", "Store rolled"],
    stockCount: 30,
  },
  {
    id: "iml-012",
    name: "Velvet Evening Jacket",
    price: 2650,
    description:
      "Slim-fit dinner jacket in crushed silk velvet. Peak lapels and a single-button closure create a razor-sharp evening silhouette.",
    category: "evening",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight Blue", hex: "#191970" },
      { name: "Burgundy", hex: "#800020" },
    ],
    tags: ["exclusive"],
    isFeatured: true,
    material: "82% Silk Velvet, 18% Cotton",
    careInstructions: ["Specialist dry clean", "Store on shaped hanger"],
    stockCount: 3,
  },
  {
    id: "iml-013",
    name: "Leather Belt — Slim",
    price: 380,
    description:
      "Slim belt in polished calfskin with a brushed gold buckle. Hand-stitched edges and a refined 2cm width for formal and smart-casual wear.",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    ],
    sizes: ["80", "85", "90", "95", "100"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Dark Brown", hex: "#3B2F2F" },
    ],
    tags: ["essential"],
    material: "Calfskin Leather, Brushed Gold Hardware",
    careInstructions: ["Store flat or rolled", "Condition annually"],
    stockCount: 35,
  },
  {
    id: "iml-014",
    name: "Draped Satin Blouse",
    price: 780,
    originalPrice: 980,
    description:
      "Relaxed-fit blouse in heavyweight satin with a draped cowl neckline. The perfect bridge between day and evening dressing.",
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Noir", hex: "#0A0A0A" },
      { name: "Blush", hex: "#DE5D83" },
    ],
    tags: ["bestseller"],
    material: "100% Silk Satin",
    careInstructions: ["Hand wash cold", "Iron on low reverse"],
    stockCount: 14,
  },
  {
    id: "iml-015",
    name: "Double-Breasted Overcoat",
    price: 3890,
    description:
      "Commanding double-breasted overcoat in heavy Italian wool. Peak lapels, horn buttons, and a full canvas construction for a silhouette that holds its shape for decades.",
    category: "outerwear",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Anthracite", hex: "#2F3134" },
      { name: "Camel", hex: "#C19A6B" },
    ],
    tags: ["handcrafted", "exclusive"],
    isNew: true,
    isFeatured: true,
    material: "100% Italian Wool, Full Canvas",
    careInstructions: ["Specialist dry clean", "Store on wide wooden hanger"],
    stockCount: 5,
  },
  {
    id: "iml-016",
    name: "Ribbed Turtleneck Dress",
    price: 1450,
    description:
      "Body-conscious ribbed knit dress with a high turtleneck. The figure-skimming silhouette and mid-calf length create an effortlessly polished look.",
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Noir", hex: "#0A0A0A" },
      { name: "Chocolate", hex: "#3B2F2F" },
    ],
    tags: ["new-arrival"],
    isNew: true,
    material: "70% Viscose, 30% Polyester",
    careInstructions: ["Machine wash delicate", "Lay flat to dry"],
    stockCount: 9,
  },
];

export const imluyCategories = [
  { id: "all" as const, label: "All Collections" },
  { id: "outerwear" as const, label: "Outerwear" },
  { id: "dresses" as const, label: "Dresses" },
  { id: "tailoring" as const, label: "Tailoring" },
  { id: "knitwear" as const, label: "Knitwear" },
  { id: "evening" as const, label: "Evening" },
  { id: "accessories" as const, label: "Accessories" },
];

export const imluySizeGuide = [
  { size: "XS", bust: "80-84", waist: "62-66", hips: "88-92" },
  { size: "S", bust: "84-88", waist: "66-70", hips: "92-96" },
  { size: "M", bust: "88-92", waist: "70-74", hips: "96-100" },
  { size: "L", bust: "92-96", waist: "74-78", hips: "100-104" },
  { size: "XL", bust: "96-100", waist: "78-82", hips: "104-108" },
];
