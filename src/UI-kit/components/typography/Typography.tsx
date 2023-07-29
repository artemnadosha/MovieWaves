import styled from "styled-components";
import { TypographyProps } from "./Typography.type";
import { getColor } from "@/UI-kit/utils";

const Typography = styled(
  ({ component, variant, color, sx, children, ...rest }: TypographyProps) => {
    const Component = component || "p";

    return <Component {...rest}>{children}</Component>;
  }
)(({ variant, color, sx, theme }) => {
  const separationColor = getColor({ color, theme });

  return {
    ...theme.font.style,
    ...(theme.typography[variant] as {}),
    color:
      typeof separationColor === "object"
        ? separationColor.main
        : separationColor,
    ...(sx as {}),
  };
});

export default Typography;
