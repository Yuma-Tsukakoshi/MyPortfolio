"use client";

import {
  IconBook,
  IconBriefcase,
  IconCode,
  IconHome,
  IconMail,
  IconMenu2,
  IconMoon,
  IconSun,
  IconUser,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <IconHome size={24} /> },
    { href: "/about", label: "About", icon: <IconUser size={24} /> },
    { href: "/works", label: "Works", icon: <IconBriefcase size={24} /> },
    { href: "/research", label: "Research", icon: <IconBook size={24} /> },
    { href: "/contact", label: "Contact", icon: <IconMail size={24} /> },
  ];

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <IconCode className={styles.logoIcon} size={32} />
          <span>Yuma Tsukakoshi</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <button
            className={styles.themeToggle}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <IconSun size={24} /> : <IconMoon size={24} />}
          </button>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <IconMenu2 size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <IconSun size={24} />
              ) : (
                <IconMoon size={24} />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
