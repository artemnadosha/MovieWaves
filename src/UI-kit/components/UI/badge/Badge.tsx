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
}

const Badge: FC<BadgeProps> = ({
  sx,
  color,
  label,
  hidden,
  size,
  position,
  children,
}) => {
  return (
    <BadgeWrapper sx={sx}>
      {children}
      {!hidden && (
        <BadgeItem size={size} color={color} position={position}>
          {label}
        </BadgeItem>
      )}
    </BadgeWrapper>
  );
};

export default Badge;
