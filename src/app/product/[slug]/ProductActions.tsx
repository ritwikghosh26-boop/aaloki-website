"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import { waUrl } from "@/lib/wa";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const waMsg = () =>
    waUrl(`Hi Aaloki! I'm interested in ${product.name} (Rs.${product.price}). Is it available?`);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addItem(product);
    toast.success(qty === 1 ? "Added to cart" : `Added ${qty} items to cart`, {
      description: product.name,
    });
  }

  const total = product.price * qty;

  return (
    <>
      {/* Quantity selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium" style={{ color: "var(--sienna)" }}>
          Qty
        </span>
        <div
          className="flex items-center rounded-xl border overflow-hidden"
          style={{ borderColor: "oklch(0.9 0 0)", backgroundColor: "var(--ivory)" }}
        >
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty === 1}
            className="w-10 h-10 flex items-center justify-center transition-opacity disabled:opacity-30"
            style={{ color: "var(--sienna)" }}
            aria-label="Decrease quantity"
          >
            <Minus className="size-3.5" />
          </button>
          <span
            className="w-10 text-center text-sm font-semibold tabular-nums select-none"
            style={{ color: "var(--sienna)" }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            disabled={qty === 10}
            className="w-10 h-10 flex items-center justify-center transition-opacity disabled:opacity-30"
            style={{ color: "var(--sienna)" }}
            aria-label="Increase quantity"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
        {qty > 1 && (
          <span
            className="text-sm font-semibold tabular-nums"
            style={{ color: "var(--gold)" }}
          >
            = ₹{total}
          </span>
        )}
      </div>

      {/* Desktop CTA buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity active:scale-[0.98]"
          style={{ backgroundColor: "var(--terracotta)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <ShoppingBag className="size-4" />
          Add to Cart
        </button>
        <a
          href={waMsg()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity active:scale-[0.98]"
          style={{ backgroundColor: "#25D366" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {WA_ICON}
          Order on WhatsApp
        </a>
      </div>

      {/* Mobile sticky buy bar */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t flex items-center gap-3 px-4 py-3"
        style={{
          backgroundColor: "color-mix(in srgb, var(--cream) 97%, transparent)",
          backdropFilter: "blur(10px)",
          borderColor: "oklch(0.9 0 0)",
        }}
      >
        <div className="flex-1 min-w-0">
          <p
            className="text-[11px] truncate"
            style={{ color: "oklch(0.556 0 0)" }}
          >
            {product.name}
          </p>
          <p
            className="text-xl font-semibold tabular-nums leading-tight"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              color: "var(--sienna)",
            }}
          >
            ₹{total}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white active:scale-[0.97]"
          style={{ backgroundColor: "var(--terracotta)" }}
        >
          <ShoppingBag className="size-3.5" />
          Cart
        </button>
        <a
          href={waMsg()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white active:scale-[0.97]"
          style={{ backgroundColor: "#25D366" }}
        >
          {WA_ICON}
          WhatsApp
        </a>
      </div>
    </>
  );
}
