import { Kanit } from "next/font/google";
import { TypographyConfigType } from "./typography.config.type";

export const fontConfig = Kanit({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["700", "600", "500", "400"],
  preload: true,
});

export const typographyConfig: TypographyConfigType = {
  h1: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1,
  },
  h2: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1,
  },
  h3: {
    fontSize: 30,
    fontWeight: 600,
    lineHeight: 1,
  },
  h4: {
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 1,
  },
  h5: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1,
  },
  h6: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1,
  },
  p: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1,
  },
};
