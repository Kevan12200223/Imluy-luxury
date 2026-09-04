/**
 * LUMIÈRE Architecture — Wishlist State for Imluy
 */

import { useState, useCallback, useMemo } from "react";
import type { ImluyProduct } from "./types";

export function useImluyWishlist() {
  const [items, setItems] = useState<ImluyProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = useCallback((product: ImluyProduct) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => items.some((p) => p.id === productId),
    [items]
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  return {
    items,
    isOpen,
    count: items.length,
    toggleItem,
    isWishlisted,
    removeItem,
    open,
    close,
    toggle,
  };
}
