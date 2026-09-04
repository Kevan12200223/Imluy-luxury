/**
 * LUMIÈRE Architecture — Hero Layer for Imluy
 * Full-bleed cinematic hero with parallax-inspired depth
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ImluyHero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1100px] w-full overflow-hidden bg-imluy-black">
      {/* Background image with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: imgFailed ? 1 : 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {!imgFailed && (
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover opacity-60"
            loading="eager"
            onError={() => setImgFailed(true)}
          />
        )}
        {/* Gradient fallback — always visible as overlay or standalone */}
        <div
          className={`absolute inset-0 ${
            imgFailed
              ? "bg-gradient-to-br from-imluy-charcoal via-imluy-black to-imluy-charcoal"
              : "bg-gradient-to-b from-black/30 via-transparent to-black/60"
          }`}
        />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-[11px] font-medium tracking-[0.4em] uppercase text-white/60"
        >
          Autumn / Winter 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-imluy-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-white font-light leading-[1.1]"
        >
          Imluy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-6 max-w-md text-[13px] leading-relaxed tracking-wide text-white/50 font-light"
        >
          Where architectural precision meets the poetry of fabric.
          <br />
          Each piece, a quiet revolution.
        </motion.p>

        <motion.a
          href="#collection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 inline-flex items-center gap-2 border border-white/25 px-8 py-3 text-[10px] font-medium tracking-[0.3em] uppercase text-white/80 hover:bg-white hover:text-black transition-all duration-500"
        >
          Discover the Collection
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/30" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
