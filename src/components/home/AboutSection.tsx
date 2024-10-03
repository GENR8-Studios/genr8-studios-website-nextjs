import Image from "next/image";
import { LogoAltPortrait } from "@/assets";
import { aboutSection } from "@/constants";
const { blurb, heading, pop, subheading } = aboutSection;

const AboutSection = () => {
  return (
    <div className="bg-black min-h-[40dvh] lg:min-h-[100dvh]">
      <div className="py-14 lg:py-28">
        <div className="w-[84%] mx-auto flex justify-between">
          <div className="lg:w-2/5">
            {/* HEADING SUBSECTION */}
            <div className="flex flex-col gap-y-1 mb-10">
              <h3 className="uppercase font-bold text-4xl xl:text-6xl">
                {heading}
              </h3>
              <span className="flex items-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
                <div className="bg-white rounded-full w-8 h-[1px] border"></div>
                <p className="uppercase text-gray-400 tracking-wide pl-2">
                  {subheading}
                </p>
              </span>
            </div>
            {/* CONTENT SECTION */}
            <div className="w-full flex justify-between max-h-[60dvh]">
              <div className="w-full flex flex-col gap-y-6">
                <p className="font-bold text-4xl tracking-wider leading-[3rem]">
                  {pop}
                </p>
                <p className="text-gray-400 text-sm xl:text-lg font-medium leading-6">
                  {blurb}
                </p>
              </div>
            </div>
          </div>
          <Image
            alt="logo alt"
            src={LogoAltPortrait}
            width={1000}
            height={400}
            className="w-2/5 xl:w-[30%] max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
