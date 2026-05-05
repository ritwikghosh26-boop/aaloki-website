import { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse all 27 Aaloki handcrafted candles and home décor — sachets, decorative, novelty, statement pieces, and gift sets.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* ── Page header ── */}
      <div
        className="pt-28 pb-10 text-center px-4"
        style={{
          background:
            "linear-gradient(180deg, var(--cream) 0%, var(--ivory) 100%)",
        }}
      >
        <p
          className="text-[11px] font-semibold tracking-[0.32em] uppercase mb-3"
          style={{ color: "var(--gold)" }}
        >
          The Collection
        </p>
        <h1
          className="text-4xl sm:text-5xl mb-3 leading-tight"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            color: "var(--sienna)",
          }}
        >
          Our Candles
        </h1>
        <p
          className="text-sm max-w-sm mx-auto leading-relaxed"
          style={{ color: "oklch(0.556 0 0)" }}
        >
          Handcrafted in Kolkata with safe ingredients — each piece made with
          intention and care.
        </p>

        {/* Category quick-counts */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 mt-6 text-xs">
          {(
            [
              ["All", products.length],
              ["Sachets", products.filter((p) => p.category === "Sachets").length],
              ["Decorative", products.filter((p) => p.category === "Decorative").length],
              ["Novelty", products.filter((p) => p.category === "Novelty").length],
              ["Statement", products.filter((p) => p.category === "Statement").length],
              ["Gift Sets", products.filter((p) => p.category === "Gift Sets").length],
              ["Others", products.filter((p) => p.category === "Others").length],
            ] as [string, number][]
          ).map(([label, count]) => (
            <span key={label} style={{ color: "oklch(0.556 0 0)" }}>
              <span
                className="font-semibold"
                style={{ color: "var(--sienna)" }}
              >
                {count}
              </span>{" "}
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ShopClient reads ?category= and ?sort= from URL */}
      <Suspense>
        <ShopClient products={products} />
      </Suspense>
    </div>
  );
}
