/**
 * LUMIÈRE Architecture — Product Card for Imluy
 * Hover-reveal interaction with wishlist, stock indicators
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { ImluyProduct } from "@/lib/imluy/types";
import { useImluyContext } from "@/lib/imluy/context";

interface ImluyProductCardProps {
  product: ImluyProduct;
  index: number;
  onSelect: (product: ImluyProduct) => void;
}

export default function ImluyProductCard({ product, index, onSelect }: ImluyProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { onToggleWishlist, isWishlisted } = useImluyContext();
  const wishlisted = isWishlisted(product.id);

  const displayImage = hovered && product.images[1]
    ? product.images[1]
    : product.images[0];

  const isLowStock = product.stockCount !== undefined && product.stockCount <= 5;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(product)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-imluy-cream mb-4">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-imluy-black text-white px-2.5 py-1 text-[9px] tracking-[0.15em] uppercase font-medium">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-imluy-burgundy text-white px-2.5 py-1 text-[9px] tracking-[0.15em] uppercase font-medium">
              Private Sale
            </span>
          )}
        </div>

        {/* Wishlist heart */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm text-imluy-black/50 hover:text-imluy-black transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            fill={wishlisted ? "currentColor" : "none"}
            className={wishlisted ? "text-imluy-black" : ""}
          />
        </button>

        {/* Image */}
        <img
          src={displayImage}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${
            hovered ? "scale-[1.03]" : "scale-100"
          } ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Quick-add overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/30 to-transparent"
        >
          <span className="block w-full text-center py-2.5 bg-white/95 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase font-medium text-imluy-black hover:bg-white transition-colors">
            Quick View
          </span>
        </motion.div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p className="text-[9px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium">
          {product.category}
        </p>
        <h3 className="text-[13px] font-medium tracking-wide text-imluy-black group-hover:text-imluy-black/70 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-imluy-black/80 font-medium">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-imluy-black/35 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="w-3 h-3 rounded-full border border-imluy-black/10"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>

        {/* Low stock indicator */}
        {isLowStock && (
          <p className="text-[10px] text-imluy-burgundy/80 font-medium pt-0.5">
            Only {product.stockCount} remaining
          </p>
        )}
      </div>
    </motion.article>
  );
}
