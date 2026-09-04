/**
 * LUMIÈRE Architecture — Layout Composition for Imluy
 * Orchestrates all visual layers: nav, content, cart, wishlist, search, detail, footer
 */

import { useState, useMemo, useCallback } from "react";
import type { ImluyProduct, ImluyColor } from "@/lib/imluy/types";
import { useImluyCart } from "@/lib/imluy/useCart";
import { useImluyWishlist } from "@/lib/imluy/useWishlist";
import { ImluyContext } from "@/lib/imluy/context";
import { imluyProducts } from "@/lib/imluy/data";
import ImluyNav from "./ImluyNav";
import ImluyCartDrawer from "./ImluyCartDrawer";
import ImluyWishlistDrawer from "./ImluyWishlistDrawer";
import ImluyProductDetail from "./ImluyProductDetail";
import ImluySearch from "./ImluySearch";
import ImluySizeGuide from "./ImluySizeGuide";
import ImluyFooter from "./ImluyFooter";
import ImluyBackToTop from "./ImluyBackToTop";

interface ImluyLayoutProps {
  children: React.ReactNode;
}

export default function ImluyLayout({ children }: ImluyLayoutProps) {
  const cart = useImluyCart();
  const wishlist = useImluyWishlist();
  const [selectedProduct, setSelectedProduct] = useState<ImluyProduct | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const handleAddToCart = useCallback(
    (product: ImluyProduct, size: string, color: ImluyColor) => {
      cart.addItem(product, size, color);
      setSelectedProduct(null);
    },
    [cart]
  );

  const getRelatedProducts = useCallback(
    (product: ImluyProduct | null) => {
      if (!product) return [];
      return imluyProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      onSelectProduct: setSelectedProduct,
      onToggleWishlist: wishlist.toggleItem,
      isWishlisted: wishlist.isWishlisted,
    }),
    [wishlist.toggleItem, wishlist.isWishlisted]
  );

  return (
    <ImluyContext.Provider value={contextValue}>
      <div className="imluy-root min-h-screen bg-white text-imluy-black font-imluy-body selection:bg-imluy-black/10 overflow-x-hidden">
        <ImluyNav
          cartItemCount={cart.totalItems}
          wishlistCount={wishlist.count}
          onCartToggle={cart.toggleCart}
          onSearchOpen={() => setSearchOpen(true)}
          onWishlistOpen={wishlist.open}
        />

        <ImluyCartDrawer
          isOpen={cart.isOpen}
          onClose={cart.closeCart}
          items={cart.items}
          totalPrice={cart.totalPrice}
          onUpdateQuantity={cart.updateQuantity}
          onRemoveItem={cart.removeItem}
        />

        <ImluyWishlistDrawer
          isOpen={wishlist.isOpen}
          onClose={wishlist.close}
          items={wishlist.items}
          onRemove={wishlist.removeItem}
          onAddToCart={handleAddToCart}
        />

        <ImluyProductDetail
          product={selectedProduct}
          relatedProducts={getRelatedProducts(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onSizeGuideOpen={() => setSizeGuideOpen(true)}
        />

        <ImluySearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          products={imluyProducts}
        />

        <ImluySizeGuide
          isOpen={sizeGuideOpen}
          onClose={() => setSizeGuideOpen(false)}
        />

        {children}

        <ImluyFooter />
        <ImluyBackToTop />
      </div>
    </ImluyContext.Provider>
  );
}
