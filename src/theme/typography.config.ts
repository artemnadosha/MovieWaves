import { Montserrat } from "next/font/google";
import { spacingGenerated } from "@/utils";

export const fontConfig = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["700", "600", "500", "400"],
  preload: true,
});

export const typographyConfig = {
  variant: {
    h1: {
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: 1,
    },
    h4: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: 1,
    },
    h5: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: 1,
    },
    h6: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1,
    },
    p: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1,
    },
  },
};
