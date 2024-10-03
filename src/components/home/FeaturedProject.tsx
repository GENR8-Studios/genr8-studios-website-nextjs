import Link from "next/link";
import { CTA, featuredProject } from "@/constants";

const { primary, secondary } = CTA;
const { title, category, summary } = featuredProject;

const FeaturedProject = () => {
  return (
    <header className="min-h-[100dvh] w-full flex items-center custom-bg home-header">
      <div className="flex flex-col max-lg:w-full max-lg:items-center">
        <div className="flex flex-col lg:pl-24 gap-y-6">
          <div className="flex flex-col-reverse gap-y-6 max-lg:w-full max-lg:items-center">
            <h1 className="text-4xl xl:text-8xl text-white font-bold">
              {title}
            </h1>
            <p className="uppercase text-sm lg:text-base bg-black/70 w-fit rounded p-2 text-theme tracking-widest font-medium">
              {category}
            </p>
          </div>
          <div className="flex max-lg:flex-col max-lg:items-center gap-y-2 w-full py-2 lg:gap-x-2">
            <Link
              href={primary.target}
              className="group bg-white rounded-full w-fit outline-none px-8 py-3 hover:bg-theme focus-visible:bg-theme focus-visible:ring focus-visible:ring-theme focus-visible:ring-offset-2"
            >
              <p className="uppercase text-black text-sm font-semibold group-hover:text-white group-focus-visible:text-white">
                {primary.caption}
              </p>
            </Link>
            <Link
              href={secondary.target}
              className="group bg-black rounded-full w-fit outline-none px-8 py-3 hover:bg-theme focus-visible:bg-theme focus-visible:ring focus-visible:ring-theme focus-visible:ring-offset-2"
            >
              <p className="uppercase text-white text-sm font-semibold group-hover:text-white group-focus-visible:text-white">
                {secondary.caption}
              </p>
            </Link>
          </div>
        </div>
        <span className="bg-black lg:ml-24 p-8 lg:w-1/3 h-fit absolute bottom-[2px]">
          <p className="font-semibold text-sm text-gray-400">{summary}</p>
        </span>
      </div>
    </header>
  );
};

export default FeaturedProject;
