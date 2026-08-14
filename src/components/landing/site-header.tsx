"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { NAV_ITEMS } from "@/lib/site-config";
import { CtaButton } from "@/components/landing/cta-button";
import { useScrolled } from "@/components/landing/use-scrolled";

export function SiteHeader() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = React.useState(false);

  return (
    <header
      id="top"
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — Agency primary */}
        <div className="hidden items-center gap-2 md:flex">
          <CtaButton
            linkKey="agency"
            label="Get Agency — $299"
            variant="agency"
            size="sm"
            fallbackAnchor="#editions"
          />
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="min-h-[44px] min-w-[44px] rounded-md"
              >
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm">
              <SheetHeader className="px-5 pt-5">
                <SheetTitle asChild>
                  <span>
                    <Logo />
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav
                aria-label="Mobile primary"
                className="flex flex-col gap-1 px-5 pt-4"
              >
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-4 text-base font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[48px] flex items-center"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto px-5 pb-6 pt-4">
                <SheetClose asChild>
                  <CtaButton
                    linkKey="agency"
                    label="Get Agency Edition — $299"
                    variant="agency"
                    size="lg"
                    block
                    fallbackAnchor="#editions"
                  />
                </SheetClose>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Agency · $299 one-time · Standard $149 also available
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
