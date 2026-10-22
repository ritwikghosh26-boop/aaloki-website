"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/lib/products";
import type { Product, Category } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc";

const ALL_TABS = ["All", ...categories] as const;

interface ShopClientProps {
  products: Product[];
}

export function ShopClient({ products }: ShopClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = searchParams.get("category") as Category | null;
  const sort = (searchParams.get("sort") ?? "featured") as SortKey;

  function setParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    // clean up default sort so URLs stay clean
    if (params.get("sort") === "featured") params.delete("sort");
    const qs = params.toString();
    router.push(qs ? `/shop?${qs}` : "/shop", { scroll: false });
  }

  const filtered = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : [...products];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, activeCategory, sort]);

  return (
    <>
      {/* ── Sticky filter bar ── */}
      <div
        className="sticky top-16 z-30 border-b"
        style={{
          backgroundColor: "color-mix(in srgb, var(--cream) 96%, transparent)",
          backdropFilter: "blur(8px)",
          borderColor: "var(--ivory)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-3">
            {/* Category tabs — horizontally scrollable on mobile */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide flex-1 min-w-0">
              {ALL_TABS.map((tab) => {
                const isActive =
                  tab === "All" ? !activeCategory : activeCategory === tab;
                return (
                  <button
                    key={tab}
                    onClick={() =>
                      setParam("category", tab === "All" ? null : tab)
                    }
                    className={cn(
                      "shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap",
                      "hover:bg-[var(--terracotta)] hover:text-white",
                      isActive
                        ? "bg-[var(--terracotta)] text-white"
                        : "bg-[var(--ivory)] text-[var(--sienna)]"
                    )}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Sort select */}
            <select
              value={sort}
              onChange={(e) =>
                setParam("sort", e.target.value === "featured" ? null : e.target.value)
              }
              className="shrink-0 text-sm rounded-lg px-3 py-1.5 border outline-none cursor-pointer"
              style={{
                backgroundColor: "var(--ivory)",
                color: "var(--sienna)",
                borderColor: "oklch(0.9 0 0)",
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Results + grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <p className="text-sm mb-6" style={{ color: "oklch(0.556 0 0)" }}>
          <span
            className="font-semibold"
            style={{ color: "var(--sienna)" }}
          >
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "product" : "products"}
          {activeCategory ? (
            <>
              {" "}in{" "}
              <span
                className="font-medium"
                style={{ color: "var(--sienna)" }}
              >
                {activeCategory}
              </span>
            </>
          ) : null}
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-28">
            <p className="text-4xl mb-4">🕯️</p>
            <p
              className="text-lg mb-1"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--sienna)",
              }}
            >
              Nothing here yet
            </p>
            <p className="text-sm" style={{ color: "oklch(0.556 0 0)" }}>
              No products in this category yet.
            </p>
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Free shipping nudge */}
        <p
          className="text-center text-xs mt-12 pb-2"
          style={{ color: "oklch(0.556 0 0)" }}
        >
          🚚 Free shipping on orders above ₹999 · Pan-India Delivery
        </p>
      </div>
    </>
  );
}
