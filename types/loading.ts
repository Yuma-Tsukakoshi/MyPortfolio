export interface LoadingData {
  title: string;
  subtitle: string;
  loadingText: string;
  skipButtonText: string;
}

export interface LoadingProps {
  onSkip: () => void;
}
