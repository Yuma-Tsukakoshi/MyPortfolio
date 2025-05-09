import { MantineTheme, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  primaryColor: "blue",
  defaultRadius: "md",
  fontFamily: "Inter, sans-serif",
  components: {
    Paper: {
      defaultProps: {
        shadow: "sm",
        withBorder: true,
      },
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.white,
          backgroundImage: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        },
      }),
    },
    Button: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme: MantineTheme) => ({
        root: {
          "&:hover": {
            backgroundColor: theme.colors?.blue?.[1],
          },
        },
      }),
    },
    Card: {
      defaultProps: {
        shadow: "sm",
        withBorder: true,
      },
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.white,
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        },
      }),
    },
    Title: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: theme.colors.cyan[8],
          fontWeight: 700,
          background: "linear-gradient(90deg, #0288d1 0%, #01579b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }),
    },
    Text: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: theme.colors.gray[7],
        },
      }),
    },
  },
  colors: {
    brand: [
      "#E0F7FA",
      "#B2EBF2",
      "#80DEEA",
      "#4DD0E1",
      "#26C6DA",
      "#00BCD4",
      "#00ACC1",
      "#0097A7",
      "#00838F",
      "#006064",
    ],
  },
  other: {
    gradients: {
      primary: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)",
      secondary: "linear-gradient(135deg, #0288d1 0%, #01579b 100%)",
      accent: "linear-gradient(135deg, #80DEEA 0%, #4DD0E1 100%)",
    },
  },
};
