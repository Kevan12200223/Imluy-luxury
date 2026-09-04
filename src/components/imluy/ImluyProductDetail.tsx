/**
 * LUMIÈRE Architecture — Product Detail Modal for Imluy
 * Immersive detail view with size/color selection and add-to-bag
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImluyProduct, ImluyColor } from "@/lib/imluy/types";
import { useImluyContext } from "@/lib/imluy/context";

interface ImluyProductDetailProps {
  product: ImluyProduct | null;
  relatedProducts: ImluyProduct[];
  onClose: () => void;
  onAddToCart: (product: ImluyProduct, size: string, color: ImluyColor) => void;
  onSizeGuideOpen: () => void;
}

export default function ImluyProductDetail({ product, relatedProducts, onClose, onAddToCart, onSizeGuideOpen }: ImluyProductDetailProps) {
  const { onSelectProduct } = useImluyContext();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState<ImluyColor | null>(null);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAdd = () => {
    if (!product) return;
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];
    onAddToCart(product, size, color);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  const nextImage = () => product && setActiveImage((i) => (i + 1) % product.images.length);
  const prevImage = () => product && setActiveImage((i) => (i - 1 + product.images.length) % product.images.length);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm text-imluy-black/60 hover:text-imluy-black transition-colors"
            aria-label="Close detail"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image gallery */}
            <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[500px] bg-imluy-cream">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image nav */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm text-imluy-black/60 hover:text-imluy-black transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm text-imluy-black/60 hover:text-imluy-black transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Image dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === activeImage ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[9px] tracking-[0.25em] uppercase text-imluy-black/40 font-medium mb-2">
                {product.category}
              </p>
              <h2 className="font-imluy-display text-2xl lg:text-3xl tracking-[0.08em] uppercase text-imluy-black font-light mb-3">
                {product.name}
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg text-imluy-black font-medium">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-imluy-black/35 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-[13px] leading-relaxed text-imluy-black/55 mb-8">
                {product.description}
              </p>

              {/* Color selection */}
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium mb-3">
                  Colour — {selectedColor?.name || product.colors[0].name}
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        (selectedColor?.name || product.colors[0].name) === color.name
                          ? "border-imluy-black scale-110"
                          : "border-imluy-black/10 hover:border-imluy-black/30"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium">
                    Size
                  </p>
                  <button
                    onClick={onSizeGuideOpen}
                    className="text-[10px] tracking-wider uppercase text-imluy-black/40 underline hover:text-imluy-black/60 transition-colors"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] px-3 py-2 text-[10px] tracking-[0.1em] uppercase font-medium border transition-all ${
                        (selectedSize || product.sizes[0]) === size
                          ? "border-imluy-black bg-imluy-black text-white"
                          : "border-imluy-black/15 text-imluy-black/60 hover:border-imluy-black/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to bag */}
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-300 ${
                  addedFeedback
                    ? "bg-imluy-black/80 text-white"
                    : "bg-imluy-black text-white hover:bg-imluy-black/85"
                }`}
              >
                {addedFeedback ? "Added to Bag" : "Add to Bag"}
              </button>

              {/* Material & care */}
              {product.material && (
                <div className="mt-8 pt-6 border-t border-imluy-black/5 space-y-3">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium mb-1">
                      Composition
                    </p>
                    <p className="text-[12px] text-imluy-black/55">{product.material}</p>
                  </div>
                  {product.careInstructions && (
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium mb-1">
                        Care
                      </p>
                      <ul className="space-y-0.5">
                        {product.careInstructions.map((instruction, i) => (
                          <li key={i} className="text-[12px] text-imluy-black/55">
                            &middot; {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Shipping info */}
              <div className="mt-6 pt-4 border-t border-imluy-black/5 space-y-1.5">
                <p className="text-[11px] text-imluy-black/40">Complimentary shipping on all orders</p>
                <p className="text-[11px] text-imluy-black/40">Free returns within 30 days</p>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-imluy-black/5 p-6 lg:p-8">
              <p className="text-[10px] tracking-[0.25em] uppercase text-imluy-black/40 font-medium mb-5">
                You May Also Like
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.slice(0, 4).map((rp) => (
                  <button
                    key={rp.id}
                    onClick={() => { onSelectProduct(rp); }}
                    className="text-left group"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-imluy-cream mb-2">
                      <img
                        src={rp.images[0]}
                        alt={rp.name}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <p className="text-[11px] font-medium tracking-wide text-imluy-black truncate">{rp.name}</p>
                    <p className="text-[11px] text-imluy-black/60">${rp.price.toLocaleString()}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
