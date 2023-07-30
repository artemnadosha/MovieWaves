import {
  DirectionHorizontalVerticalProps,
  IconProps,
  OrientingProps,
  SpacingProps,
} from "@/UI-kit/types";
import { MyLinkProps } from "@/UI-kit";

export type LinkSingleType = IconProps & {
  label: string | number;
  href: string;
};

export interface LinkGroupProps
  extends Omit<MyLinkProps, "href">,
    DirectionHorizontalVerticalProps,
    OrientingProps,
    SpacingProps {
  dataLink?: LinkSingleType[];
  label?: string | number;
}
