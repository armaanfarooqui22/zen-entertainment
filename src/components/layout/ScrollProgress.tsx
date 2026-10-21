"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cinema-gold via-cinema-magenta to-cinema-violet z-[100] origin-left shadow-[0_0_12px_rgba(232,176,74,0.6)]"
      style={{ scaleX }}
    />
  );
}
