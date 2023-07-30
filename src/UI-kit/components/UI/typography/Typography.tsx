import styled from "styled-components";
import { TypographyProps } from "./Typography.type";
import { getColor, spacingPaddingMarginFunc } from "@/UI-kit/utils";

const Typography = styled(
  ({
    component,
    variant,
    color,
    sx,
    spacingPadding,
    spacingMargin,
    children,
    ...rest
  }: TypographyProps) => {
    const Component = component || "p";

    return <Component {...rest}>{children}</Component>;
  }
)(({ variant, color, sx, spacingPadding, spacingMargin, theme }) => {
  const separationColor = getColor({ color, theme });

  return {
    ...theme.font.style,
    ...(theme.typography[variant || "p"] as {}),
    padding:
      spacingPadding &&
      spacingPaddingMarginFunc({ arg: spacingPadding, theme }),
    margin:
      spacingMargin && spacingPaddingMarginFunc({ arg: spacingMargin, theme }),
    color:
      typeof separationColor === "object"
        ? separationColor.main
        : separationColor,
    ...(sx as {}),
  };
});

export default Typography;
