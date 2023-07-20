import styled from "styled-components";
import { TypographyProps } from "@/types";
import { getColor, spacingPaddingMarginFunc } from "@/utils";
import { fontConfig, typographyConfig } from "@/theme";

const Typography = styled(
  ({
    component,
    color,
    sx,
    padding,
    margin,
    children,
    ...rest
  }: TypographyProps) => {
    const Component = component || "p";

    return <Component {...rest}>{children}</Component>;
  }
)(({ variant, color, sx, padding, margin, component }) => {
  let stylesComponent = {};

  if (sx) {
    stylesComponent = sx;
  }
  const separationColor = getColor({ color });

  return {
    ...fontConfig.style,
    ...typographyConfig.variant[variant],
    ...stylesComponent,
    padding: padding && spacingPaddingMarginFunc(padding),
    margin: margin && spacingPaddingMarginFunc(margin),
    color:
      typeof separationColor === "object"
        ? separationColor.main
        : separationColor,
  };
});

export default Typography;
