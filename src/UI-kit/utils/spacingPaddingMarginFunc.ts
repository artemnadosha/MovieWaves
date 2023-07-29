import { spacingGenerated } from "@/UI-kit/utils/spacingGenerated";
import { ThemeType } from "@/UI-kit";

export const spacingPaddingMarginFunc = ({
  arg,
  theme,
}: {
  arg: number | number[];
  theme: ThemeType;
}) => {
  if (Array.isArray(arg)) {
    return arg.map((size) => spacingGenerated({ size, theme })).join(" ");
  }

  return spacingGenerated({ size: arg, theme });
};
