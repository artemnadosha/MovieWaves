import { usePathname } from "next/navigation";
import styled from "styled-components";
import NextLink from "next/link";
import { IconBox, MyLinkProps } from "@/UI-kit";
import { separation } from "@/UI-kit/utils";
import { defaultLinkConfig } from "./Link.utils";

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
)(({ variant, size, iconEnd, iconStart, sx, radius, color, href, theme }) => {
  const pathname = usePathname();

  return {
    ...(defaultLinkConfig as {}),

    gap: iconEnd || iconStart ? "8px" : "",

    ...separation.variantLink({
      variant: variant || "text",
      color,
      active: pathname === href,
      theme,
    }),
    ...(separation.sizeButton({ size, theme }) as {}),
    borderRadius:
      radius?.toString() || theme?.unitSize?.borderRadius?.toString(),
    ...(sx as {}),
  };
});

export default Link;
