"use client";

import Link from "next/link";
import Image from "next/image";
import { waUrl } from "@/lib/wa";

const SHOP_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/shop?category=Sachets", label: "Sachets" },
  { href: "/shop?category=Decorative", label: "Decorative" },
  { href: "/shop?category=Novelty", label: "Novelty" },
  { href: "/shop?category=Statement", label: "Statement" },
  { href: "/shop?category=Gift+Sets", label: "Gift Sets" },
];

const INFO_LINKS = [
  { href: "/about", label: "About Aaloki" },
  { href: "/gifting", label: "Gifting Guide" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns & Care" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/aaloki.kolkata",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/aaloki.kolkata",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {

  return (
    <footer style={{ backgroundColor: "var(--sienna)", color: "var(--ivory)" }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-10">

          {/* ── Brand column ── */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/aaloki-logo.png" alt="Aaloki" width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <p
                  className="text-xs tracking-[0.35em] uppercase"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--gold)",
                  }}
                >
                  AALOKI
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ivory)", opacity: 0.55 }}>
                  Handcrafted Home Décor
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4 max-w-xs"
              style={{ color: "var(--ivory)", opacity: 0.75 }}
            >
              Handcrafted candles & home décor from the heart of Kolkata.
              Made with love, safe ingredients, and a touch of Indian soul.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 transition-colors hover:border-current"
                  style={{ color: "var(--ivory)", opacity: 0.8 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                    e.currentTarget.style.color = "var(--ivory)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Shop ── */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Shop
            </h3>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "var(--ivory)", opacity: 0.7 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Info ── */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Info
            </h3>
            <ul className="space-y-2.5">
              {INFO_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "var(--ivory)", opacity: 0.7 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="col-span-2 lg:col-span-1">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ivory)", opacity: 0.8 }}>
              <li>
                <a
                  href={waUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-100 transition-opacity"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 shrink-0"
                    style={{ color: "#25D366" }}
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Kolkata, West Bengal, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:hello@aaloki.shop"
                  className="hover:opacity-100 transition-opacity"
                >
                  hello@aaloki.shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(245,239,230,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "var(--ivory)", opacity: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Aaloki. All rights reserved.</p>
          <p>Handcrafted in Kolkata with ❤️ · Pan-India Delivery</p>
        </div>
      </div>
    </footer>
  );
}
