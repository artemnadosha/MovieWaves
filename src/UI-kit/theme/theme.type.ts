import { PaletteConfigType } from "./palette";
import { UnitSizeConfigType } from "./unit-size";
import { TypographyConfigType } from "./typography";
import { SizeConfigType } from "./size";
import { NextFont } from "next/dist/compiled/@next/font";

export type ThemeType = {
  palette: PaletteConfigType;
  size: SizeConfigType;
  unitSize: UnitSizeConfigType;
  typography: TypographyConfigType;
  font: NextFont;
};
