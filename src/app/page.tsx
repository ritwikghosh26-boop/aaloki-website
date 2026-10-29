import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gift, Flame, Home, Bell, Flower2, Cake } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { waUrl } from "@/lib/wa";
import { HeroAnimated } from "@/components/HeroAnimated";
import {
  FadeUp,
  StaggerReveal,
  StaggerItem,
  SlideIn,
  PulseGlow,
  Tilt3D,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "Aaloki — Handcrafted Candles & Home Décor from Kolkata",
  description:
    "Shop premium handcrafted candles, sachets, and home décor from Kolkata. Gift-ready packaging, pan-India delivery. Order on WhatsApp.",
};

const WA_ORDER_URL = waUrl(
  "Hi Aaloki! I found you on your website and would like to browse your collection 🕯️"
);

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   2. MARQUEE STRIP
───────────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Wax Melt Bouquets", "Floating Candles", "Gel Candles",
  "Birthday Candles", "Gifting Sets", "Rakhi Specials",
  "Custom Orders", "Pan-India Delivery",
];

function TrustBar() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="overflow-hidden py-3.5 border-y relative"
      style={{ backgroundColor: "var(--sienna)", borderColor: "rgba(160,120,48,0.3)" }}
      aria-label="Product categories"
    >
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-7 text-[10px] font-bold shrink-0 uppercase tracking-[0.32em]"
            style={{ color: "var(--gold)" }}
          >
            <span aria-hidden="true" className="text-[8px] opacity-60">✦</span>
            <span style={{ color: "rgba(245,239,230,0.85)" }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   2b. OCCASIONS STRIP
───────────────────────────────────────────────────────────────── */
const OCCASIONS = [
  { Icon: Gift, label: "Gifting" },
  { Icon: Flame, label: "Festive" },
  { Icon: Cake, label: "Birthday" },
  { Icon: Bell, label: "Weddings" },
  { Icon: Home, label: "Home Décor" },
  { Icon: Flower2, label: "Spiritual" },
];

function OccasionsStrip() {
  return (
    <section
      className="py-16 border-y"
      style={{ backgroundColor: "var(--ivory)", borderColor: "rgba(160,120,48,0.1)" }}
      aria-label="Shop by occasion"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-3 label-with-lines" style={{ color: "var(--gold)" }}>Browse By</p>
          <h2
            className="text-3xl sm:text-4xl heading-ornament"
            style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}
          >
            Made for Every Occasion
          </h2>
        </FadeUp>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar justify-start lg:justify-center">
          {OCCASIONS.map(({ Icon, label }) => (
            <Link
              key={label}
              href="/shop"
              className="flex-shrink-0 w-[140px] h-[180px] rounded-xl flex flex-col items-center justify-center gap-4 transition-all group occasion-card"
            >
              <Icon
                className="size-8 transition-transform group-hover:scale-110 transition-colors duration-200"
                strokeWidth={1.5}
              />
              <span className="text-[11px] font-bold uppercase tracking-widest transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   3. FEATURED PRODUCTS
───────────────────────────────────────────────────────────────── */
const FEATURED_IDS = ["STM-002", "GFT-001", "DEC-002", "DEC-007", "SAC-001", "NOV-004"];

function FeaturedProducts() {
  const productMap = new Map(products.map((p) => [p.id, p]));
  const featured = FEATURED_IDS
    .map((id) => productMap.get(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--cream)" }} aria-label="Featured products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[10px] font-bold tracking-[0.38em] uppercase mb-3 label-with-lines" style={{ color: "var(--gold)" }}>Best Sellers</p>
          <h2 className="text-4xl sm:text-5xl heading-ornament" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Every piece, made by hand.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Hand-poured in small batches, finished individually, and shipped with care from our Kolkata studio.
          </p>
        </FadeUp>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-terracotta text-terracotta text-sm font-semibold transition-all duration-200 hover:bg-terracotta hover:text-ivory hover:border-terracotta"
          >
            View All 27 Products <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   3b. BRAND STORY BLOCKQUOTE BANNER
───────────────────────────────────────────────────────────────── */
function StoryBanner() {
  return (
    <div
      className="py-16 text-center grain-bg"
      style={{ backgroundColor: "var(--ivory)", borderTop: "1px solid rgba(160,120,48,0.12)", borderBottom: "1px solid rgba(160,120,48,0.12)" }}
    >
      <div className="max-w-3xl mx-auto px-6 relative">
        {/* Decorative large quotation mark */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(5rem, 10vw, 8rem)",
            color: "var(--gold)",
            opacity: 0.1,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <p
          className="text-2xl sm:text-[1.85rem] italic leading-relaxed relative z-10"
          style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)", opacity: 0.72 }}
        >
          Every candle carries a prayer. Every fragrance, a memory.
        </p>
        <p
          className="mt-4 text-[11px] font-semibold tracking-[0.28em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          — Riccha Ghosh, Founder
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   4. RICCHA'S STORY
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
      <circle cx="160" cy="160" r="155" fill="#F5EFE6" stroke="#A07830" strokeWidth="1.5" strokeDasharray="4 7" />
      <circle cx="160" cy="160" r="138" fill="url(#diyaBg)" />
      <circle cx="160" cy="160" r="138" fill="none" stroke="#A07830" strokeWidth="0.6" strokeOpacity="0.4" />
      <circle cx="160" cy="5"   r="4.5" fill="#A07830" />
      <circle cx="315" cy="160" r="4.5" fill="#A07830" />
      <circle cx="160" cy="315" r="4.5" fill="#A07830" />
      <circle cx="5"   cy="160" r="4.5" fill="#A07830" />
      <circle cx="267" cy="53"  r="3" fill="#A07830" opacity="0.5" />
      <circle cx="267" cy="267" r="3" fill="#A07830" opacity="0.5" />
      <circle cx="53"  cy="267" r="3" fill="#A07830" opacity="0.5" />
      <circle cx="53"  cy="53"  r="3" fill="#A07830" opacity="0.5" />
      <ellipse cx="160" cy="118" rx="14" ry="22" fill="#FF9900" opacity="0.14" filter="url(#diyaGlow)" />
      <path d="M160,82 C153,98 147,114 149,130 C151,144 160,152 160,152 C160,152 169,144 171,130 C173,114 167,98 160,82Z" fill="url(#diyaFlame)" />
      <path d="M160,100 C157,110 155,120 157,130 C158,138 160,141 160,141 C160,141 162,138 163,130 C165,120 163,110 160,100Z" fill="#FFE566" opacity="0.55" />
      <rect x="159" y="152" width="2" height="14" rx="1" fill="#5C1A00" />
      <path d="M128,174 C126,174 124,179 126,187 C131,202 144,210 160,210 C176,210 189,202 194,187 C196,179 194,174 192,174Z" fill="#B5532A" />
      <ellipse cx="160" cy="174" rx="32" ry="9" fill="#A07830" />
      <ellipse cx="160" cy="174" rx="18" ry="5" fill="#FAF6F0" opacity="0.5" />
      <path d="M108,158 C100,143 110,130 121,136 C115,147 113,154 108,158Z" fill="#A07830" opacity="0.38" />
      <path d="M114,152 C106,140 113,128 124,132 C118,143 117,149 114,152Z" fill="#7B4F6E" opacity="0.22" />
      <path d="M212,158 C220,143 210,130 199,136 C205,147 207,154 212,158Z" fill="#A07830" opacity="0.38" />
      <path d="M206,152 C214,140 207,128 196,132 C202,143 203,149 206,152Z" fill="#7B4F6E" opacity="0.22" />
      <circle cx="118" cy="138" r="2.5" fill="#A07830" opacity="0.3" />
      <circle cx="202" cy="138" r="2.5" fill="#A07830" opacity="0.3" />
      <circle cx="108" cy="175" r="2"   fill="#7B4F6E" opacity="0.25" />
      <circle cx="212" cy="175" r="2"   fill="#7B4F6E" opacity="0.25" />
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
          <SlideIn direction="left" className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <DiyaIllustration />
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15} className="max-w-lg order-1 lg:order-2">
            <p className="text-[10px] font-bold tracking-[0.38em] uppercase mb-4 label-with-lines heading-ornament-left" style={{ color: "var(--gold)" }}>Our Story</p>
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
          </SlideIn>
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
        <FadeUp className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[10px] font-bold tracking-[0.38em] uppercase mb-3 label-with-lines" style={{ color: "var(--gold)" }}>Gift With Intention</p>
          <h2 className="text-4xl sm:text-5xl heading-ornament" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Give the gift of light.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Curated sets for every occasion — birthdays, Diwali, housewarmings, and everything in between.
          </p>
        </FadeUp>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GIFT_TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <Tilt3D className="h-full" intensity={8}>
                <div
                  className="relative flex flex-col rounded-2xl overflow-hidden h-full"
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
                      {tier.unit ? (
                        <span className="text-sm" style={{ color: tier.featured ? "rgba(245,239,230,0.55)" : "var(--muted-foreground)" }}>{tier.unit}</span>
                      ) : null}
                    </div>
                    <a
                      href={waUrl(`Hi! I'm interested in the "${tier.name}" gift set (${tier.price}). Please share more details 🎁`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 bg-[#25D366] hover:bg-transparent hover:text-[#25D366] border border-[#25D366]"
                    >
                      <WhatsAppIcon className="size-4" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </Tilt3D>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   6. WHY AALOKI
───────────────────────────────────────────────────────────────── */
const WHY_ITEMS = [
  { num: "01", title: "Pure Ingredients", description: "100% natural soy and beeswax with lead-free cotton wicks for a clean, non-toxic burn the whole family can enjoy." },
  { num: "02", title: "Handcrafted in Kolkata", description: "Each candle is poured in small batches at our local studio, ensuring artisan quality in every single piece." },
  { num: "03", title: "Gift-Ready Packaging", description: "Wrapped in ivory parchment and gold-foiled boxes — every piece is already a complete gifting experience." },
  { num: "04", title: "Safe for Families", description: "Phthalate-free fragrances that are gentle enough for children and pets, so you can burn with complete peace of mind." },
];

function WhyAaloki() {
  return (
    <section
      className="py-20 lg:py-28 border-y"
      style={{ backgroundColor: "var(--ivory)", borderColor: "rgba(160,120,48,0.1)" }}
      aria-label="Why Aaloki"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-3 label-with-lines" style={{ color: "var(--gold)" }}>The Aaloki Difference</p>
          <h2 className="text-4xl sm:text-5xl heading-ornament" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Why customers choose us.
          </h2>
        </FadeUp>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {WHY_ITEMS.map(({ num, title, description }) => (
            <StaggerItem key={num}>
              <div className="space-y-5">
                <span
                  className="block italic leading-none"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: "var(--gold)",
                    opacity: 0.28,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {num}
                </span>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sienna)", opacity: 0.6 }}>
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
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
        <FadeUp className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[10px] font-bold tracking-[0.38em] uppercase mb-3 label-with-lines" style={{ color: "var(--gold)" }}>Happy Customers</p>
          <h2 className="text-4xl sm:text-5xl heading-ornament" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}>
            Loved across India.
          </h2>
        </FadeUp>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <Tilt3D className="h-full" intensity={8}>
                <blockquote className="flex flex-col p-6 rounded-2xl h-full card-top-accent" style={{ backgroundColor: "var(--ivory)", boxShadow: "0 2px 12px rgba(92,26,0,0.05)" }}>
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
              </Tilt3D>
            </StaggerItem>
          ))}
        </StaggerReveal>
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
      className="relative overflow-hidden py-20 lg:py-24 grain-bg"
      style={{ background: "linear-gradient(135deg, #B5532A 0%, #8B3B1A 50%, #5C1A00 100%)" }}
      aria-label="Order on WhatsApp"
    >
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <Image src="/images/aaloki-logo.svg" alt="" width={420} height={420} className="opacity-[0.07]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "var(--gold)" }}>Direct Ordering</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-snug mb-4" style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--ivory)" }}>
            Prefer to order on WhatsApp?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "var(--ivory)", opacity: 0.75 }}>
            Tell us what you need, ask questions, customise your order — we&apos;re here to help you find the perfect piece.
          </p>
          <PulseGlow glowColor="rgba(37,211,102,0.4)" className="inline-block rounded-full">
            <a
              href={WA_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Us Now
            </a>
          </PulseGlow>
          <p className="mt-5 text-xs" style={{ color: "var(--ivory)", opacity: 0.5 }}>
            Typically responds within 2 hours · Mon – Sat, 10 am – 8 pm IST
          </p>
        </FadeUp>
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
      <HeroAnimated />
      <TrustBar />
      <FeaturedProducts />
      <OccasionsStrip />
      <StoryBanner />
      <RicchaStory />
      <GiftSetsPreview />
      <WhyAaloki />
      <Testimonials />
      <WhatsAppCTABanner />
    </>
  );
}
