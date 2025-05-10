"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";

import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Yuma-Tsukakoshi",
      icon: <IconBrandGithub size={28} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yuma-tsukakoshi-741646314/",
      icon: <IconBrandLinkedin size={28} />,
    },
    {
      name: "Qiita",
      url: "https://qiita.com/yukkun",
      icon: <IconExternalLink size={28} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <IconCode className={styles.logoIcon} size={32} />
              <span>Yuma Tsukakoshi</span>
            </Link>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.copyright}>
            © {currentYear} Yuma Tsukakoshi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
