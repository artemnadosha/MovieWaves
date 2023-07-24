import { FC } from "react";
import { Link } from "@/UI";

type NavLink = {
  label: string;
  href: string;
};

interface NavigationProps {
  navLinks: NavLink[];
}

const NavLink: FC<NavigationProps> = ({ navLinks }) => {
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
