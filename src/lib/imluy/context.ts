/**
 * LUMIÈRE Architecture — Shared Context for Imluy
 * Allows child components to trigger product detail and cart actions
 */

import { createContext, useContext } from "react";
import type { ImluyProduct } from "./types";

interface ImluyContextValue {
  onSelectProduct: (product: ImluyProduct) => void;
  onToggleWishlist: (product: ImluyProduct) => void;
  isWishlisted: (productId: string) => boolean;
}

export const ImluyContext = createContext<ImluyContextValue>({
  onSelectProduct: () => {},
  onToggleWishlist: () => {},
  isWishlisted: () => false,
});

export function useImluyContext() {
  return useContext(ImluyContext);
}
