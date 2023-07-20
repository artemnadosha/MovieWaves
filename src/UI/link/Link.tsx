import { FC } from "react";
import { LinkWrapper } from "./Link.styled";
import { Typography } from "@/UI";
import { MyLinkProps } from "@/types";
import { usePathname } from "next/navigation";

const Link: FC<MyLinkProps> = ({
  typography,
  href,
  color,
  sx,
  padding,
  margin,
  children,
  ...rest
}) => {
  const pathname = usePathname();

  return (
    <LinkWrapper
      href={href}
      {...rest}
      color={color || "primary"}
      active={pathname === href}
      sx={sx}
      padding={padding}
      margin={margin}
    >
      <Typography
        component={typography?.component || "p"}
        variant={typography?.component || "p"}
        color={typography?.color}
      >
        {children}
      </Typography>
    </LinkWrapper>
  );
};

export default Link;
