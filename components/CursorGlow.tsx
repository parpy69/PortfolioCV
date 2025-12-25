"use client";

import { useState, useEffect } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

  return (
    <div
      className="fixed pointer-events-none -z-10 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        transition: "transform 100ms ease-out, opacity 300ms ease-out",
      }}
    >
      <div className="w-[400px] h-[400px] bg-purple-600/60 rounded-full blur-3xl" />
    </div>
  );
}

