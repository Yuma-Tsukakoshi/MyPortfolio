import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

import { Header } from "@/components/common/header";
import { ScrollProvider } from "@/context/ScrollContext";

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
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <ScrollProvider>
            <Header />
            {children}
          </ScrollProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
