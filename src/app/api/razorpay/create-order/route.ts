import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getProductBySlug } from "@/lib/products";
import type { CartItem } from "@/lib/cart-context";

export async function POST(req: NextRequest) {
  // Instantiate inside the handler so build-time page collection never touches it
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID ?? "",
    key_secret: process.env.RAZORPAY_KEY_SECRET ?? "",
  });
  try {
    const body = await req.json() as { items: CartItem[] };
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Server-side price validation — reject any tampered amounts
    let totalPaise = 0;
    for (const { product, quantity } of items) {
      const canonical = getProductBySlug(product.slug);
      if (!canonical) {
        return NextResponse.json(
          { error: `Unknown product: ${product.slug}` },
          { status: 400 }
        );
      }
      if (canonical.price !== product.price) {
        return NextResponse.json(
          { error: `Price mismatch for ${product.name}` },
          { status: 400 }
        );
      }
      if (typeof quantity !== "number" || quantity < 1 || quantity > 100) {
        return NextResponse.json(
          { error: `Invalid quantity for ${product.name}` },
          { status: 400 }
        );
      }
      totalPaise += canonical.price * quantity * 100;
    }

    const order = await razorpay.orders.create({
      amount: totalPaise,
      currency: "INR",
      receipt: `aaloki_${Date.now()}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("[create-order]", err);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
