import { unitSizeConfig } from "@/UI-kit/theme/unit-size/unitSize.config";
import { ThemeType } from "@/UI-kit";

export const spacingGenerated = ({
  size,
  theme,
}: {
  size: number;
  theme: ThemeType;
}) => {
  return `${theme.unitSize.spacing * (size || 1)}px`;
};
