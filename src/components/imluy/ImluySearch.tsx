/**
 * LUMIÈRE Architecture — Full-screen Search Overlay for Imluy
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import type { ImluyProduct } from "@/lib/imluy/types";
import { useImluyContext } from "@/lib/imluy/context";

interface ImluySearchProps {
  isOpen: boolean;
  onClose: () => void;
  products: ImluyProduct[];
}

export default function ImluySearch({ isOpen, onClose, products }: ImluySearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { onSelectProduct } = useImluyContext();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const results = query.length >= 2
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-md"
        >
          {/* Header */}
          <div className="mx-auto max-w-2xl px-6 pt-20">
            <div className="flex items-center gap-4 border-b border-imluy-black/10 pb-4">
              <Search size={20} strokeWidth={1.5} className="text-imluy-black/30 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search collections, pieces, materials..."
                className="flex-1 bg-transparent text-[16px] text-imluy-black placeholder:text-imluy-black/25 focus:outline-none font-light tracking-wide"
              />
              <button
                onClick={onClose}
                className="p-2 text-imluy-black/40 hover:text-imluy-black transition-colors"
                aria-label="Close search"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick links */}
            {query.length < 2 && (
              <div className="mt-8">
                <p className="text-[10px] tracking-[0.25em] uppercase text-imluy-black/30 font-medium mb-4">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {["Outerwear", "Evening", "Cashmere", "Silk", "Tailoring", "New Arrivals", "Exclusive"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 text-[11px] tracking-wider uppercase border border-imluy-black/10 text-imluy-black/50 hover:border-imluy-black/30 hover:text-imluy-black transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {query.length >= 2 && (
              <div className="mt-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-imluy-black/30 font-medium mb-4">
                  {results.length} {results.length === 1 ? "result" : "results"}
                </p>
                {results.length === 0 ? (
                  <p className="text-[13px] text-imluy-black/35">No pieces match "{query}"</p>
                ) : (
                  <div className="space-y-0 divide-y divide-imluy-black/5">
                    {results.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => { onSelectProduct(product); onClose(); }}
                        className="flex items-center gap-4 py-4 w-full text-left hover:bg-imluy-cream/50 transition-colors px-2 -mx-2"
                      >
                        <div className="w-14 h-16 bg-imluy-cream overflow-hidden flex-shrink-0">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[12px] font-medium tracking-wide text-imluy-black">{product.name}</p>
                          <p className="text-[10px] text-imluy-black/40 mt-0.5 tracking-wider uppercase">{product.category}</p>
                          <p className="text-[12px] text-imluy-black/60 mt-1">${product.price.toLocaleString()}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
