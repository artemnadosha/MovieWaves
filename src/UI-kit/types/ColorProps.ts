import { PaletteConfigType, PaletteName } from "@/UI-kit/theme";

export interface ColorNamesProps {
  color?: PaletteName;
}

export interface ColorKeysProps {
  color?: keyof PaletteConfigType;
}

export interface ColorBorderProps {
  borderColor?: PaletteName;
}
