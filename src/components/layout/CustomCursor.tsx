"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        const text = target.getAttribute("data-cursor") || "VIEW";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const interactive = (e.target as HTMLElement).closest("a, button, input, select, textarea");
        if (interactive) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-bebas tracking-wider"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        animate={{
          width: isHovered ? (cursorText ? 64 : 32) : 12,
          height: isHovered ? (cursorText ? 64 : 32) : 12,
          backgroundColor: cursorText ? "rgba(232, 176, 74, 0.95)" : isHovered ? "rgba(232, 176, 74, 0.3)" : "rgba(232, 176, 74, 1)",
          borderColor: isHovered ? "#E8B04A" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full border border-cinema-gold flex items-center justify-center shadow-[0_0_20px_rgba(232,176,74,0.4)] backdrop-blur-[2px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[#06060A] text-xs font-bold leading-none select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
