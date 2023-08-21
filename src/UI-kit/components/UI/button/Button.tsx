import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.type";
import { IconBox } from "@/UI-kit/components";
import { buttonColorConfig } from "@/UI-kit/components/utils";

const Button = styled(
  ({
    variant,
    size,
    sx,
    color,
    radius,
    iconEnd,
    iconStart,
    equalSides,
    active,
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
)(
  ({
    variant,
    equalSides,
    active,
    iconStart,
    iconEnd,
    size,
    radius,
    sx,
    color,
    theme,
  }) => {
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
      text-align: center;
    `;

    const gapWithIcon = css({
      gap: iconEnd || iconStart ? "8px" : "",
    });

    const variantStyle = buttonColorConfig({
      theme,
      color,
      equalSides,
      size,
      active,
    })[variant || "contained"];

    const sizeStyle = css({ ...(theme.size[size || "medium"] as {}) });
    const customStyle = css({ ...(sx as {}) });

    return css`
      ${defaultStyle};
      ${gapWithIcon};
      ${sizeStyle};
      border-radius: ${radius?.toString() ||
      (theme.unitSize.borderRadius as string)};
      ${variantStyle};
      ${customStyle}
    `;
  }
);

export default Button;
