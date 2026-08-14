"use client";

import * as React from "react";

/**
 * Tiny scroll-aware hook for the site header. Returns `true` once the
 * page has been scrolled past `threshold` pixels (default 8). Used to
 * add a subtle border + backdrop blur to the header when scrolled.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
