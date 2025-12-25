"use client";

import { useState, useEffect, useRef } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, targetPosition.current.x, 0.15),
        y: lerp(prev.y, targetPosition.current.y, 0.15),
      }));

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: `${position.x - 75}px`,
        top: `${position.y - 75}px`,
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}

