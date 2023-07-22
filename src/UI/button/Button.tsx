import { ButtonProps } from "@/types";
import styled from "styled-components";
import { buttonConfig } from "@/theme";
import { separation } from "@/utils";
import IconBox from "../icon-box/IconBox.styled";
import { CSSProperties } from "react";

const Button = styled(
  ({
    variant,
    size,
    sx,
    color,
    radius,
    iconEnd,
    iconStart,
    children,
    ...rest
  }: ButtonProps) => {
    const IconStart = iconStart && <IconBox>{iconStart}</IconBox>;
    const IconEnd = iconEnd && <IconBox>{iconEnd}</IconBox>;

    return (
      <button {...rest}>
        {IconStart}
        {children}
        {IconEnd}
      </button>
    );
  }
)(({ variant, iconStart, iconEnd, size, radius, sx, color }) => {
  const buttonStyles = buttonConfig({});

  return {
    ...(buttonStyles.defaultStyles as {}),
    gap: iconEnd || iconStart ? "8px" : "",

    ...separation.variantButton({ variant: variant || "contained", color }),
    ...separation.sizeButton({ size }),
    borderRadius: radius?.toString() || buttonStyles.borderRadius,
    ...(sx as {}),
  };
});

export default Button;
