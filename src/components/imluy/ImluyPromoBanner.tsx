/**
 * LUMIÈRE Architecture — Promotional Banner for Imluy
 */

import { useState } from "react";
import { X } from "lucide-react";

export default function ImluyPromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[55] bg-imluy-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-2 flex items-center justify-center relative">
        <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-white/80">
          Complimentary shipping on all orders &nbsp;·&nbsp; Free returns within 30 days
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 p-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
