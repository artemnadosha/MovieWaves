import { ThemeType } from "@/UI-kit";

export const spacingGenerated = ({
  size,
  theme,
}: {
  size: number;
  theme: ThemeType;
}) => {
  return `${theme.unitSize.spacing * size}px`;
};
