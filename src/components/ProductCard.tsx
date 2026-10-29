"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-context";
import { CATEGORY_STYLES } from "@/lib/products";
import type { Product, Category } from "@/lib/products";
import { waUrl } from "@/lib/wa";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tilt3D } from "@/components/animations";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);


interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  const catStyle = CATEGORY_STYLES[product.category];

  return (
    <Tilt3D intensity={9} scale={1.02} className={className}>
    <motion.article
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden h-full card-top-accent"
      )}
      style={{
        backgroundColor: "var(--ivory)",
        boxShadow: "0 2px 12px rgba(92,26,0,0.06)",
      }}
      whileHover={{ boxShadow: "0 24px 56px rgba(92,26,0,0.16)" }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Badge */}
      {product.badge ? (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
          style={{
            backgroundColor:
              product.badge === "new" ? "var(--terracotta)" : "var(--mauve)",
          }}
        >
          {product.badge}
        </div>
      ) : null}

      {/* Emoji display — category-tinted background */}
      <Link
        href={`/product/${product.slug}`}
        className="block relative overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="h-56 flex items-center justify-center relative"
          style={{ background: catStyle.bg }}
        >
          {/* Subtle radial glow behind emoji */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 55% at 50% 55%, rgba(255,255,255,0.45) 0%, transparent 70%)",
            }}
          />
          {/* Subtle dot-grid pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--sienna) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <span
            key={product.id}
            className="text-8xl select-none transition-transform duration-500 group-hover:scale-110 drop-shadow-lg relative z-10"
            role="img"
            aria-label={product.name}
          >
            {product.emoji}
          </span>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--ivory) 20%, transparent)" }}
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-2">
        {/* Brand name */}
        <p
          className="text-[9px] font-bold tracking-[0.28em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          {product.brandName}
        </p>

        {/* Product name */}
        <Link href={`/product/${product.slug}`} className="block">
          <h3
            className="text-[1.15rem] leading-tight hover:underline decoration-1 underline-offset-2"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              color: "var(--sienna)",
              fontWeight: 500,
            }}
          >
            {product.name}
          </h3>
        </Link>

        {/* Category tag + dimensions */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-[9px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: catStyle.tagBg, color: catStyle.tagColor }}
          >
            {product.category}
          </span>
          <span className="text-[9px] text-muted-foreground tabular-nums">
            {product.dimensions}
          </span>
        </div>

        {/* Description */}
        <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 mt-auto pt-2 border-t" style={{ borderColor: "rgba(160,120,48,0.12)" }}>
          <span
            className="text-2xl font-semibold tabular-nums"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              color: "var(--sienna)",
            }}
          >
            ₹{product.price}
          </span>
          <span className="text-[10px] text-muted-foreground">incl. taxes</span>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-2 mt-1">
          <button
            onClick={() => {
              addItem(product);
              toast.success("Added to cart", { description: product.name });
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 bg-terracotta border border-terracotta hover:bg-transparent hover:text-terracotta active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="size-3" />
            Add to Cart
          </button>

          <a
            href={waUrl(`Hi! I'd like to order: ${product.name} (Rs.${product.price}) 🕯️`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order via WhatsApp"
            className="flex items-center justify-center w-11 rounded-full text-white transition-all duration-200 bg-[#25D366] border border-[#25D366] hover:bg-transparent hover:text-[#25D366] active:scale-95 shrink-0 cursor-pointer"
          >
            {WA_ICON}
          </a>
        </div>
      </div>
    </motion.article>
    </Tilt3D>
  );
}
