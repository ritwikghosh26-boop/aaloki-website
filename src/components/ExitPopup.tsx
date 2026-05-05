"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const SESSION_KEY = "aaloki_exit_popup_seen";

type Phase = "idle" | "visible" | "success";

export function ExitPopup() {
  const [phase, setPhase] = useState<Phase>("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (phase !== "idle") return;
    setPhase("visible");
  }

  function dismiss() {
    setPhase("idle");
    sessionStorage.setItem(SESSION_KEY, "1");
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value.trim() ?? "";
    if (!email) return;
    console.log("[ExitPopup] email captured:", email);
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("success");
    timerRef.current = setTimeout(() => setPhase("idle"), 3000);
  }

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Desktop: mouse leaves through the top of the viewport
    function onMouseOut(e: MouseEvent) {
      if (e.clientY <= 0 && e.relatedTarget === null) show();
    }

    // Mobile / fallback: 40-second timer
    const fallback = setTimeout(show, 40_000);

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-focus email input when visible
  useEffect(() => {
    if (phase === "visible") {
      setTimeout(() => emailRef.current?.focus(), 50);
    }
  }, [phase]);

  // Cleanup on unmount
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (phase === "idle") return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(92, 26, 0, 0.45)", backdropFilter: "blur(4px)" }}
      onClick={dismiss}
    >
      {/* Modal — stop propagation so clicks inside don't dismiss */}
      <div
        className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: "var(--cream)" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-heading"
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full transition-colors"
          style={{ color: "var(--sienna)", backgroundColor: "var(--ivory)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9 0 0)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--ivory)")}
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Decorative top band */}
        <div
          className="h-2"
          style={{
            background:
              "linear-gradient(90deg, var(--terracotta), var(--mauve), var(--gold))",
          }}
        />

        <div className="px-8 pt-8 pb-9">
          {phase === "visible" && (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 select-none">🕯️</div>
                <p
                  className="text-xs font-semibold tracking-[0.28em] uppercase mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Before you go…
                </p>
                <h2
                  id="exit-popup-heading"
                  className="text-2xl sm:text-3xl leading-tight mb-3"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--sienna)",
                  }}
                >
                  Get 10% off your first Aaloki order
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0 0)" }}>
                  Join our community and receive an exclusive discount code — straight to your inbox.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-shadow"
                  style={{
                    backgroundColor: "var(--ivory)",
                    borderColor: "oklch(0.9 0 0)",
                    color: "var(--sienna)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow = "0 0 0 2px var(--terracotta)")
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity active:scale-[0.98]"
                  style={{ backgroundColor: "var(--terracotta)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Get 10% Off 🎁
                </button>
              </form>

              {/* Skip link */}
              <p className="text-center mt-4">
                <button
                  onClick={dismiss}
                  className="text-xs underline underline-offset-2 transition-opacity hover:opacity-70"
                  style={{ color: "oklch(0.55 0 0)" }}
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </p>
            </>
          )}

          {phase === "success" && (
            <div className="text-center py-6">
              <div className="text-5xl mb-4 select-none">✨</div>
              <h2
                className="text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--sienna)",
                }}
              >
                You&apos;re in!
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0 0)" }}>
                Check your inbox — your 10% off code is on its way. Happy shopping! 🕯️
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
