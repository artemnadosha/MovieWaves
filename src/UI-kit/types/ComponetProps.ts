import {
  JSXBoxTagName,
  JSXHeadingTagName,
  JSXParagraphTagName,
} from "./JSXTagName";

export interface ComponentTypographyProps {
  component?: JSXParagraphTagName | JSXHeadingTagName | "span";
}

export interface ComponentBoxProps {
  component?: JSXBoxTagName;
}
