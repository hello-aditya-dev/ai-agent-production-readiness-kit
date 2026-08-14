"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle in-view reveal.
 *
 * Robustness contract:
 *  - Content is ALWAYS rendered at full opacity (opacity: 1).
 *    The animation only slides the element up ~14px on enter.
 *    This guarantees content is visible to crawlers, full-page
 *    screenshots, no-JS fallbacks, and any IntersectionObserver
 *    edge case — nothing is ever hidden behind a pending animation.
 *  - Honors `prefers-reduced-motion`: renders a plain wrapper with
 *    no transform at all.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as "div";
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 1, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
