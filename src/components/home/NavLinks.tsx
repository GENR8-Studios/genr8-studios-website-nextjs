"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinksHome } from "@/constants";

const linkBaseStyles =
  "min-w-fit flex items-center w-auto text-sm font-semibold lg:px-4 lg:py-2 transition-colors duration-100";
const linkInactiveStyles = "text-white hover:text-theme";
const linkActiveStyles = "text-theme hover:text-white";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = navLinksHome.map((link) => (
    <li
      key={link.id}
      className={`${linkBaseStyles} ${pathname === link.endpoint ? linkActiveStyles : linkInactiveStyles}`}
    >
      <Link href={link.endpoint}>{link.title}</Link>
    </li>
  ));

  return navLinks;
};

export default NavLinks;
