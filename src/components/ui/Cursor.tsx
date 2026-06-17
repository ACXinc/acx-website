"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
      fixed
      w-4
      h-4
      rounded-full
      bg-blue-500
      pointer-events-none
      z-[9999]
      "
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
}