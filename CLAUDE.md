# Aaloki Website — Claude Code Instructions

## Project Overview
E-commerce website for Aaloki — a premium handcrafted candle and home decor brand from Kolkata, India.
Founder: Riccha Ghosh. Co-strategist: Ritwik Ghosh.

## Tech Stack
- Framework: Next.js 15 (App Router, TypeScript, strict mode)
- Styling: Tailwind CSS v3 + shadcn/ui components
- Payments: Razorpay (Indian UPI, cards, net banking)
- Hosting: Vercel (free tier)
- Icons: lucide-react
- Forms: react-hook-form + zod

## Brand Colors (MUST use these — no deviation)
- Terracotta:  #B5532A  (primary actions, CTAs, badges)
- Sienna:      #5C1A00  (headings, dark backgrounds)
- Mauve:       #7B4F6E  (accent, taglines)
- Gold:        #A07830  (decorative, section labels)
- Ivory:       #F5EFE6  (backgrounds, cards)
- Cream:       #FAF6F0  (page background)

## Typography
- Display/Headings: Cormorant Garamond (serif, elegant)
- Bengali text: Noto Serif Bengali
- Body/UI: DM Sans (clean, readable)
- Code/mono: DM Mono

## Component Conventions
- Use shadcn/ui components as the base; customize with Aaloki brand colors via CSS variables
- All pages are Server Components by default; add "use client" only when needed
- Use named exports for all components
- TypeScript strict mode — no `any` types
- Keep components under 200 lines; extract sub-components when needed

## File Conventions
- Components: PascalCase.tsx (e.g., ProductCard.tsx)
- Utilities/data: camelCase.ts (e.g., products.ts)
- API routes: route.ts inside app/api/[endpoint]/
- Types: defined in src/types/index.ts or co-located

## Tailwind Rules
- Use CSS custom properties for brand colors: var(--terracotta), etc.
- Mobile-first (sm: md: lg: breakpoints)
- NO purple gradients, NO Inter font, NO generic AI aesthetics

## Business Context
- 27 product SKUs — data lives in src/lib/products.ts
- Price range: ₹149 – ₹1,099
- Target buyers: Indian women 24-42, gifting/home decor
- Primary CTA is always WhatsApp order (not just "Buy Now")
- Razorpay for online payments (Indian UPI focus)
- Pan-India delivery

## Key Rules
- NEVER remove the floating WhatsApp button
- EVERY product page needs a WhatsApp order CTA
- Trust badges (Handcrafted | Kolkata-Made | Safe Ingredients | Gift-Ready) on all product pages
- Free shipping threshold: ₹999
- Exit-intent popup: 10% off first order, email capture

## Environment Variables (from .env.local)
- RAZORPAY_KEY_ID — public key
- RAZORPAY_KEY_SECRET — secret key (server only)
- NEXT_PUBLIC_WHATSAPP_NUMBER — WhatsApp number for CTAs
- NEXT_PUBLIC_RAZORPAY_KEY_ID — client-side Razorpay key
