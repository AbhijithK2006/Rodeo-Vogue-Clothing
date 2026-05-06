import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Women" | "Men" | "New Arrivals";
  image: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    id: "camel-coat",
    name: "Camel Wool Overcoat",
    price: 1290,
    category: "Women",
    image: p1,
    description:
      "Sculpted from Italian virgin wool, the Camel Overcoat is an heirloom piece — soft, structured and unwaveringly elegant.",
    details: ["100% Italian virgin wool", "Notched lapel, two-button closure", "Tailored in Florence", "Dry clean only"],
  },
  {
    id: "noir-blazer",
    name: "Noir Tailored Blazer",
    price: 890,
    category: "Women",
    image: p2,
    description:
      "A precise, single-breasted silhouette in featherweight wool crepe. Engineered for a fluid line and an effortless drape.",
    details: ["Wool crepe, 220 g/m²", "Hand-finished lapel", "Silk lining", "Made in Italy"],
  },
  {
    id: "ivory-knit",
    name: "Ivory Cashmere Knit",
    price: 540,
    category: "New Arrivals",
    image: p3,
    description:
      "Spun from Mongolian cashmere with a generous, sculptural fit. The kind of knit that becomes a daily ritual.",
    details: ["100% Grade-A cashmere", "Ribbed mock neck", "Relaxed silhouette", "Hand wash cold"],
  },
  {
    id: "obsidian-gown",
    name: "Obsidian Silk Gown",
    price: 1850,
    category: "Women",
    image: p4,
    description:
      "Liquid silk satin draped on the bias. A study in restraint — the gown that needs nothing else.",
    details: ["100% silk satin", "Bias-cut, floor length", "Wrapped waist detail", "Atelier finished"],
  },
  {
    id: "mens-camel-coat",
    name: "Camel Wool Overcoat",
    price: 1350,
    category: "Men",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop",
    description: "Sculpted from Italian virgin wool, the Camel Overcoat is an heirloom piece — soft, structured and unwaveringly elegant.",
    details: ["100% Italian virgin wool", "Notched lapel, three-button closure", "Tailored in Florence", "Dry clean only"],
  },
  {
    id: "mens-noir-blazer",
    name: "Noir Tailored Blazer",
    price: 950,
    category: "Men",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    description: "A precise, single-breasted silhouette in featherweight wool crepe. Engineered for a fluid line and an effortless drape.",
    details: ["Wool crepe, 220 g/m²", "Hand-finished lapel", "Silk lining", "Made in Italy"],
  },
  {
    id: "mens-ivory-knit",
    name: "Ivory Cashmere Knit",
    price: 580,
    category: "Men",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop",
    description: "Spun from Mongolian cashmere with a generous, sculptural fit. The kind of knit that becomes a daily ritual.",
    details: ["100% Grade-A cashmere", "Ribbed mock neck", "Relaxed silhouette", "Hand wash cold"],
  },
  {
    id: "mens-obsidian-tuxedo",
    name: "Obsidian Evening Tuxedo",
    price: 1950,
    category: "Men",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop",
    description: "Impeccably tailored from a liquid wool-silk blend. A study in restraint — the evening wear that needs nothing else.",
    details: ["Wool and silk blend", "Satin peak lapel", "Structured shoulder", "Atelier finished"],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const related = (id: string) => products.filter((p) => p.id !== id).slice(0, 3);
