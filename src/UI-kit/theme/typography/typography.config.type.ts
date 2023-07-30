import { CSSProperties } from "react";

export type TypographyVariantType = {
  fontSize: CSSProperties["fontSize"];
  fontWeight: CSSProperties["fontWeight"];
  lineHeight: CSSProperties["lineHeight"];
};

export type TypographyConfigType = {
  h1: TypographyVariantType;
  h2: TypographyVariantType;
  h3: TypographyVariantType;
  h4: TypographyVariantType;
  h5: TypographyVariantType;
  h6: TypographyVariantType;
  p: TypographyVariantType;
  label?: TypographyVariantType;
};
