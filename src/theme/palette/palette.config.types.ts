export type PaletteType = {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
};

export type PaletteConfigTypes = {
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
  | keyof PaletteConfigTypes
  | `${keyof PaletteConfigTypes}.${keyof PaletteType}`;
