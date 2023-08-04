import { usePathname } from "next/navigation";
import styled from "styled-components";
import NextLink from "next/link";
import { separation } from "@/UI-kit/utils";
import { defaultLinkConfig } from "./Link.utils";
import { IconBox, MyLinkProps } from "@/UI-kit/components";
import { buttonColorConfig, linkColorConfig } from "@/UI-kit/components/utils";

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
    ...(variant === "tab"
      ? linkColorConfig({ theme, color, active: pathname === href })[variant]
      : buttonColorConfig({ theme, color })[variant || "text"]),
    // ...separation.variantLink({
    //   variant: variant || "text",
    //   color,
    //   active: pathname === href,
    //   theme,
    // }),
    ...(theme.size[size || "medium"] as {}),
    borderRadius:
      radius?.toString() || theme?.unitSize?.borderRadius?.toString(),
    ...(sx as {}),
  };
});

export default Link;
