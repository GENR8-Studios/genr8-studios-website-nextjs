import { contactMarkup, headers } from "@/constants";

const ContactPageHeader = () => {
  return (
    <header className="min-h-[40dvh] lg:min-h-[78dvh] w-full flex items-center bg-black">
      <div className="flex flex-col lg:pl-24 max-lg:w-full">
        <div className="flex flex-col lg:gap-y-6 max-lg:items-center">
          <p className="capitalize text-gray-300 pl-2 text-xl tracking-widest max-lg:hidden">
            {contactMarkup.caption}
          </p>
          <h1 className="capitalize text-4xl lg:text-6xl xl:text-8xl font-bold tracking-wider text-white max-lg:text-theme">
            {headers.contact}
          </h1>
        </div>
        <span className="mt-6 max-lg:hidden">
          <p className="w-4/5 text-gray-400 text-base xl:leading-8 xl:text-xl">
            {contactMarkup.blurb}
          </p>
        </span>
      </div>
    </header>
  );
};

export default ContactPageHeader;
