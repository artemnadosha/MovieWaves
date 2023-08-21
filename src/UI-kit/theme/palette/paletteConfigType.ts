export type PaletteType = {
  main: string;
  dark: string;
  light: string;
  additional: string;
  contrastText: string;
  additionalText: string;
  disabled: string;
};

export type PaletteConfigType = {
  primary: PaletteType;
  secondary: PaletteType;
  text: PaletteType;
  background: PaletteType;
  border: PaletteType;
  success: PaletteType;
  warning: PaletteType;
  error: PaletteType;
};

export type PaletteName =
  | keyof PaletteConfigType
  | `${keyof PaletteConfigType}.${keyof PaletteType}`;
