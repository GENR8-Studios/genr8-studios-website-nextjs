import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets";

const LogoImgAlt = "GENR8 Studios Logo";
const homeEndpoint = "/";

const NavLogo = () => {
  return (
    <Link href={homeEndpoint}>
      <Image
        alt={LogoImgAlt}
        src={Logo}
        width={80}
        height={20}
        loading="lazy"
      />
    </Link>
  );
};

export default NavLogo;
