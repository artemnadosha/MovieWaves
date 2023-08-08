import styled, { css } from "styled-components";
import { tagColorConfig } from "@/UI-kit/components/utils";
import { PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  RadiusProps,
  SizeProps,
  VariantTag,
} from "@/UI-kit/types";

interface TagProps
  extends PropsWithChildren,
    DefaultProps,
    VariantTag,
    SizeProps,
    ColorKeysProps,
    RadiusProps {}

const Tag = styled(
  ({ variant, size, sx, color, radius, children, ...rest }: TagProps) => {
    return <p {...rest}>{children}</p>;
  }
)(({ variant, size, radius, sx, color, theme }) => {
  const defaultStyle = css`
    font-family: inherit;
    margin: 0;
    user-select: none;
    transition: 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const variantStyle = tagColorConfig({ theme, color })[variant || "contained"];

  const sizeStyle = css({ ...(theme.size[size || "medium"] as {}) });
  const customStyle = css({ ...(sx as {}) });

  return css`
    ${defaultStyle};
    ${sizeStyle};
    ${variantStyle};
    border-radius: ${radius?.toString() ||
    (theme.unitSize.borderRadiusTag as string)};
    ${customStyle}
  `;
});

export default Tag;
