import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const themes = extendTheme({
  atlas: {
    colors: {
      primary: "#0c4cbc",
      secondary: "#144487",
      terciary: "#307BF4",
      left: "rgba(5, 67, 167, 0.79)",
      right: "rgba(6, 95, 239, 0.89)",
    },
    images: {
      src: "./images/zeek.png",
    },
  },
  optimism: {
    colors: {
      primary: "#ff0320",
      secondary: "red.800",
      terciary: "red.600",
      left: "#fc1821",
      right: "#DD343B",
    },
    images: {
      src: "./images/optimism.png",
    },
  },
  polygon: {
    colors: {
      primary: "#8247e5",
      secondary: "#612DB8",
      terciary: "#6D42E0",
      left: "#8247e5",
      right: "#7931f1",
    },
    images: {
      src: "./images/polygon.png",
    },
  },
  zksync: {
    colors: {
      primary: "#332483",
      secondary: "#2E246C",
      terciary: "#8C8DFC",
      left: "#211151",
      right: "#36288B",
    },
    images: {
      src: "./images/zksync.png",
    },
  },
  linea: {
    colors: {
      primary: "#d1d1d1",
      secondary: "#313131",
      terciary: "#a1a1a1",
      left: "#222",
      right: "#666",
    },
    images: {
      src: "./images/linea.png",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default themes;
