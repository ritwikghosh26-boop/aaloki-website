import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flame, Leaf, Gift, Truck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { waUrl } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Aaloki — Handcrafted Candles & Home Décor from Kolkata",
  description:
    "Shop premium handcrafted candles, sachets, and home décor from Kolkata. Gift-ready packaging, pan-India delivery. Order on WhatsApp.",
};

const WA_ORDER_URL = waUrl("Hi Aaloki! I found you on your website and would like to browse your collection 🕯️");

// Shared inline WhatsApp SVG
function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   1. HERO
───────────────────────────────────────────────────────────────── */
const TRUST_BADGES = ["Handcrafted", "Kolkata-Made", "Pan-India Delivery", "Gift-Ready"];

function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{
        minHeight: "calc(100vh - 4rem)",
        background:
          "radial-gradient(ellipse 75% 55% at 52% 22%, rgba(160,120,48,0.11) 0%, transparent 68%), linear-gradient(160deg, #FAF6F0 0%, #F5EFE6 100%)",
      }}
      aria-label="Hero"
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <Image src="/images/aaloki-logo.svg" alt="" width={540} height={540} className="opacity-[0.035]" priority />
      </div>

      {/* Decorative dots */}
      <div className="absolute top-16 left-[7%] w-2.5 h-2.5 rounded-full opacity-25 hidden sm:block" style={{ backgroundColor: "var(--gold)" }} aria-hidden="true" />
      <div className="absolute bottom-28 right-[9%] w-2 h-2 rounded-full opacity-20 hidden sm:block" style={{ backgroundColor: "var(--terracotta)" }} aria-hidden="true" />
      <div className="absolute top-1/3 right-[6%] w-1.5 h-1.5 rounded-full opacity-15 hidden lg:block" style={{ backgroundColor: "var(--mauve)" }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)", animation: "fadeUp 0.8s ease both" }}
        >
          Handcrafted in Kolkata
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.08] tracking-tight"
          style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)", animation: "fadeUp 0.9s 0.1s ease both" }}
        >
          Made with light,
          <br />
          <em className="not-italic" style={{ color: "var(--terracotta)" }}>made with love.</em>
        </h1>

        <p
          className="text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-bengali), serif", color: "var(--mauve)", animation: "fadeUp 0.9s 0.25s ease both" }}
        >
          হাতে তৈরি, হৃদয় দিয়ে
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2" style={{ animation: "fadeUp 0.9s 0.4s ease both" }}>
          <Link
            href="/shop"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--terracotta)" }}
          >
            Shop Now
          </Link>
          <a
            href={WA_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp Us
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-2" style={{ animation: "fadeUp 0.9s 0.55s ease both" }}>
          {TRUST_BADGES.map((badge, i) => (
            <span key={badge} className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--sienna)", opacity: 0.65 }}>
              {i > 0 && <span className="w-px h-3 inline-block" style={{ backgroundColor: "var(--gold)", opacity: 0.4 }} />}
              <span className="text-[9px]" style={{ color: "var(--gold)" }} aria-hidden="true">✦</span>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #F5EFE6, transparent)" }} aria-hidden="true" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   2. TRUST BAR
───────────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Handcrafted", "Pan-India Delivery", "Gift-Ready Packaging",
  "Natural Ingredients", "Made in Kolkata", "Safe for All Skin Types",
  "27 Unique Designs", "Order on WhatsApp",
];

function TrustBar() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden py-3.5" style={{ backgroundColor: "var(--sienna)" }} aria-label="Trust signals">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 text-sm font-medium shrink-0" style={{ color: "var(--ivory)" }}>
            <span style={{ color: "var(--gold)" }} aria-hidden="true">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   3. FEATURED PRODUCTS
───────────────────────────────────────────────────────────────── */
const FEATURED_IDS = ["STM-002", "GFT-001", "DEC-002", "DEC-007", "SAC-001", "NOV-004"];

function FeaturedProducts() {
  const featured = FEATURED_IDS
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }} aria-label="Featured products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "var(--gold)" }}>Best Sellers</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Every piece, made by hand.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Hand-poured in small batches, finished individually, and shipped with care from our Kolkata studio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border text-sm font-semibold transition-colors"
            style={{ borderColor: "var(--terracotta)", color: "var(--terracotta)" }}
          >
            View All 27 Products <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   4. RICCHA'S STORY — Diya SVG illustration
───────────────────────────────────────────────────────────────── */
function DiyaIllustration() {
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="diyaBg" cx="50%" cy="42%">
          <stop offset="0%" stopColor="#FAF6F0" />
          <stop offset="100%" stopColor="#F5EFE6" />
        </radialGradient>
        <linearGradient id="diyaFlame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE566" />
          <stop offset="55%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#B5532A" />
        </linearGradient>
        <filter id="diyaGlow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer dashed ring */}
      <circle cx="160" cy="160" r="155" fill="#F5EFE6" stroke="#A07830" strokeWidth="1.5" strokeDasharray="4 7" />
      {/* Inner fill */}
      <circle cx="160" cy="160" r="138" fill="url(#diyaBg)" />
      <circle cx="160" cy="160" r="138" fill="none" stroke="#A07830" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* Cardinal dots */}
      <circle cx="160" cy="5"   r="4.5" fill="#A07830" />
      <circle cx="315" cy="160" r="4.5" fill="#A07830" />
      <circle cx="160" cy="315" r="4.5" fill="#A07830" />
      <circle cx="5"   cy="160" r="4.5" fill="#A07830" />
      {/* Diagonal dots */}
      <circle cx="267" cy="53"  r="3" fill="#A07830" opacity="0.5" />
      <circle cx="267" cy="267" r="3" fill="#A07830" opacity="0.5" />
      <circle cx="53"  cy="267" r="3" fill="#A07830" opacity="0.5" />
      <circle cx="53"  cy="53"  r="3" fill="#A07830" opacity="0.5" />
      {/* Flame glow */}
      <ellipse cx="160" cy="118" rx="14" ry="22" fill="#FF9900" opacity="0.14" filter="url(#diyaGlow)" />
      {/* Flame */}
      <path d="M160,82 C153,98 147,114 149,130 C151,144 160,152 160,152 C160,152 169,144 171,130 C173,114 167,98 160,82Z" fill="url(#diyaFlame)" />
      {/* Inner flame highlight */}
      <path d="M160,100 C157,110 155,120 157,130 C158,138 160,141 160,141 C160,141 162,138 163,130 C165,120 163,110 160,100Z" fill="#FFE566" opacity="0.55" />
      {/* Wick */}
      <rect x="159" y="152" width="2" height="14" rx="1" fill="#5C1A00" />
      {/* Diya body */}
      <path d="M128,174 C126,174 124,179 126,187 C131,202 144,210 160,210 C176,210 189,202 194,187 C196,179 194,174 192,174Z" fill="#B5532A" />
      {/* Diya rim */}
      <ellipse cx="160" cy="174" rx="32" ry="9" fill="#A07830" />
      {/* Oil pool */}
      <ellipse cx="160" cy="174" rx="18" ry="5" fill="#FAF6F0" opacity="0.5" />
      {/* Leaf sprigs */}
      <path d="M108,158 C100,143 110,130 121,136 C115,147 113,154 108,158Z" fill="#A07830" opacity="0.38" />
      <path d="M114,152 C106,140 113,128 124,132 C118,143 117,149 114,152Z" fill="#7B4F6E" opacity="0.22" />
      <path d="M212,158 C220,143 210,130 199,136 C205,147 207,154 212,158Z" fill="#A07830" opacity="0.38" />
      <path d="M206,152 C214,140 207,128 196,132 C202,143 203,149 206,152Z" fill="#7B4F6E" opacity="0.22" />
      {/* Scatter dots */}
      <circle cx="118" cy="138" r="2.5" fill="#A07830" opacity="0.3" />
      <circle cx="202" cy="138" r="2.5" fill="#A07830" opacity="0.3" />
      <circle cx="108" cy="175" r="2"   fill="#7B4F6E" opacity="0.25" />
      <circle cx="212" cy="175" r="2"   fill="#7B4F6E" opacity="0.25" />
      {/* Bottom petals */}
      <path d="M143,218 C138,210 141,201 147,203 C147,210 146,215 143,218Z" fill="#7B4F6E" opacity="0.3" />
      <path d="M160,222 C160,212 165,205 169,208 C166,214 163,219 160,222Z" fill="#B5532A" opacity="0.3" />
      <path d="M177,218 C182,210 179,201 173,203 C173,210 174,215 177,218Z" fill="#7B4F6E" opacity="0.3" />
    </svg>
  );
}

function RicchaStory() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--ivory)" }} aria-label="Our story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <DiyaIllustration />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "var(--gold)" }}>Our Story</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-snug mb-6"
              style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}
            >
              A studio in Kolkata.<br />A craft from the heart.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--sienna)", opacity: 0.78 }}>
              <p>
                Aaloki was born from Riccha Ghosh&apos;s deep love for the art of candle-making — a practice she
                picked up at home in Kolkata and never let go of. What started as a creative pursuit became a
                calling: to bring warmth, fragrance, and beauty into Indian homes.
              </p>
              <p>
                Every piece is hand-poured in small batches, finished individually, and packed with care.
                No mass production. No shortcuts. Just the dedication of a maker who believes every candle
                deserves to tell its own quiet story.
              </p>
              <p>
                The name{" "}
                <span style={{ fontFamily: "var(--font-bengali), serif", color: "var(--terracotta)" }}>আলোকী</span>
                {" "}means &ldquo;one who brings light&rdquo; in Bengali — a fitting name for a brand that
                believes every home deserves a little warmth, a little glow.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: "var(--terracotta)" }}
            >
              Learn our full story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   5. GIFT SETS PREVIEW
───────────────────────────────────────────────────────────────── */
const GIFT_TIERS = [
  {
    emoji: "🕯️", name: "Starter Glow", tagline: "Perfect for first-time gifters",
    price: "₹1,299", unit: null, featured: false,
    includes: ["3 handpicked candles", "Organza gift pouch", "Handwritten note option", "Free pan-India delivery"],
  },
  {
    emoji: "✨", name: "Home Sanctuary", tagline: "A curated fragrance experience",
    price: "₹1,999", unit: null, featured: true,
    includes: ["5 premium candles", "Gift box with raffia ribbon", "Personalised message card", "Free pan-India delivery"],
  },
  {
    emoji: "🎁", name: "Corporate Gift", tagline: "For teams & bulk occasions",
    price: "₹1,599", unit: "/ unit", featured: false,
    includes: ["Custom qty (10+ units)", "Company branding option", "Consolidated delivery", "Bulk pricing available"],
  },
];

function GiftSetsPreview() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }} aria-label="Gift sets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "var(--gold)" }}>Gift With Intention</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Give the gift of light.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Curated sets for every occasion — birthdays, Diwali, housewarmings, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GIFT_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              style={{
                backgroundColor: tier.featured ? "var(--sienna)" : "var(--ivory)",
                outline: tier.featured ? "2px solid var(--gold)" : undefined,
              }}
            >
              {tier.featured && (
                <div className="absolute top-0 inset-x-0 text-center text-[10px] font-bold tracking-widest uppercase py-1.5" style={{ backgroundColor: "var(--gold)", color: "var(--sienna)" }}>
                  Most Popular
                </div>
              )}
              <div className={`flex flex-col flex-1 p-6 ${tier.featured ? "pt-9" : ""}`}>
                <div className="text-5xl mb-4">{tier.emoji}</div>
                <h3 className="text-2xl font-medium mb-1" style={{ fontFamily: "var(--font-display), Georgia, serif", color: tier.featured ? "var(--ivory)" : "var(--sienna)" }}>
                  {tier.name}
                </h3>
                <p className="text-xs mb-5" style={{ color: tier.featured ? "rgba(245,239,230,0.65)" : "var(--muted-foreground)" }}>
                  {tier.tagline}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: tier.featured ? "rgba(245,239,230,0.85)" : "var(--sienna)", opacity: tier.featured ? 1 : 0.8 }}>
                      <span style={{ color: "var(--gold)" }} aria-hidden="true">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-semibold tabular-nums" style={{ fontFamily: "var(--font-display), Georgia, serif", color: tier.featured ? "var(--gold)" : "var(--terracotta)" }}>
                    {tier.price}
                  </span>
                  {tier.unit && (
                    <span className="text-sm" style={{ color: tier.featured ? "rgba(245,239,230,0.55)" : "var(--muted-foreground)" }}>{tier.unit}</span>
                  )}
                </div>
                <a
                  href={waUrl(`Hi! I'm interested in the "${tier.name}" gift set (${tier.price}). Please share more details 🎁`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-88"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <WhatsAppIcon className="size-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   6. WHY AALOKI
───────────────────────────────────────────────────────────────── */
const WHY_ITEMS = [
  { Icon: Flame, title: "Truly Handcrafted", description: "Every candle is hand-poured and finished by skilled artisans in our Kolkata studio — never mass-produced." },
  { Icon: Leaf,  title: "Thoughtful Ingredients", description: "We use safe, skin-friendly waxes and carefully sourced fragrance oils. No harsh chemicals, ever." },
  { Icon: Gift,  title: "Gift-Ready Always", description: "Every order is packed beautifully. Add a personalised note, choose your ribbon — we handle the rest." },
  { Icon: Truck, title: "Pan-India Delivery", description: "We ship carefully to every corner of India, with packaging designed to protect each delicate piece." },
];

function WhyAaloki() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--ivory)" }} aria-label="Why Aaloki">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "var(--gold)" }}>The Aaloki Difference</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Why customers choose us.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "var(--cream)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "var(--ivory)" }}>
                <Icon className="size-6" style={{ color: "var(--terracotta)" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   7. TESTIMONIALS
───────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  { name: "Priya Mehta",    city: "Mumbai",    rating: 5, product: "Kulfi Ice Cream",          quote: "The Kulfi candle is unlike anything I've seen — it looks exactly like the real thing and smells divine. Got so many compliments when I displayed it. Will definitely order again!" },
  { name: "Ananya Singh",   city: "Delhi",     rating: 5, product: "Meetha Utsav Mithai Box",  quote: "Ordered the Meetha Utsav gift set for Diwali and my family absolutely loved it. The packaging alone is worth every rupee — truly premium and so thoughtfully done." },
  { name: "Ritu Agarwal",   city: "Bengaluru", rating: 5, product: "Gulabi Reti Rose",         quote: "Gulabi Reti Rose is my current obsession. The scent is heavenly and lasts for hours. Aaloki's candles feel genuinely artisanal — you can tell someone made these with love." },
];

function Testimonials() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }} aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "var(--gold)" }}>Happy Customers</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Loved across India.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: "var(--ivory)" }}>
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B" }} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--sienna)", opacity: 0.82 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--sienna)" }}>{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
                <p className="text-[10px] font-medium px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: "var(--cream)", color: "var(--gold)" }}>
                  {t.product}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   8. WHATSAPP CTA BANNER
───────────────────────────────────────────────────────────────── */
function WhatsAppCTABanner() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, #B5532A 0%, #8B3B1A 50%, #5C1A00 100%)" }}
      aria-label="Order on WhatsApp"
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <Image src="/images/aaloki-logo.svg" alt="" width={420} height={420} className="opacity-[0.07]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "var(--gold)" }}>Direct Ordering</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-snug mb-4" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--ivory)" }}>
          Prefer to order on WhatsApp?
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "var(--ivory)", opacity: 0.75 }}>
          Tell us what you need, ask questions, customise your order — we&apos;re here to help you find the perfect piece.
        </p>
        <a
          href={WA_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp Us Now
        </a>
        <p className="mt-5 text-xs" style={{ color: "var(--ivory)", opacity: 0.5 }}>
          Typically responds within 2 hours · Mon – Sat, 10 am – 8 pm IST
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <RicchaStory />
      <GiftSetsPreview />
      <WhyAaloki />
      <Testimonials />
      <WhatsAppCTABanner />
    </>
  );
}
