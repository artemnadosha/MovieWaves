import styled from "styled-components";
import { TypographyProps } from "./Typography.type";
import { getColor } from "@/UI-kit/utils";
import { fontConfig, typographyConfig } from "@/UI-kit/theme";

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
    color:
      typeof separationColor === "object"
        ? separationColor.main
        : separationColor,
    ...stylesComponent,
  };
});

export default Typography;
