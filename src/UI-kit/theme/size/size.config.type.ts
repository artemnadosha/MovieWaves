import { TypographyVariantType } from "@/UI-kit/theme/typography";
import { CSSProperties } from "react";

type SizeVariantType = TypographyVariantType & {
  padding: CSSProperties["padding"];
};

export type SizeConfigType = {
  small: SizeVariantType;
  medium: SizeVariantType;
  large: SizeVariantType;
};
