import { FC } from "react";
import { Box, Link, LinkGroupProps } from "@/UI-kit";

const LinkGroup: FC<LinkGroupProps> = ({
  dataLink,
  spacing,
  direction,
  ...rest
}) => {
  return (
    <Box direction={direction} spacing={spacing} spacingPadding={1}>
      {dataLink?.map(({ label, href, iconStart, iconEnd }) => (
        <Link
          key={label}
          href={href}
          {...rest}
          variant="tab"
          size="small"
          iconEnd={iconEnd}
          iconStart={iconStart}
        >
          {label}
        </Link>
      ))}
    </Box>
  );
};

export default LinkGroup;
