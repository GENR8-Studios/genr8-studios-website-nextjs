import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoBackdrop } from "@/assets";

const CTA = "Play game";

const GameCard = (props: any) => {
  const {
    imgAlt = "Placeholder image",
    imgSrc = LogoBackdrop,
    title = "Game Title",
    summary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis aliquam ducimus magnam placeat quo velit perspiciatis, rem minima officia eaque!",
    target = "#",
  } = props;

  return (
    <div className="flex max-lg:flex-col rounded-xl lg:gap-x-8 w-3/5 bg-stone-500 p-2 lg:p-4 mx-auto">
      <div className="relative aspect-video rounded-xl lg:w-full">
        <Image
          alt={imgAlt}
          src={imgSrc}
          width={1280}
          height={720}
          className="rounded-xl w-full"
        />
      </div>
      <div className="lg:aspect-video flex flex-col lg:justify-between gap-y-2 lg:gap-y-4 py-2 w-full h-full">
        <div className="flex flex-col gap-y-2 xl:gap-y-4 max-lg:items-center">
          <h2 className="font-bold text-2xl lg:text-3xl xl:text-5xl">
            {title}
          </h2>
          <p className="text-xl xl:text-2xl w-4/5 max-lg:hidden">{summary}</p>
        </div>
        <div className="w-full flex max-lg:justify-center">
          <Link
            href={target}
            className="rounded outline-none px-6 py-2 text-base xl:text-xl border border-white hover:bg-white hover:text-stone-500 focus:bg-white focus:border-stone-500 focus:text-stone-500 focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
          >
            {CTA}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
