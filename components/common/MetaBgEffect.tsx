"use client";
import { useEffect } from "react";

export const MetaBgEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 角度は100〜320degで大きく変化
      const angle = 100 + (scrollY / 800) * 220;
      // 色の変化幅を大きく
      const fromBase = [224, 242, 254]; // #e0f2fe（淡い青）
      const fromTo = [37, 99, 235]; // #2563eb（濃い青）
      const toBase = [207, 250, 254]; // #cffafe（淡いシアン）
      const toTo = [6, 182, 212]; // #06b6d4（濃いシアン）
      const t = Math.min(scrollY / 1000, 1);
      const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
      const from = `rgb(${lerp(fromBase[0], fromTo[0])},${lerp(fromBase[1], fromTo[1])},${lerp(fromBase[2], fromTo[2])})`;
      const to = `rgb(${lerp(toBase[0], toTo[0])},${lerp(toBase[1], toTo[1])},${lerp(toBase[2], toTo[2])})`;
      document.body.style.setProperty("--meta-gradient-angle", `${angle}deg`);
      document.body.style.setProperty("--meta-gradient-from", from);
      document.body.style.setProperty("--meta-gradient-to", to);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
};
