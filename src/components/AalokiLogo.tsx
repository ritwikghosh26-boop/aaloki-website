import Image from "next/image";
import { cn } from "@/lib/utils";

interface AalokiLogoProps {
  /** px size for both width and height */
  size?: number;
  /** "color" = original, "ivory" = light/inverted for dark bgs, "watermark" = translucent */
  variant?: "color" | "ivory" | "watermark";
  className?: string;
  alt?: string;
}

const FILTER: Record<NonNullable<AalokiLogoProps["variant"]>, string | undefined> = {
  color: undefined,
  ivory: "brightness(0) invert(1) sepia(1) saturate(0.5) hue-rotate(5deg) brightness(1.1)",
  watermark: "brightness(0) invert(1) opacity(0.08)",
};

export function AalokiLogo({
  size = 48,
  variant = "color",
  className,
  alt = "Aaloki",
}: AalokiLogoProps) {
  return (
    <Image
      src="/aaloki-logo.png"
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain shrink-0", className)}
      style={FILTER[variant] ? { filter: FILTER[variant] } : undefined}
    />
  );
}
