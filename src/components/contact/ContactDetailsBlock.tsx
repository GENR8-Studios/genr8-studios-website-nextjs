import Link from "next/link";
import { contactInfo, contactMarkup } from "@/constants";

const contactDetails = contactInfo.map((contact) => (
  <li key={contact.id}>
    <span className="flex items-center text-center gap-x-1 lg:gap-x-4 text-xs lg:text-base xl:text-lg uppercase">
      <p className="font-bold">{contact.title}</p>
      <p className="pl-0">:</p>
      <Link
        href={contact.endpoint}
        className="tracking-wider font-medium outline-none rounded-full border border-transparent px-1 hover:text-black focus-visible:border-black"
      >
        {contact.value}
      </Link>
    </span>
  </li>
));

const ContactDetailsBlock = () => {
  return (
    <div className="bg-black max-lg:flex max-lg:justify-center min-h-[50dvh] py-8 lg:py-12 xl:py-20">
      <div className="bg-theme lg:h-[76dvh] flex justify-center items-center max-sm:w-[85%] w-3/4 lg:w-[45%] lg:ml-24 max-lg:py-28">
        <div className="flex flex-col w-full px-4 lg:px-16">
          <h2 className="uppercase font-bold tracking-wider text-3xl lg:text-4xl xl:text-5xl mb-6 text-black">
            {contactMarkup.command}
          </h2>
          <ul className="flex flex-col gap-y-4">{contactDetails}</ul>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsBlock;
