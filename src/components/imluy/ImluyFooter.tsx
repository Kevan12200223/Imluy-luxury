/**
 * LUMIÈRE Architecture — Footer Layer for Imluy
 * Understated, editorial footer with brand essence
 */

import { Instagram, Twitter } from "lucide-react";

export default function ImluyFooter() {
  return (
    <footer className="bg-imluy-black text-white/60">
      {/* Newsletter band */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-2">
              Stay informed
            </p>
            <p className="font-imluy-display text-xl tracking-[0.15em] uppercase text-white/90 font-light">
              Join the Inner Circle
            </p>
          </div>
          <form
            className="flex w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/15 border-r-0 px-5 py-3 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-imluy-display text-lg tracking-[0.3em] uppercase text-white/90 font-light mb-4">
              Imluy
            </p>
            <p className="text-[12px] leading-relaxed text-white/35 max-w-xs">
              Redefining modern luxury through architectural design,
              sustainable craftsmanship, and timeless silhouettes.
            </p>
          </div>

          {/* Collections */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-5 font-medium">
              Collections
            </p>
            <ul className="space-y-3">
              {["New Arrivals", "Outerwear", "Tailoring", "Evening Wear", "Accessories"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#collection"
                      className="text-[12px] text-white/45 hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Maison */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-5 font-medium">
              The Maison
            </p>
            <ul className="space-y-3">
              {["Our Story", "Atelier", "Sustainability", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] text-white/45 hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Client care */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-5 font-medium">
              Client Care
            </p>
            <ul className="space-y-3">
              {["Contact Us", "Shipping & Returns", "Size Guide", "Garment Care", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] text-white/45 hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider text-white/25">
            &copy; 2026 Imluy. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-white/30 hover:text-white/60 transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/30 hover:text-white/60 transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
