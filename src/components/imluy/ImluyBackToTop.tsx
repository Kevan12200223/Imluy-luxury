/**
 * LUMIÈRE Architecture — Back to Top Button for Imluy
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ImluyBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 w-10 h-10 flex items-center justify-center bg-imluy-black text-white border border-white/10 hover:bg-imluy-charcoal transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
