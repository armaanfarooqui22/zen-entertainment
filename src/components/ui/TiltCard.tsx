"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 12,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const xTilt = ((y - rect.height / 2) / (rect.height / 2)) * -tiltAmount;
    const yTilt = ((x - rect.width / 2) / (rect.width / 2)) * tiltAmount;

    setRotateX(xTilt);
    setRotateY(yTilt);
    setGlarePosition({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.4 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}

      {/* Dynamic Specular Sheen */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(232, 176, 74, 0.18) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
