import Link from "next/link";
import { currentYear, navLinksHome } from "@/constants";
import NavLogo from "./NavLogo";

const copyright = <p>&copy; {currentYear} GENR8-STUDIOS</p>;

const socials = {
  linkedin: {
    text: "LinkedIn",
    target: "/linkedin",
  },
  instagram: {
    text: "Instagram",
    target: "/instagram",
  },
  phone: {
    text: "+1 876 801 8972",
    target: "tel:+1 876 801 8972",
  },
  email: {
    text: "contact@genr8studios.com",
    target: "/contact#contact-form-section",
  },
};

const { linkedin, instagram, phone, email } = socials;

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col justify-between min-h-[40dvh]">
      <div className="bg-background">
        <div className="flex lg:justify-between max-lg:flex-col px-12 lg:px-24 my-8 lg:my-16 xl:*:w-1/4 max-lg:gap-y-8">
          {/* Column 1 */}
          <div className="">
            <NavLogo />
            <p className="text-gray-400 text-sm md:w-4/5 lg:m-3/5 xl:text-base mt-2 leading-6 lg:leading-8">
              We support programs that create advancement opportunities for
              people.
            </p>
          </div>
          {/* Column 2 */}
          <div className="w-full lg:w-1/3">
            <p className="uppercase text-theme tracking-wider lg:mb-3 max-sm:w-full max-lg:w-1/4">
              follow us
            </p>
            <div className="flex lg:flex-col leading-loose max-lg:w-full max-lg:gap-x-8 max-lg:text-sm max-lg:py-2">
              <Link href={linkedin.target}>{linkedin.text}</Link>
              <Link href={instagram.target}>{instagram.text}</Link>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex max-sm:flex-col lg:flex-col font-semibold">
            <p className="uppercase text-theme tracking-wider lg:mb-3 max-sm:w-full max-lg:w-1/5">
              contact us
            </p>
            <div className="flex max-sm:flex-col lg:flex-col leading-loose max-lg:gap-x-8 max-lg:text-sm max-lg:gap-y-2 max-lg:py-2">
              <span className="flex gap-x-2">
                <p>Telephone:</p>
                <Link
                  href={phone.target}
                  className="text-gray-400 font-normal hover:text-theme"
                >
                  {phone.text}
                </Link>
              </span>
              <span className="flex gap-x-2">
                <p>Email:</p>
                <Link
                  href={email.target}
                  className="text-gray-400 font-normal hover:text-theme"
                >
                  {email.text}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <span className="w-full flex justify-center">
          <ul className="flex lg:gap-x-4 py-4">
            {navLinksHome.map((link) => (
              <li
                key={link.id}
                className="px-2 lg:px-4 py-2 uppercase hover:text-theme duration-75 max-lg:text-sm"
              >
                <Link
                  href={link.endpoint}
                  className="rounded-full border border-transparent px-1 focus-visible:border-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </span>
        <div className="flex w-full justify-center bg-background">
          <span className="py-8 text-gray-400 tracking-widest text-xs lg:text-sm">
            {copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
