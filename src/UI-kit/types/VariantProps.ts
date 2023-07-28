import { JSXHeadingTagName, JSXParagraphTagName } from "./JSXTagName";

export interface VariantButton {
  variant?: "contained" | "outlined" | "text";
}

export interface VariantLink {
  variant?: "contained" | "outlined" | "text" | "tab";
}

export interface VariantCheckbox {
  variant?: "contained" | "outlined";
}

export interface VariantTypography {
  variant?: JSXParagraphTagName | JSXHeadingTagName;
}
