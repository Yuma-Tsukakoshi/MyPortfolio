import { useEffect, useState } from "react";

import { LoadingData, LoadingProps } from "@/types/loading";

import { LoadingPresentation } from "./presentation";

export const Loading = ({ onSkip }: LoadingProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onSkip();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onSkip]);

  if (!isVisible) return null;

  const data: LoadingData = {
    title: "Welcome to My Portfolio",
    subtitle: "ポートフォリオサイトへようこそ",
    loadingText: "読み込み中...",
    skipButtonText: "スキップ",
  };

  return <LoadingPresentation data={data} onSkip={onSkip} />;
};
