import React from "react";
import { aboutInfo, headers } from "@/constants";
import NavBar from "../Nav/NavBar";

const { contentOne, contentTwo } = aboutInfo;

const AboutPageHeader = () => {
  return (
    <>
      <NavBar />
      <header className="min-h-fit w-full flex items-start lg:items-center bg-black pt-20">
        <div className="flex justify-end items-center w-full">
          <div className="bg-black lg:bg-black/60 rounded-md w-full max-lg:py-16 lg:py-8 xl:py-20 px-12 lg:px-[4.5rem] lg:m-16">
            <div className="flex flex-col gap-y-8 lg:gap-y-6 xl:gap-y-10">
              <h1 className="capitalize max-lg:text-center text-5xl lg:text-6xl xl:text-8xl font-bold text-white max-lg:text-theme">
                {headers.about}
              </h1>
              <div className="text-gray-300 *:leading-8 text-lg xl:text-xl lg:w-4/5 xl:w-3/5 flex flex-col gap-y-4">
                <p>{contentOne}</p>
                <p>{contentTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutPageHeader;
