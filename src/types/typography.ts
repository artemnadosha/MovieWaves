import { HTMLAttributes, PropsWithChildren } from "react";
import { PaletteName } from "@/theme";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    PropsWithChildren {
  variant: "p" | HeadingVariant;
  component: "p" | HeadingVariant;
  color?: PaletteName;
}
