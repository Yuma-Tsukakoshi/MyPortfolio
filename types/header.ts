export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: {
    text: string;
    href: string;
  };
  navItems: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}
