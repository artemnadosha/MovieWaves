import { Montserrat } from "next/font/google";
import { unitSizeGenerated } from "@/theme/unit-size.config";

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
      fontSize: unitSizeGenerated(8),
      fontWeight: 700,
    },
    h2: {
      fontSize: unitSizeGenerated(7),
      fontWeight: 700,
    },
    h3: {
      fontSize: unitSizeGenerated(6),
      fontWeight: 600,
    },
    h4: {
      fontSize: unitSizeGenerated(5),
      fontWeight: 500,
    },
    h5: {
      fontSize: unitSizeGenerated(4),
      fontWeight: 500,
    },
    h6: {
      fontSize: unitSizeGenerated(3),
      fontWeight: 400,
    },
    p: {
      fontSize: unitSizeGenerated(2),
      fontWeight: 400,
    },
  },
};
