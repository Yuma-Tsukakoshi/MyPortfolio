import { useEffect, useState } from "react";

import { ScrollToTopData } from "@/types/scrollToTop";

import { ScrollToTopPresentation } from "./presentation";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const data: ScrollToTopData = {
    buttonText: "トップに戻る",
    threshold: 300,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > data.threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.threshold]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopPresentation
      data={data}
      isVisible={isVisible}
      onClick={handleClick}
    />
  );
};
