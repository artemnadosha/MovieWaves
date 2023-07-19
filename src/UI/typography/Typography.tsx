import { fontConfig, typographyConfig } from "@/theme/typography.config";
import styled from "styled-components";
import { paletteConfig } from "@/theme";
import { TypographyProps } from "@/types";

const Typography = styled(
  ({ component, color, children, ...rest }: TypographyProps) => {
    const Component = component;

    return <Component {...rest}>{children}</Component>;
  }
)(({ variant, color }) => {
  return {
    ...fontConfig.style,
    ...typographyConfig.variant[variant],
    color:
      typeof color === "string" ? paletteConfig[color].contrastText : "inherit",
  };
});

export default Typography;
