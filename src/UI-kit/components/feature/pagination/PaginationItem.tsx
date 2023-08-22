import { Button } from "@/UI-kit/components";
import {
  ActiveProps,
  ColorKeysProps,
  SizeProps,
  VariantButton,
} from "@/UI-kit/types";
import { FC } from "react";

interface PaginationItemProps
  extends SizeProps,
    ColorKeysProps,
    VariantButton,
    ActiveProps {
  label: number;
  onClick: (key: number) => void;
}

const PaginationItem: FC<PaginationItemProps> = ({
  label,
  size,
  color,
  variant,
  active,
  onClick,
}) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <Button
      key={label}
      size={size}
      equalSides
      color={color}
      variant={variant}
      active={active}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default PaginationItem;
