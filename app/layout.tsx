import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

import { FooterLinks } from "@/components/common/footer/FooterLinks";
import { Header } from "@/components/common/header";
import { ScrollProvider } from "@/context/ScrollContext";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily:
    "'Noto Sans JP', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'",
  colors: {
    blue: [
      "#e0f2fe",
      "#bae6fd",
      "#7dd3fc",
      "#38bdf8",
      "#0ea5e9",
      "#2563eb",
      "#1d4ed8",
      "#1e40af",
      "#1e3a8a",
      "#172554",
    ],
    cyan: [
      "#ecfeff",
      "#cffafe",
      "#a5f3fc",
      "#67e8f9",
      "#22d3ee",
      "#06b6d4",
      "#0891b2",
      "#0e7490",
      "#155e75",
      "#164e63",
    ],
  },
  headings: {
    fontFamily:
      "'Noto Sans JP', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'",
  },
});

export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <ScrollProvider>
            <Header />
            {children}
            <FooterLinks />
          </ScrollProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
