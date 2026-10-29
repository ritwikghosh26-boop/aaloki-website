"use client";

import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

/* ─── Shared easing ─── */
export const ease = [0.25, 0.46, 0.45, 0.94] as const;
export const easeSlow = [0.16, 1, 0.3, 1] as const;

/* ─── FadeUp — fade + slide up when entering viewport ─── */
export function FadeUp({
  children,
  delay = 0,
  duration = 1.15,
  y = 40,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: easeSlow }}
    >
      {children}
    </motion.div>
  );
}

/* ─── FadeIn — pure opacity reveal ─── */
export function FadeIn({
  children,
  delay = 0,
  duration = 1.2,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerReveal — stagger children on scroll ─── */
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.07,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerReveal({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ─── SlideIn — slide from left or right ─── */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });
  const x = direction === "left" ? -60 : 60;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 1.2, delay, ease: easeSlow }}
    >
      {children}
    </motion.div>
  );
}

/* ─── ParallaxSection — scroll-driven vertical parallax ─── */
export function ParallaxSection({
  children,
  speed = 0.15,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── ScaleReveal — zoom in from slightly smaller ─── */
export function ScaleReveal({
  children,
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
      transition={{ duration: 1.3, delay, ease: easeSlow }}
    >
      {children}
    </motion.div>
  );
}

/* ─── FloatingOrb — ambient deco element that floats ─── */
export function FloatingOrb({
  className,
  delay = 0,
  size = 320,
  color = "rgba(160,120,48,0.08)",
}: {
  className?: string;
  delay?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className ?? ""}`}
      style={{ width: size, height: size, background: color, filter: "blur(80px)" }}
      animate={{ y: [0, -24, 0], x: [0, 8, 0], scale: [1, 1.06, 1] }}
      transition={{
        duration: 7 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ─── PulseGlow — breathing glow for CTAs ─── */
export function PulseGlow({
  children,
  glowColor = "rgba(37,211,102,0.35)",
  className,
}: {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ boxShadow: [`0 4px 20px ${glowColor}`, `0 8px 40px ${glowColor}`, `0 4px 20px ${glowColor}`] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── HoverLift — card hover scale + shadow ─── */
export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Tilt3D — CSS perspective tilt on hover ─── */
export function Tilt3D({
  children,
  className,
  intensity = 10,
  scale = 1.03,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transform = `perspective(900px) rotateX(${-y * intensity * 0.5}deg) rotateY(${x * intensity}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
