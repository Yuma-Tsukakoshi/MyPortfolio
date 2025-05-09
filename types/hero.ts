export interface CatchPhraseProps {
  onAnimationComplete: () => void;
}

export interface LoadingCircleProps {
  delay: number;
}

export interface CatchPhraseContentProps {
  onSkip: () => void;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}
