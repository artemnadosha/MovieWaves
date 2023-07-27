import { unitSizeConfig } from "@/UI-kit/theme/unit-size.config";

export const spacingGenerated = (size: number) => {
  return `${unitSizeConfig.spacing * (size || 1)}px`;
};
