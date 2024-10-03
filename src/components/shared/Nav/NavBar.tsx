import NavLinks from "@/components/home/NavLinks";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <nav className="fixed bg-black/50 z-10 w-full">
      <span className="flex justify-between px-6 lg:px-12 py-3 lg:py-5">
        <NavLogo />
        <ul className="flex gap-x-2 lg:gap-x-4">
          <NavLinks />
        </ul>
      </span>
    </nav>
  );
};

export default NavBar;
