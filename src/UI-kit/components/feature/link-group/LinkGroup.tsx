import { FC } from "react";
import { Box, Link, LinkGroupProps } from "@/UI-kit";

const LinkGroup: FC<LinkGroupProps> = ({
  dataLink,
  spacing,
  direction,
  sx,
  ...rest
}) => {
  return (
    <Box direction={direction} spacing={spacing} sx={sx}>
      {dataLink?.map(({ label, href, iconStart, iconEnd }) => (
        <Link
          key={label}
          href={href}
          variant="tab"
          size="small"
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
