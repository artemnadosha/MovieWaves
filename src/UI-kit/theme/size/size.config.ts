import { typographyConfig } from "@/UI-kit/theme";
import { SizeConfigType } from "./size.config.type";

export const sizeConfig: SizeConfigType = {
  small: {
    ...typographyConfig.p,
    padding: "10px",
  },
  medium: {
    ...typographyConfig.h6,
    padding: "16px",
  },
  large: {
    ...typographyConfig.h5,
    padding: "22px",
  },
};
