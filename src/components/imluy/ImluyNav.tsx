/**
 * LUMIÈRE Architecture — Navigation Layer for Imluy
 * Minimal, transparent nav that solidifies on scroll
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";

interface ImluyNavProps {
  cartItemCount: number;
  wishlistCount: number;
  onCartToggle: () => void;
  onSearchOpen: () => void;
  onWishlistOpen: () => void;
}

const navLinks = ["New Arrivals", "Collections", "Tailoring", "Evening", "Accessories"];

export default function ImluyNav({ cartItemCount, wishlistCount, onCartToggle, onSearchOpen, onWishlistOpen }: ImluyNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-black/5 shadow-sm"
            : "bg-black/20 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        {/* Promo banner — inside header so it stacks naturally */}
        {promoVisible && (
          <div className="bg-imluy-black text-white">
            <div className="mx-auto max-w-[1440px] px-10 sm:px-12 lg:px-14 py-1.5 flex items-center justify-center relative">
              <p className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium text-white/80 text-center">
                <span className="hidden sm:inline">Complimentary shipping on all orders &nbsp;·&nbsp; Free returns within 30 days</span>
                <span className="sm:hidden">Free shipping & returns</span>
              </p>
              <button
                onClick={() => setPromoVisible(false)}
                className="absolute right-3 sm:right-5 p-1 text-white/40 hover:text-white/70 transition-colors"
                aria-label="Dismiss banner"
              >
                <X size={12} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        <nav className="mx-auto max-w-[1440px] grid grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 py-3.5 lg:px-12">
          {/* Left: Mobile toggle + Desktop nav links */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-imluy-black" : "text-white"
              } hover:opacity-60`}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#collection"
                    className={`text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                      scrolled
                        ? "text-imluy-black/60 hover:text-imluy-black"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Brand mark */}
          <a href="/imluy" className="px-4 sm:px-6">
            <span className={`font-imluy-display text-[18px] sm:text-[20px] tracking-[0.3em] uppercase font-light select-none whitespace-nowrap transition-colors duration-300 ${
              scrolled ? "text-imluy-black" : "text-white"
            }`}>
              Imluy
            </span>
          </a>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 justify-end">
            <button
              onClick={onSearchOpen}
              className={`p-1.5 transition-colors duration-300 ${
                scrolled ? "text-imluy-black/60 hover:text-imluy-black" : "text-white/75 hover:text-white"
              }`}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={onWishlistOpen}
              className={`relative p-1.5 transition-colors duration-300 ${
                scrolled ? "text-imluy-black/60 hover:text-imluy-black" : "text-white/75 hover:text-white"
              }`}
              aria-label={`Wishlist — ${wishlistCount} items`}
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className={`absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[9px] font-semibold rounded-full ${
                  scrolled ? "bg-imluy-black text-white" : "bg-white text-imluy-black"
                }`}>
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={onCartToggle}
              className={`relative p-1.5 transition-colors duration-300 ${
                scrolled ? "text-imluy-black/60 hover:text-imluy-black" : "text-white/75 hover:text-white"
              }`}
              aria-label={`Shopping bag — ${cartItemCount} items`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[9px] font-semibold rounded-full ${
                      scrolled ? "bg-imluy-black text-white" : "bg-white text-imluy-black"
                    }`}
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-[85vw] max-w-80 bg-white"
            >
              <div className="flex items-center justify-between p-6 border-b border-imluy-black/5">
                <span className="font-imluy-display text-lg tracking-[0.3em] uppercase font-light">
                  Imluy
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-imluy-black/60 hover:text-imluy-black"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <ul className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#collection"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-imluy-black/70 hover:text-imluy-black border-b border-imluy-black/5 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
