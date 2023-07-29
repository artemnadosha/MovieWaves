import { paletteDarkConfig, paletteLightConfig } from "./palette";
import { sizeConfig } from "./size";
import { unitSizeConfig } from "./unit-size";
import { fontConfig, typographyConfig } from "./typography";
import { ThemeType } from "@/UI-kit";

export const lightTheme: ThemeType = {
  palette: paletteLightConfig,
  size: sizeConfig,
  unitSize: unitSizeConfig,
  typography: typographyConfig,
  font: fontConfig,
};

export const darkTheme: ThemeType = {
  palette: paletteDarkConfig,
  size: sizeConfig,
  unitSize: unitSizeConfig,
  typography: typographyConfig,
  font: fontConfig,
};
