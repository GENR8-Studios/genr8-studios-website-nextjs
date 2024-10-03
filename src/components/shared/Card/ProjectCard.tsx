import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NecroImg01 } from "@/assets";

const ProjectCard = (props: any) => {
  const {
    imgAlt = "placeholder",
    imgSrc = NecroImg01,
    cardTitle = "Placeholder Title",
    cardCTA = "View Project",
    target = "#",
  } = props;
  return (
    <>
      <div className="relative aspect-video mx-auto border border-theme rounded-xl w-4/5 lg:w-[45%]">
        <Image
          alt={imgAlt}
          src={imgSrc}
          width={1280}
          height={720}
          className="rounded-xl w-full"
        />
        <div className="absolute rounded-t-xl top-0 w-full h-full">
          <div className="flex flex-col justify-between items-center h-full rounded-xl">
            <span className="bg-black w-full text-center py-4 rounded-t-xl">
              <p className="text-theme tracking-wide font-semibold text-xl xl:text-3xl">
                {cardTitle}
              </p>
            </span>
            <span className="w-full flex justify-center rounded-b-xl">
              <Link
                href={target}
                className="group w-full outline-none rounded-b-xl text-center bg-theme px-8 py-4 hover:bg-white focus-visible:bg-white"
              >
                <p className="text-white font-medium text-lg xl:text-xl group-hover:text-theme group-focus-visible:text-theme group-active:text-black">
                  {cardCTA}
                </p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
