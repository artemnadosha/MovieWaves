import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.type";
import { getColor, spacingPaddingMarginFunc } from "@/UI-kit/utils";

const Typography = styled(
  ({
    component,
    variant,
    color,
    sx,
    isShadow,
    noWrap,
    spacingPadding,
    spacingMargin,
    children,
    ...rest
  }: TypographyProps) => {
    const Component = component || "p";

    return <Component {...rest}>{children}</Component>;
  }
)(
  ({
    variant,
    color,
    noWrap,
    sx,
    isShadow,
    spacingPadding,
    spacingMargin,
    theme,
  }) => {
    const separationColor = getColor({ color, theme });

    const variantStyle = css({ ...(theme.typography[variant || "p"] as {}) });
    const fontStyle = css`
      ${theme.font.style}
    `;
    const colorStyle = css`
      color: ${typeof separationColor === "object"
        ? separationColor.main
        : separationColor};
    `;

    const textShadowStyle = css`
      text-shadow: 3px 2px 5px #333333;
    `;
    const noWrapStyle = css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;

    const spacingStyle = css({
      padding:
        spacingPadding &&
        spacingPaddingMarginFunc({ arg: spacingPadding, theme }),
      margin:
        spacingMargin &&
        spacingPaddingMarginFunc({ arg: spacingMargin, theme }),
    });

    const customStyle = css({
      ...(sx as {}),
    });

    return css`
      ${variantStyle}
      ${fontStyle}
      ${colorStyle}
      ${spacingStyle}
      ${isShadow && textShadowStyle}
      ${noWrap && noWrapStyle}
      ${customStyle}
    `;
  }
);

export default Typography;
