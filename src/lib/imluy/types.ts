/**
 * LUMIÈRE Architecture — Type System for Imluy Luxury Commerce
 * Layered Unified Modular Interface for Luxury E-Commerce Rendering
 */

export interface ImluyProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: ImluyCategory;
  images: string[];
  sizes: string[];
  colors: ImluyColor[];
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  material?: string;
  careInstructions?: string[];
  stockCount?: number;
}

export interface ImluyColor {
  name: string;
  hex: string;
}

export type ImluyCategory =
  | "outerwear"
  | "dresses"
  | "tailoring"
  | "knitwear"
  | "accessories"
  | "evening";

export interface CartItem {
  product: ImluyProduct;
  quantity: number;
  selectedSize: string;
  selectedColor: ImluyColor;
}

export interface ImluyCartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
}

export type ImluyViewMode = "grid" | "list";

export interface ImluyFilterState {
  category: ImluyCategory | "all";
  priceRange: [number, number];
  sortBy: "featured" | "price-asc" | "price-desc" | "newest";
}
