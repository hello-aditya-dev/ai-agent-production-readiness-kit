/**
 * Primary navigation items.
 * Anchor IDs match section ids on the landing page.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "What You Test", href: "#what-you-test" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Included", href: "#whats-included" },
  { label: "Editions", href: "#editions" },
  { label: "FAQ", href: "#faq" },
];
