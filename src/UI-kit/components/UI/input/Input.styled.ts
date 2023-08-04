import styled, { css } from "styled-components";
import { inputColorConfig } from "@/UI-kit/components/utils";
import { InputProps } from "./Input";

export const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (props) =>
    !["color", "focus", "size", "variant", "radius"].includes(props),
})<InputProps>(({ color, theme, focus, size, variant, radius }) => {
  const defaultStyle = css`
    display: flex;
    position: relative;
    align-items: center;
    gap: 8px;
    cursor: text;
  `;

  const colorStyle = inputColorConfig({ color, theme, focus })[
    variant || "outlined"
  ];

  const sizeStyle = css({ ...(theme.size[size || "small"] as {}) });

  return css`
    ${defaultStyle}
    ${colorStyle}
    ${sizeStyle}
    border-radius: ${radius?.toString() ||
    (theme.unitSize.borderRadius as string)}
  `;
});

export const BaseInput = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  border: 0;
  background: none;
  outline: none;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;

  &::placeholder {
    color: inherit;
  }
`;

export const Fieldset = styled.fieldset.withConfig({
  shouldForwardProp: (props) => !["focus"].includes(props),
})<InputProps>(({ focus }) => ({
  position: "absolute",
  textAlign: "left",
  top: "-5px",
  left: "0",
  bottom: "0",
  right: "0",
  padding: "0 10px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: focus ? "2px" : "1px",
  borderColor: "inherit",
}));

export const Legend = styled.legend.withConfig({
  shouldForwardProp: (props) => !["color", "focus"].includes(props),
})<InputProps>(({ focus, color, theme }) => ({
  fontSize: "0.6em",
  float: "unset",
  width: "auto",
  display: "block",
  color: focus ? theme.palette[color || "primary"].main : "inherit",
  padding: "0",
  marginLeft: focus ? "-1px" : "0",
  height: "11px",
  maxWidth: "100%",
  whiteSpace: "nowrap",
}));

export const LegendText = styled.span(({}) => ({
  paddingLeft: "5px",
  paddingRight: "5px",
  display: "inline-block",
  visibility: "visible",
  color: "inherit",
}));
