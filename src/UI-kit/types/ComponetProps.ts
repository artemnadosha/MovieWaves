import {
  JSXBoxTagName,
  JSXHeadingTagName,
  JSXParagraphTagName,
} from "./JSXTagName";

export interface ComponentTypographyProps {
  component?: JSXParagraphTagName | JSXHeadingTagName;
}

export interface ComponentBoxProps {
  component?: JSXBoxTagName;
}
