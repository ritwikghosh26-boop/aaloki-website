"use client";

import { useState } from "react";
import { CreditCard, Loader2, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-context";
import { WA_NUMBER } from "@/lib/wa";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const FREE_SHIPPING_THRESHOLD = 999;

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    clearCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const [paying, setPaying] = useState(false);

  const whatsappUrl = () => {
    const lines = items
      .map(({ product, quantity }) =>
        "- " + product.name + " x" + quantity + " - Rs." + (product.price * quantity)
      )
      .join("\n");
    const msg =
      "Hi Aaloki! I would like to place an order:\n\n" +
      lines +
      "\n\nTotal: Rs." + totalPrice +
      "\n\nPlease confirm availability and share payment details.";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  };

  async function handlePayOnline() {
    setPaying(true);
    try {
      // 1. Load Razorpay checkout.js
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error("Payment failed. Please try ordering via WhatsApp instead.");
        return;
      }

      // 2. Create server-side order (prices validated on server)
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      if (!orderRes.ok) {
        const { error } = await orderRes.json() as { error: string };
        toast.error(error ?? "Payment failed. Please try ordering via WhatsApp instead.");
        return;
      }

      const { orderId, amount, currency, keyId } =
        await orderRes.json() as {
          orderId: string;
          amount: number;
          currency: string;
          keyId: string;
        };

      // 3. Open Razorpay modal
      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay({
          key: keyId,
          amount,
          currency,
          order_id: orderId,
          name: "Aaloki",
          description: "Handcrafted Home Décor",
          theme: { color: "#B5532A" },
          prefill: {},
          handler: async (response) => {
            // 4. Verify signature server-side
            try {
              const verifyRes = await fetch("/api/razorpay/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const result = await verifyRes.json() as { success: boolean; error?: string };

              if (result.success) {
                toast.success("Payment successful! We'll confirm via WhatsApp 🕯️");

                // Snapshot before clearCart wipes the state
                const cartItems = items
                  .map(({ product, quantity }) =>
                    "- " + product.name + " x" + quantity + " - Rs." + (product.price * quantity)
                  )
                  .join("\n");
                const total = totalPrice;
                const paymentId = response.razorpay_payment_id;

                clearCart();
                closeCart();

                setTimeout(() => {
                  const message =
                    "New Aaloki order received!\n\nItems:\n" +
                    cartItems +
                    "\n\nTotal: Rs." + total +
                    "\n\nPayment ID: " + paymentId +
                    "\n\nPlease contact customer to confirm delivery address.";
                  window.open(
                    "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message),
                    "_blank"
                  );
                }, 1500);

                resolve();
              } else {
                toast.error("Payment failed. Please try ordering via WhatsApp instead.");
                reject(new Error(result.error));
              }
            } catch {
              toast.error("Payment failed. Please try ordering via WhatsApp instead.");
              reject();
            }
          },
          modal: {
            ondismiss: () => resolve(),
          },
        });
        rzp.open();
      });
    } catch {
      toast.error("Payment failed. Please try ordering via WhatsApp instead.");
    } finally {
      setPaying(false);
    }
  }

  const gap = FREE_SHIPPING_THRESHOLD - totalPrice;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) closeCart(); }}>
      <SheetContent
        side="right"
        className="flex flex-col p-0 sm:max-w-md w-full"
        style={{ backgroundColor: "var(--cream)" }}
      >
        {/* Header */}
        <SheetHeader
          className="px-5 py-4 border-b"
          style={{ borderColor: "var(--ivory)" }}
        >
          <SheetTitle
            className="flex items-center gap-2 text-xl"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              color: "var(--sienna)",
            }}
          >
            <ShoppingBag className="size-5" style={{ color: "var(--terracotta)" }} />
            Your Cart
            {totalItems > 0 && (
              <span
                className="ml-auto text-xs font-normal"
                style={{ fontFamily: "inherit", color: "var(--gold)" }}
              >
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Free shipping progress */}
        {totalItems > 0 && gap > 0 && (
          <div
            className="px-5 py-2.5 text-xs text-center"
            style={{ backgroundColor: "var(--ivory)", color: "var(--sienna)" }}
          >
            Add{" "}
            <strong style={{ color: "var(--terracotta)" }}>₹{gap}</strong> more
            for free shipping
          </div>
        )}
        {totalItems > 0 && gap <= 0 && (
          <div
            className="px-5 py-2.5 text-xs text-center font-medium"
            style={{ backgroundColor: "#DCFCE7", color: "#166534" }}
          >
            🎉 You&apos;ve unlocked free shipping!
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
              <ShoppingBag
                className="size-14 opacity-20"
                style={{ color: "var(--sienna)" }}
              />
              <p
                className="text-lg"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--sienna)",
                  opacity: 0.6,
                }}
              >
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground">
                Add some candles to get started
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "var(--ivory)" }}
              >
                {/* Emoji thumbnail */}
                <div className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg shrink-0 bg-white/60">
                  {product.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium leading-snug line-clamp-2"
                    style={{ color: "var(--sienna)" }}
                  >
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    ₹{product.price} each
                  </p>

                  {/* Quantity stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-current"
                      style={{ color: "var(--sienna)" }}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span
                      className="text-sm font-semibold w-5 text-center tabular-nums"
                      style={{ color: "var(--sienna)" }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-current"
                      style={{ color: "var(--sienna)" }}
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3" />
                    </button>
                  </div>
                </div>

                {/* Line total + remove */}
                <div className="flex flex-col items-end justify-between shrink-0">
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-0.5"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{ color: "var(--sienna)" }}
                  >
                    ₹{product.price * quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <SheetFooter
            className="px-5 pt-4 pb-6 border-t space-y-3"
            style={{ borderColor: "var(--ivory)" }}
          >
            {/* Subtotal */}
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span
                className="text-xl font-semibold tabular-nums"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--sienna)",
                }}
              >
                ₹{totalPrice}
              </span>
            </div>

            {/* WhatsApp order */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                clearCart();
                closeCart();
                toast.success("Order sent via WhatsApp! Riccha will confirm shortly.");
              }}
              className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              style={{ backgroundColor: "#25D366" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1DAA53")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
            >
              {WA_ICON}
              Order via WhatsApp
            </a>

            {/* Pay online */}
            <Button
              variant="outline"
              disabled={paying}
              onClick={handlePayOnline}
              className="w-full py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{
                borderColor: "var(--terracotta)",
                color: paying ? "oklch(0.556 0 0)" : "var(--terracotta)",
              }}
              onMouseEnter={(e) => {
                if (!paying) {
                  e.currentTarget.style.backgroundColor = "var(--terracotta)";
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (!paying) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--terracotta)";
                }
              }}
            >
              {paying ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <CreditCard className="size-4" />
                  Pay Online
                </>
              )}
            </Button>

            <p className="text-[11px] text-center text-muted-foreground">
              Secure checkout · UPI · Cards · Net Banking
            </p>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
