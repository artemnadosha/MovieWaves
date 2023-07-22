import { MyLinkProps } from "@/types";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { buttonConfig } from "@/theme";
import NextLink from "next/link";
import { separation } from "@/utils";
import IconBox from "../icon-box/IconBox.styled";

const Link = styled(
  ({
    href,
    color,
    sx,
    variant,
    size,
    radius,
    iconEnd,
    iconStart,
    children,
    ...rest
  }: MyLinkProps) => {
    const IconStart = iconStart && <IconBox>{iconStart}</IconBox>;
    const IconEnd = iconEnd && <IconBox>{iconEnd}</IconBox>;

    return (
      <NextLink href={href} {...rest}>
        {IconStart}
        {children}
        {IconEnd}
      </NextLink>
    );
  }
)(({ variant, size, iconEnd, iconStart, sx, radius, color, href }) => {
  const pathname = usePathname();

  const buttonStyles = buttonConfig({});

  return {
    ...(buttonStyles.defaultStyles as {}),

    gap: iconEnd || iconStart ? "8px" : "",

    ...separation.variantButton({
      variant: variant || "text",
      color,
      active: pathname === href,
    }),
    ...separation.sizeButton({ size }),
    borderRadius: radius?.toString() || buttonStyles.borderRadius,
    ...(sx as {}),
  };
});

export default Link;
