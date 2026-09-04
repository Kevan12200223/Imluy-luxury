/**
 * LUMIÈRE Architecture — Wishlist Drawer for Imluy
 */

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag } from "lucide-react";
import type { ImluyProduct, ImluyColor } from "@/lib/imluy/types";

interface ImluyWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ImluyProduct[];
  onRemove: (id: string) => void;
  onAddToCart: (product: ImluyProduct, size: string, color: ImluyColor) => void;
}

export default function ImluyWishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onAddToCart,
}: ImluyWishlistDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-imluy-black/5">
              <div className="flex items-center gap-3">
                <Heart size={18} strokeWidth={1.5} className="text-imluy-black" />
                <span className="text-[11px] tracking-[0.25em] uppercase font-medium text-imluy-black">
                  Wishlist ({items.length})
                </span>
              </div>
              <button onClick={onClose} className="p-2 -mr-2 text-imluy-black/50 hover:text-imluy-black" aria-label="Close wishlist">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <Heart size={40} strokeWidth={1} className="text-imluy-black/15 mb-4" />
                  <p className="text-[13px] text-imluy-black/40 mb-1">Your wishlist is empty</p>
                  <p className="text-[11px] text-imluy-black/25">Save pieces you love for later.</p>
                </div>
              ) : (
                <div className="divide-y divide-imluy-black/5">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-6">
                      <div className="w-20 h-24 flex-shrink-0 bg-imluy-cream overflow-hidden">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[12px] font-medium tracking-wide text-imluy-black truncate">{item.name}</h4>
                        <p className="text-[12px] text-imluy-black/70 mt-1 font-medium">${item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => onAddToCart(item, item.sizes[0], item.colors[0])}
                            className="flex items-center gap-1.5 bg-imluy-black text-white px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase font-medium hover:bg-imluy-black/85 transition-colors"
                          >
                            <ShoppingBag size={11} /> Add to Bag
                          </button>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-[10px] tracking-wider uppercase text-imluy-black/30 hover:text-imluy-black/60 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
