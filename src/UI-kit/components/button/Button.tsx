import styled from "styled-components";
import { ButtonProps } from "./Button.type";
import { IconBox } from "@/UI-kit";
import { buttonConfig } from "@/UI-kit/theme";
import { separation } from "@/UI-kit/utils";

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
  return {
    ...(buttonConfig.defaultStyles as {}),
    gap: iconEnd || iconStart ? "8px" : "",

    ...separation.variantButton({ variant: variant || "contained", color }),
    ...separation.sizeButton({ size }),
    borderRadius: radius?.toString() || buttonConfig.borderRadius,
    ...(sx as {}),
  };
});

export default Button;
