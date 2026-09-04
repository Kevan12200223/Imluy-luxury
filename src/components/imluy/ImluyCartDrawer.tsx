/**
 * LUMIÈRE Architecture — Cart Drawer for Imluy
 * Slide-in panel with line-item management
 */

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { CartItem } from "@/lib/imluy/types";

interface ImluyCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (productId: string, size: string, colorName: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string, colorName: string) => void;
}

export default function ImluyCartDrawer({
  isOpen,
  onClose,
  items,
  totalPrice,
  onUpdateQuantity,
  onRemoveItem,
}: ImluyCartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-imluy-black/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-imluy-black" />
                <span className="text-[11px] tracking-[0.25em] uppercase font-medium text-imluy-black">
                  Shopping Bag
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-imluy-black/50 hover:text-imluy-black transition-colors"
                aria-label="Close bag"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <ShoppingBag size={40} strokeWidth={1} className="text-imluy-black/15 mb-4" />
                  <p className="text-[13px] text-imluy-black/40 mb-1">Your bag is empty</p>
                  <p className="text-[11px] text-imluy-black/25">
                    Explore the collection and add pieces you love.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-imluy-black/5">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`} className="flex gap-4 p-6">
                      {/* Thumbnail */}
                      <div className="w-20 h-24 flex-shrink-0 bg-imluy-cream overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[12px] font-medium tracking-wide text-imluy-black truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[10px] text-imluy-black/40 mt-0.5 tracking-wide">
                          {item.selectedColor.name} &middot; Size {item.selectedSize}
                        </p>
                        <p className="text-[12px] text-imluy-black/70 mt-2 font-medium">
                          ${item.product.price.toLocaleString()}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-imluy-black/10">
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor.name,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 text-imluy-black/50 hover:text-imluy-black transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 text-[11px] font-medium text-imluy-black min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor.name,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 text-imluy-black/50 hover:text-imluy-black transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              onRemoveItem(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor.name
                              )
                            }
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

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-imluy-black/5 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-imluy-black/50">
                    Subtotal
                  </span>
                  <span className="text-[14px] font-semibold text-imluy-black">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-imluy-black/30 leading-relaxed">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-imluy-black text-white py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-imluy-black/90 transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-center py-2 text-[10px] tracking-[0.15em] uppercase text-imluy-black/50 hover:text-imluy-black transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
