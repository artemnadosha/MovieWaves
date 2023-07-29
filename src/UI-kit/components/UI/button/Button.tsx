import styled from "styled-components";
import { ButtonProps } from "./Button.type";
import { IconBox } from "@/UI-kit";
import { separation } from "@/UI-kit/utils";
import { buttonColorConfig, buttonConfig } from "@/UI-kit/components/utils";

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
)(({ variant, iconStart, iconEnd, size, radius, sx, color, theme }) => {
  return {
    ...(buttonConfig as {}),
    gap: iconEnd || iconStart ? "8px" : "",

    ...(separation.variantButton({
      variant,
      color,
      theme,
    }) as {}),
    ...(theme.size[size || "medium"] as {}),
    borderRadius: radius?.toString(), // || buttonConfig.borderRadius,
    ...(sx as {}),
  };
});

export default Button;
