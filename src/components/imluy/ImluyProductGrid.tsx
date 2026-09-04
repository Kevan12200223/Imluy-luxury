/**
 * LUMIÈRE Architecture — Product Grid with Filtering for Imluy
 * Intersection-driven rendering with category filtering
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ImluyProduct, ImluyCategory } from "@/lib/imluy/types";
import { imluyCategories } from "@/lib/imluy/data";
import { useImluyContext } from "@/lib/imluy/context";
import ImluyProductCard from "./ImluyProductCard";

interface ImluyProductGridProps {
  products: ImluyProduct[];
}

export default function ImluyProductGrid({ products }: ImluyProductGridProps) {
  const { onSelectProduct } = useImluyContext();
  const [activeCategory, setActiveCategory] = useState<ImluyCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const filteredProducts = useMemo(() => {
    let result = activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price);
      default:
        return [...result].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  }, [products, activeCategory, sortBy]);

  return (
    <section id="collection" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-imluy-black/40 mb-3 font-medium">
            Curated Selection
          </p>
          <h2 className="font-imluy-display text-3xl sm:text-4xl tracking-[0.12em] uppercase text-imluy-black font-light">
            The Collection
          </h2>
        </motion.div>

        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-12 border-b border-imluy-black/5 pb-8">
          {/* Category tabs — wrap naturally, centered */}
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {imluyCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "text-imluy-black border-b border-imluy-black"
                    : "text-imluy-black/40 hover:text-imluy-black/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-transparent border border-imluy-black/10 px-4 py-2 text-[10px] tracking-[0.15em] uppercase text-imluy-black/60 focus:outline-none focus:border-imluy-black/30 cursor-pointer flex-shrink-0"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-x-8 lg:gap-y-14"
          >
            {filteredProducts.map((product, i) => (
              <ImluyProductCard
                key={product.id}
                product={product}
                index={i}
                onSelect={onSelectProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[13px] text-imluy-black/40 tracking-wide">
              No pieces found in this collection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
