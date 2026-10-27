export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Explore Conveyor", href: "#conveyor" },
  { label: "Our Story", href: "#story" },
  { label: "The Collection", href: "#collection" },
  { label: "Flavor Stories", href: "#flavors" },
  { label: "The Craft", href: "#craft" },
  { label: "Cake Box", href: "#box-builder", badge: "Interactive" },
  { label: "Visit Us", href: "#visit" },
];
