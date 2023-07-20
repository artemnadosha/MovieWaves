import { HTMLAttributes, PropsWithChildren } from "react";
import { DefaultProps, StylesColorProps } from "@/types/defaultProps";
import { JSXHeadingTagName, JSXParagraphTagName } from "@/types/JSXTagName";

export interface TypographyProps
  extends DefaultProps,
    StylesColorProps,
    Omit<HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>, "color">,
    PropsWithChildren {
  variant: JSXParagraphTagName | JSXHeadingTagName;
  component?: JSXParagraphTagName | JSXHeadingTagName;
}
