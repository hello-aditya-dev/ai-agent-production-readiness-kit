"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReleaseGate } from "@/components/product/release-gate";
import { TestLibraryTable } from "@/components/product/test-library-table";
import { ScorecardPanel } from "@/components/product/scorecard-panel";

/**
 * Layered hero visual. Stacks three product panels — Release Gate,
 * Test Library preview, and Scorecard — with slight rotation/offset
 * and a subtle shadow to imply depth.
 *
 * On mobile the panels stack vertically and offsets/rotations collapse
 * so the composition remains readable at 390px.
 */
export function HeroComposition({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[560px]",
        className,
      )}
      aria-label="Product preview: release gate, test library, and readiness scorecard"
      role="figure"
    >
      {/* Soft glow plate */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand-soft/40 blur-2xl"
      />

      <motion.div
        className="relative grid gap-4 sm:gap-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top: Release Gate (slightly rotated, offset left on sm+) */}
        <motion.div
          className="sm:-rotate-1 sm:translate-x-[-12px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <ReleaseGate compact />
        </motion.div>

        {/* Middle row: Scorecard + Test Library on lg, stacked below */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          <motion.div
            className="sm:rotate-[0.6deg] sm:translate-x-[10px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
          >
            <ScorecardPanel
              compact
              title="Readiness dimensions"
              subtitle="8 of 15 dimensions shown"
            />
          </motion.div>

          <motion.div
            className="sm:-rotate-[0.6deg]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
          >
            <TestLibraryTable limit={4} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
