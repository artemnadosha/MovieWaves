import { spacingGenerated } from "@/UI-kit/utils/spacingGenerated";

export const spacingPaddingMarginFunc = (arg: number | number[]) => {
  if (Array.isArray(arg)) {
    return arg.map((item) => spacingGenerated(item)).join(" ");
  }

  return spacingGenerated(arg);
};
