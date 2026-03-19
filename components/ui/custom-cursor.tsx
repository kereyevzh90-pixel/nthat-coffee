"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0, y = 0;
    let currentX = 0, currentY = 0;
    let rafId: number;

    // ── MOUSE (desktop) ──
    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!isTouchDevice.current) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);

    // ── TOUCH (mobile) ──
    const onTouchStart = (e: TouchEvent) => {
      isTouchDevice.current = true;
      const t = e.touches[0];
      x = currentX = t.clientX;
      y = currentY = t.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      setVisible(true);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      x = currentX = t.clientX;
      y = currentY = t.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onTouchEnd = () => {
      setTimeout(() => setVisible(false), 400);
    };

    // ── ANIMATION LOOP (только для мыши) ──
    const animate = () => {
      if (!isTouchDevice.current) {
        currentX += (x - currentX) * 0.15;
        currentY += (y - currentY) * 0.15;
        cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
      style={{
        willChange: "transform",
        opacity: visible ? 1 : 0,
      }}
    >
      <span style={{ fontSize: "28px", lineHeight: 1, display: "block", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}>
        🧤
      </span>
    </div>
  );
}
