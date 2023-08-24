import {
  JSXBoxTagName,
  JSXHeadingTagName,
  JSXParagraphTagName,
} from "./JSXTagName";
import { JSX } from "react";

export interface ComponentTypographyProps {
  component?: JSXParagraphTagName | JSXHeadingTagName | "span";
}

export interface ComponentBoxProps {
  component?: keyof Pick<JSX.IntrinsicElements, JSXBoxTagName>;
}

// JSXBoxTagName;
