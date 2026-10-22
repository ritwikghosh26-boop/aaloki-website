import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  products,
  getProductBySlug,
  getProductsByCategory,
  CATEGORY_STYLES,
} from "@/lib/products";
import type { Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductActions } from "./ProductActions";


const TRUST_BADGES = [
  { icon: "🤲", label: "Handcrafted" },
  { icon: "📍", label: "Kolkata-Made" },
  { icon: "🌿", label: "Safe Ingredients" },
  { icon: "🎁", label: "Gift-Ready" },
];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const catStyle = CATEGORY_STYLES[product.category];

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  // Deterministic fake stock (3–7) so it's consistent across SSG builds
  const stock =
    (product.id.charCodeAt(product.id.length - 1) % 5) + 3;

  // Related: same category, exclude self, max 4
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div
      className="min-h-screen pb-24 md:pb-0"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* ── Breadcrumb ── */}
        <nav
          className="flex items-center gap-1.5 text-xs mb-8 flex-wrap"
          aria-label="Breadcrumb"
          style={{ color: "oklch(0.556 0 0)" }}
        >
          <Link
            href="/"
            className="hover:underline underline-offset-2"
            style={{ color: "var(--gold)" }}
          >
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href="/shop"
            className="hover:underline underline-offset-2"
            style={{ color: "var(--gold)" }}
          >
            Shop
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:underline underline-offset-2"
            style={{ color: "var(--gold)" }}
          >
            {product.category}
          </Link>
          <span aria-hidden>/</span>
          <span className="truncate max-w-[180px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Left: image area ── */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ background: catStyle.bg }}
            >
              {product.badge ? (
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor:
                      product.badge === "new"
                        ? "var(--terracotta)"
                        : "var(--mauve)",
                  }}
                >
                  {product.badge}
                </div>
              ) : null}
              {discount ? (
                <div
                  className="absolute top-4 right-4 z-10 px-2.5 py-1.5 rounded-full text-xs font-bold text-white tabular-nums"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  -{discount}%
                </div>
              ) : null}
              <div className="h-72 sm:h-96 lg:h-[500px] flex items-center justify-center">
                <span className="text-[8rem] sm:text-[10rem] lg:text-[12rem] select-none drop-shadow-lg">
                  {product.emoji}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: details ── */}
          <div className="flex flex-col gap-5">
            {/* Category + brand row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: catStyle.tagBg,
                  color: catStyle.tagColor,
                }}
              >
                {product.category}
              </span>
              <span
                className="text-xs font-semibold tracking-[0.22em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                {product.brandName}
              </span>
            </div>

            {/* Product name */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--sienna)",
              }}
            >
              {product.name}
            </h1>

            {/* Dimensions */}
            <p className="text-sm" style={{ color: "oklch(0.556 0 0)" }}>
              <span
                className="font-medium"
                style={{ color: "var(--sienna)" }}
              >
                Size:
              </span>{" "}
              {product.dimensions}
            </p>

            {/* Price block */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="text-4xl font-semibold tabular-nums"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--sienna)",
                }}
              >
                ₹{product.price}
              </span>
              {product.oldPrice ? (
                <>
                  <span
                    className="text-xl line-through tabular-nums"
                    style={{ color: "oklch(0.556 0 0)" }}
                  >
                    ₹{product.oldPrice}
                  </span>
                  <span
                    className="text-sm font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    {discount}% off
                  </span>
                </>
              ) : null}
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.4 0 0)" }}
            >
              {product.description}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: "var(--ivory)",
                    borderColor: "oklch(0.9 0 0)",
                    color: "var(--sienna)",
                  }}
                >
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            {/* Stock urgency */}
            {stock <= 5 && (
              <p className="flex items-center gap-2 text-sm font-medium">
                <span
                  className="inline-block w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#e85d2f" }}
                />
                <span style={{ color: "#e85d2f" }}>
                  Only {stock} left in stock — order soon
                </span>
              </p>
            )}

            {/* Free shipping nudge */}
            {product.price < 999 && (
              <p className="text-xs" style={{ color: "oklch(0.556 0 0)" }}>
                🚚 Add{" "}
                <span className="font-medium" style={{ color: "var(--sienna)" }}>
                  ₹{999 - product.price}
                </span>{" "}
                more to your order for free shipping
              </p>
            )}

            {/* Qty selector + CTA buttons (client) */}
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section
          className="border-t"
          style={{
            backgroundColor: "var(--ivory)",
            borderColor: "oklch(0.9 0 0)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p
              className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-2"
              style={{ color: "var(--gold)" }}
            >
              You May Also Like
            </p>
            <h2
              className="text-2xl sm:text-3xl mb-8"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--sienna)",
              }}
            >
              More from {product.category}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
