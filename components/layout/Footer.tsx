"use client";

import {
  IconBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconExternalLink,
  IconHome,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
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

  const quickLinks = [
    { href: "/", label: "Home", icon: <IconHome size={24} /> },
    { href: "/about", label: "About", icon: <IconUser size={24} /> },
    { href: "/works", label: "Works", icon: <IconBriefcase size={24} /> },
    { href: "/research", label: "Research", icon: <IconBook size={24} /> },
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
            <p className={styles.description}>
              慶應義塾大学 理工学研究科 開放環境科学専攻 修士1年。
              ソフトウェアエンジニアとして、Webアプリケーション開発に取り組んでいます。
              最新技術の習得と実践的なプロジェクトの遂行に情熱を持っています。
            </p>
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

          <div className={styles.links}>
            <h3 className={styles.linksTitle}>Quick Links</h3>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                <span className={styles.linkIcon}>{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>Contact</h3>
            <div className={styles.contactItem}>
              <IconMail className={styles.contactIcon} />
              <span>yuma.tsukakoshi@keio.jp</span>
            </div>
            <div className={styles.contactItem}>
              <IconPhone className={styles.contactIcon} />
              <span>+81 90-1234-5678</span>
            </div>
            <div className={styles.contactItem}>
              <IconMapPin className={styles.contactIcon} />
              <span>神奈川県横浜市</span>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {currentYear} Yuma Tsukakoshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
