import { Navigation } from "../nav-link";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        background: "gray",
        padding: "20px",
      }}
    >
      <Navigation navLinks={navItem} />
    </header>
  );
};

export default Header;
