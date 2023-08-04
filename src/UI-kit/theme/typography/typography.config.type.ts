export type TypographyVariantType = {
  fontSize: string | number;
  fontWeight: string | number;
  lineHeight: string | number;
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
