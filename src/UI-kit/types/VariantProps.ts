import { JSXHeadingTagName, JSXParagraphTagName } from "./JSXTagName";

export interface VariantButtonLink {
  variant?: "contained" | "outlined" | "text";
}

export interface VariantCheckbox {
  variant?: "contained" | "outlined";
}

export interface VariantTypography {
  variant?: JSXParagraphTagName | JSXHeadingTagName;
}
