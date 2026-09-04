/**
 * LUMIÈRE Architecture — Size Guide Modal for Imluy
 */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { imluySizeGuide } from "@/lib/imluy/data";

interface ImluySizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImluySizeGuide({ isOpen, onClose }: ImluySizeGuideProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white w-full max-w-lg max-h-[80vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-imluy-black/5">
                <h3 className="text-[12px] tracking-[0.2em] uppercase font-medium text-imluy-black">Size Guide</h3>
                <button onClick={onClose} className="p-1.5 text-imluy-black/40 hover:text-imluy-black" aria-label="Close size guide">
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              <div className="p-6">
                <p className="text-[12px] text-imluy-black/50 leading-relaxed mb-6">
                  All measurements are in centimetres. When between two sizes, we recommend sizing up for a relaxed fit or sizing down for a more tailored silhouette.
                </p>

                <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium mb-3">Women's Ready-to-Wear</p>
                <div className="border border-imluy-black/10">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-imluy-black/10 bg-imluy-cream/50">
                        <th className="text-left px-4 py-2.5 font-medium text-imluy-black/60">Size</th>
                        <th className="text-left px-4 py-2.5 font-medium text-imluy-black/60">Bust</th>
                        <th className="text-left px-4 py-2.5 font-medium text-imluy-black/60">Waist</th>
                        <th className="text-left px-4 py-2.5 font-medium text-imluy-black/60">Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      {imluySizeGuide.map((row) => (
                        <tr key={row.size} className="border-b border-imluy-black/5 last:border-b-0">
                          <td className="px-4 py-2.5 font-medium text-imluy-black">{row.size}</td>
                          <td className="px-4 py-2.5 text-imluy-black/60">{row.bust}</td>
                          <td className="px-4 py-2.5 text-imluy-black/60">{row.waist}</td>
                          <td className="px-4 py-2.5 text-imluy-black/60">{row.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-imluy-cream/50 border border-imluy-black/5">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-imluy-black/40 font-medium mb-2">How to Measure</p>
                  <ul className="space-y-1.5 text-[11px] text-imluy-black/50 leading-relaxed">
                    <li><strong className="text-imluy-black/70">Bust:</strong> Measure around the fullest part of your chest.</li>
                    <li><strong className="text-imluy-black/70">Waist:</strong> Measure at your natural waistline.</li>
                    <li><strong className="text-imluy-black/70">Hips:</strong> Measure around the fullest part of your hips.</li>
                  </ul>
                </div>

                <p className="mt-6 text-[11px] text-imluy-black/35 leading-relaxed">
                  For personal styling assistance or bespoke sizing, please{" "}
                  <a href="#" className="underline hover:text-imluy-black/60 transition-colors">contact our client care team</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
