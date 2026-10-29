"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { waUrl } from "@/lib/wa";

const WA_URL = waUrl(
  "Hi Aaloki! I found you on your website and would like to browse your collection 🕯️"
);

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

const DOT_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function HeroCircle() {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Outer decorative ring (dashed) */}
      <div
        className="absolute -inset-6 rounded-full pointer-events-none"
        style={{
          border: "1px dashed rgba(160,120,48,0.22)",
          animation: "spin-slow 60s linear infinite",
        }}
      />
      {/* Corner dots on outer ring */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            backgroundColor: "var(--gold)",
            opacity: 0.45,
            top: "50%",
            left: "50%",
            transformOrigin: "0 0",
            transform: `rotate(${deg}deg) translateX(222px) translateY(-4px)`,
          }}
        />
      ))}
      {/* Gold gradient ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, var(--gold) 0%, rgba(245,239,230,0.8) 50%, var(--terracotta) 100%)",
          padding: "5px",
          boxShadow: "0 0 40px rgba(160,120,48,0.18), inset 0 0 20px rgba(160,120,48,0.08)",
        }}
      >
        {/* Inner ring accent */}
        <div
          className="absolute inset-[3px] rounded-full pointer-events-none z-10"
          style={{ border: "1px solid rgba(160,120,48,0.25)" }}
        />
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--ivory)" }}
        >
          {/* Product hero image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bouquet.webp"
            alt="Aaloki wax floral bouquet — handcrafted rose candles"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      </div>

      {/* Floating badge top-left */}
      <motion.div
        className="absolute -top-2 -left-5 px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
        style={{
          backgroundColor: "var(--sienna)",
          color: "var(--ivory)",
          boxShadow: "0 4px 20px rgba(92,26,0,0.3), 0 1px 0 rgba(255,255,255,0.1) inset",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ color: "var(--gold)" }}>✦</span> Handcrafted
      </motion.div>

      {/* Floating badge bottom-right */}
      <motion.div
        className="absolute -bottom-2 -right-5 px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
        style={{
          backgroundColor: "var(--terracotta)",
          color: "var(--ivory)",
          boxShadow: "0 4px 20px rgba(181,83,42,0.35), 0 1px 0 rgba(255,255,255,0.1) inset",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span style={{ color: "#ffd599" }}>✦</span> Kolkata-Made
      </motion.div>

      {/* Floating product count badge */}
      <motion.div
        className="absolute -bottom-3 left-6 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em]"
        style={{
          backgroundColor: "var(--gold)",
          color: "var(--sienna)",
          boxShadow: "0 4px 16px rgba(160,120,48,0.35)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        27 Unique SKUs
      </motion.div>
    </div>
  );
}

const MANDALA_BG = `url("data:image/svg+xml,%3Csvg width='520' height='520' viewBox='0 0 520 520' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23A07830' stroke-opacity='0.07'%3E%3Ccircle cx='260' cy='260' r='240' stroke-width='1'/%3E%3Ccircle cx='260' cy='260' r='200' stroke-width='0.8'/%3E%3Ccircle cx='260' cy='260' r='160' stroke-width='0.8'/%3E%3Ccircle cx='260' cy='260' r='120' stroke-width='0.6'/%3E%3Ccircle cx='260' cy='260' r='80' stroke-width='0.6'/%3E%3Cline x1='260' y1='20' x2='260' y2='500' stroke-width='0.5'/%3E%3Cline x1='20' y1='260' x2='500' y2='260' stroke-width='0.5'/%3E%3Cline x1='90' y1='90' x2='430' y2='430' stroke-width='0.5'/%3E%3Cline x1='430' y1='90' x2='90' y2='430' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`;

const stagger = 0.1;

export function HeroAnimated() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden grain-bg"
      style={{ minHeight: "calc(100vh - 4rem)", backgroundColor: "var(--cream)" }}
      aria-label="Hero"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-[60vw] h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 20% 20%, rgba(160,120,48,0.13) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(181,83,42,0.09) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Additional warm center glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[40vw] h-[40vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,220,180,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: contentY, opacity: contentOpacity, minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 py-20 lg:py-24 min-h-[calc(100vh-4rem)]">

          {/* Left: text */}
          <div className="w-full lg:w-[55%] relative">
            <div
              className="absolute inset-0 hidden lg:block pointer-events-none"
              style={{
                backgroundImage: MANDALA_BG,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left -80px",
                backgroundSize: "520px 520px",
              }}
              aria-hidden="true"
            />
            <div className="relative space-y-8">
              <motion.p
                className="text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ color: "var(--gold)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.05, ease }}
              >
                ✦ Handcrafted in Kolkata
              </motion.p>

              <motion.h1
                className="text-[clamp(3.5rem,8vw,6rem)] leading-[1.04] tracking-tight"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--sienna)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.05 + stagger, ease }}
              >
                Light.<br />
                Scent.<br />
                <em className="not-italic" style={{ color: "var(--terracotta)" }}>Memory.</em>
              </motion.h1>

              <motion.p
                className="text-lg font-medium tracking-wide max-w-md"
                style={{ color: "var(--mauve)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.05 + stagger * 2, ease }}
              >
                Handcrafted candles &amp; wax florals from Kolkata.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.05 + stagger * 3, ease }}
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/shop"
                    className="inline-flex items-center px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-ivory bg-terracotta border border-terracotta transition-all duration-200 hover:bg-transparent hover:text-terracotta"
                    style={{ boxShadow: "0 4px 20px rgba(181,83,42,0.30)" }}
                  >
                    Explore Collection
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-sienna text-sienna bg-transparent transition-all duration-200 hover:bg-sienna hover:text-ivory"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    Order on WhatsApp
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.05 + stagger * 4 }}
              >
                {["Handcrafted", "Kolkata-Made", "Safe Ingredients", "Gift-Ready"].map((badge, i) => (
                  <span key={badge} className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--sienna)", opacity: 0.6 }}>
                    {i > 0 && <span className="w-px h-3 inline-block" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />}
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: decorative circle */}
          <motion.div
            className="hidden lg:flex w-full lg:w-[45%] justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease }}
            aria-hidden="true"
          >
            <HeroCircle />
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--cream), transparent)" }}
        aria-hidden="true"
      />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{ backgroundColor: "var(--gold)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>scroll</span>
      </motion.div>
    </section>
  );
}
