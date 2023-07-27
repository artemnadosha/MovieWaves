import { Montserrat } from "next/font/google";

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
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: 1,
    },
    h5: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: 1,
    },
    h6: {
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: 1,
    },
    p: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: 1,
    },
  },
};
