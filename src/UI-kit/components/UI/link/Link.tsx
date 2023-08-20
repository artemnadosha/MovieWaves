import { usePathname } from "next/navigation";
import styled, { css } from "styled-components";
import NextLink from "next/link";
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

  const defaultStyle = css`
    font-family: inherit;
    border: none;
    outline: none;
    margin: 0;
    user-select: none;
    cursor: pointer;
    transition: 0.25s;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const gapWithIcon = css({
    gap: iconEnd || iconStart ? "8px" : "",
  });

  const sizeStyle = css({ ...(theme.size[size || "medium"] as {}) });

  const variantStyle =
    variant === "tab"
      ? linkColorConfig({ theme, color, active: pathname === href })[variant]
      : buttonColorConfig({ theme, color, active: pathname === href })[
          variant || "text"
        ];

  const customStyle = css({ ...(sx as {}) });

  return css`
    ${defaultStyle}
    ${gapWithIcon}
    ${sizeStyle}
    ${variantStyle}
    border-radius: ${radius?.toString() ||
    (theme.unitSize.borderRadius as string)}
    ${customStyle}
  `;
});

export default Link;
