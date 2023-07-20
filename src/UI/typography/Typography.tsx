import styled from "styled-components";
import { TypographyProps } from "@/types";
import { getColor, spacingPaddingMarginFunc } from "@/utils";
import { fontConfig, typographyConfig } from "@/theme";

const Typography = styled(
  ({ component, variant, color, sx, children, ...rest }: TypographyProps) => {
    const Component = component || "p";

    return <Component {...rest}>{children}</Component>;
  }
)(({ variant, color, sx, component }) => {
  let stylesComponent = {};

  if (sx) {
    stylesComponent = sx;
  }
  const separationColor = getColor({ color });

  return {
    ...fontConfig.style,
    ...typographyConfig.variant[variant],
    ...stylesComponent,
    color:
      typeof separationColor === "object"
        ? separationColor.main
        : separationColor,
  };
});

export default Typography;
