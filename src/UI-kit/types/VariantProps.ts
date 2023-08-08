import { JSXHeadingTagName, JSXParagraphTagName } from "./JSXTagName";

type VariantButtonType = "contained" | "outlined" | "text" | "defaultText";

export interface VariantButton {
  variant?: VariantButtonType;
}

export interface VariantLink {
  variant?: VariantButtonType | "tab";
}

export interface VariantTag {
  variant?: VariantButtonType;
}

export interface VariantCheckbox {
  variant?: "contained" | "outlined";
}

export interface VariantTypography {
  variant?: JSXParagraphTagName | JSXHeadingTagName | "label";
}

export interface VariantInput {
  variant?: "contained" | "outlined";
}
