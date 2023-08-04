import { FC, PropsWithChildren } from "react";
import { BadgeItem, BadgeWrapper } from "./Badge.styled";
import { ColorKeysProps, DefaultProps, SizeBadgeProps } from "@/UI-kit/types";

interface BadgePositionProps {
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}

export interface BadgeProps
  extends PropsWithChildren,
    ColorKeysProps,
    SizeBadgeProps,
    DefaultProps {
  hidden?: boolean;
  label?: string | number;
  position?: BadgePositionProps;
  positionSx?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const Badge: FC<BadgeProps> = ({
  sx,
  color,
  label,
  hidden,
  size,
  position,
  positionSx,
  children,
}) => {
  return (
    <BadgeWrapper sx={sx}>
      {children}
      {!hidden && (
        <BadgeItem
          size={size}
          color={color}
          position={position}
          positionSx={positionSx}
        >
          {label}
        </BadgeItem>
      )}
    </BadgeWrapper>
  );
};

export default Badge;
