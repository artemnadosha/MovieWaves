import { FC } from "react";
import { Box, Link, LinkGroupProps, Typography } from "@/UI-kit";
import { PaletteName } from "@/UI-kit/theme";

const LinkGroup: FC<LinkGroupProps> = ({
  dataLink,
  spacing,
  direction,
  sx,
  color,
  label,
  ...rest
}) => {
  return (
    <Box direction={direction} spacing={spacing} sx={sx}>
      {label && (
        <Typography
          component="span"
          variant="label"
          color={`${color || "primary"}.additional` as PaletteName}
        >
          {label}
        </Typography>
      )}
      {dataLink?.map(({ label, href, iconStart, iconEnd }) => (
        <Link
          key={label}
          href={href}
          variant="tab"
          size="small"
          color={color}
          iconEnd={iconEnd}
          iconStart={iconStart}
          {...rest}
        >
          {label}
        </Link>
      ))}
    </Box>
  );
};

export default LinkGroup;
