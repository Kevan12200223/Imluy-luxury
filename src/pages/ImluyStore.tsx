/**
 * Imluy — Luxury Clothing Brand Storefront
 * Powered by the LUMIÈRE Architecture
 */

import { Helmet } from "react-helmet-async";
import ImluyLayout from "@/components/imluy/ImluyLayout";
import ImluyHero from "@/components/imluy/ImluyHero";
import ImluyProductGrid from "@/components/imluy/ImluyProductGrid";
import { imluyProducts } from "@/lib/imluy/data";

export default function ImluyStore() {
  return (
    <ImluyLayout>
      <Helmet>
        <title>Imluy — Luxury Fashion House</title>
        <meta
          name="description"
          content="Discover Imluy's curated collection of luxury clothing. Architectural precision meets the poetry of fabric."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://imluy.com/" />
      </Helmet>

      {/* Cinematic hero */}
      <ImluyHero />

      {/* Brand statement band */}
      <section className="bg-imluy-cream py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-imluy-black/35 mb-4 font-medium">
            The Philosophy
          </p>
          <blockquote className="font-imluy-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-imluy-black/80 font-light leading-relaxed">
            "We don't follow seasons. We craft enduring pieces that exist beyond time — 
            garments that become part of your story."
          </blockquote>
          <p className="mt-6 text-[11px] tracking-[0.2em] uppercase text-imluy-black/30">
            — The Imluy Atelier
          </p>
        </div>
      </section>

      {/* Product collection grid */}
      <ImluyProductGrid products={imluyProducts} />

      {/* Editorial band */}
      <section className="bg-imluy-black text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
              Craftsmanship
            </p>
            <h3 className="font-imluy-display text-3xl sm:text-4xl tracking-[0.1em] uppercase text-white/90 font-light mb-6">
              Made by Hand,<br />Made to Last
            </h3>
            <p className="text-[13px] leading-relaxed text-white/45 max-w-md">
              Every Imluy garment passes through the hands of our master artisans in Milan.
              From the initial pattern cutting to the final pressing, each step is guided by
              decades of expertise and an unwavering commitment to perfection.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
            {[
              { value: "47", label: "Artisans" },
              { value: "120+", label: "Hours per piece" },
              { value: "100%", label: "Natural fibres" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-imluy-display text-2xl sm:text-3xl lg:text-4xl text-white/80 font-light mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/30">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ImluyLayout>
  );
}
