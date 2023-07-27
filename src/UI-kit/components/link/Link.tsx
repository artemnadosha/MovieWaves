import { usePathname } from "next/navigation";
import styled from "styled-components";
import NextLink from "next/link";
import { MyLinkProps } from "./Link.type";
import { IconBox } from "@/UI-kit";
import { buttonConfig } from "@/UI-kit/theme";
import { separation } from "@/UI-kit/utils";

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

  return {
    ...(buttonConfig.defaultStyles as {}),

    gap: iconEnd || iconStart ? "8px" : "",

    ...separation.variantButton({
      variant: variant || "text",
      color,
      active: pathname === href,
    }),
    ...separation.sizeButton({ size }),
    borderRadius: radius?.toString() || buttonConfig.borderRadius,
    ...(sx as {}),
  };
});

export default Link;
