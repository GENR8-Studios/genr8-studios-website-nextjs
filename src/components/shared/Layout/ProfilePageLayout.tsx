import React from "react";
import Image from "next/image";
import { LogoBackdrop } from "@/assets";
import BannerCTA from "../CTA/BannerCTA";
import VideoEmbedCard from "../Card/VideoEmbedCard";

const CTA = {
  caption: "view more projects",
  target: "/portfolio",
};

const { target } = CTA;

// Data
const placeholder = {
  styles: "bg-placeholder",
  title: "Placeholder Project Title",
  category: "Project Category",
  secondHeading: "Project Summary",
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis, sunt incidunt consequatur ex culpa dolor nulla earum corrupti rem, atque sint accusamus minus maiores unde fugiat tempora expedita dolorum distinctio? Fugit quae quibusdam magni consequatur voluptate aliquid vitae assumenda.",
  client: "Placeholder Client",
  format: "Placeholder Format",
  publishedDate: "Placeholder Date",
  publishedDateFormat: "2024-07-25T14:30:00",
  img01: LogoBackdrop,
  img02: LogoBackdrop,
  img03: LogoBackdrop,
  img04: LogoBackdrop,
  img05: LogoBackdrop,
};

const {
  category,
  client,
  format,
  publishedDate,
  publishedDateFormat,
  secondHeading,
  styles,
  summary,
  title,
  img01,
  img02,
  img03,
  img04,
  img05,
} = placeholder;

// Styles
const headerStyles = "min-h-[40dvh] lg:min-h-[100dvh] w-full flex custom-bg";
const headerContainerStyles =
  "flex flex-col justify-end w-full max-lg:items-center p-12"; // bg-white/40
const headingStyles =
  "text-2xl lg:text-4xl xl:text-6xl text-white font-bold tracking-wide";
const categoryStyles =
  "uppercase text-sm lg:text-base w-fit pl-[2px] text-theme tracking-widest font-medium";

// Component
const ProjectPageLayout = (props: any) => {
  // Props
  const {
    addStyles = styles,
    projectTitle = title,
    projectCategory = category,
    projectSummary = summary,
    projectSecondHeading = secondHeading,
    projectClient = client,
    projectFormat = format,
    projectPublishedDate = publishedDate,
    projectPublishedDateFormat = publishedDateFormat,
    projectAddImg01 = img01,
    projectAddImg02 = img02,
    projectAddImg03 = img03,
    projectAddImg04 = img04,
    projectAddImg05 = img05,
    projectVideoURL,
  } = props;

  const projectMetadata = [
    { key: 1, label: "Client:", value: projectClient },
    { key: 2, label: "Format:", value: projectFormat },
    {
      key: 3,
      label: "Published Date:",
      value: (
        <>
          <time dateTime={projectPublishedDateFormat}>
            {projectPublishedDate}
          </time>
        </>
      ),
    },
  ];

  const additionalImages = [
    { key: 1, src: projectAddImg02 },
    { key: 2, src: projectAddImg03 },
    { key: 3, src: projectAddImg04 },
  ];

  const metadata = (
    <ul className="flex flex-col gap-y-4">
      {projectMetadata.map((item) => (
        <li key={item.key}>
          <span className="flex gap-x-1">
            <p>{item.label}</p>
            <p>{item.value}</p>
          </span>
        </li>
      ))}
    </ul>
  );

  const addImages = (
    <>
      {additionalImages.map((img) => (
        <div key={img.key} className="w-full lg:w-[30%]">
          <Image
            alt={`${projectTitle} Image 0${img.key}`}
            src={img.src}
            width={1280}
            height={720}
            className="rounded-lg border-2"
          />
        </div>
      ))}
    </>
  );

  return (
    <>
      <header className={`${headerStyles} ${addStyles}`}>
        <div className={headerContainerStyles}>
          <div className="flex flex-col-reverse border border-theme gap-y-2 bg-black min-w-80 w-fit p-4 xl:p-8 rounded-lg">
            <h1 className={headingStyles}>{projectTitle}</h1>
            <p className={categoryStyles}>{projectCategory}</p>
          </div>
        </div>
      </header>
      <section className="w-[88dvw] lg:w-[80dvw] mx-auto py-12 lg:py-28">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h2 className="hidden text-4xl xl:text-6xl text-white font-semibold">
              {projectSecondHeading}
            </h2>
            {/* project summary */}
            <span className="flex max-lg:flex-col max-lg:gap-y-8 justify-between items-center">
              <p className="lg:w-3/5 text-base xl:text-xl">{projectSummary}</p>
              <div className="w-full lg:w-[30%]">
                <Image
                  alt={`${projectTitle} Feature Image`}
                  src={projectAddImg05}
                  width={1280}
                  height={720}
                  className="rounded-lg border-2"
                />
              </div>
            </span>
          </div>

          {/* Second image + bullet list info */}
          <span className="flex max-lg:flex-col max-lg:gap-y-8 lg:flex-row-reverse justify-between items-center">
            <div className="lg:w-1/2 text-base xl:text-xl">{metadata}</div>
            <div className="w-full lg:w-[30%]">
              <Image
                alt={`${projectTitle} Additional Image`}
                src={projectAddImg01}
                width={1280}
                height={720}
                className="rounded-lg border-2"
              />
            </div>
          </span>

          {/* Additional Images */}
          <span className="flex max-lg:flex-col max-lg:gap-y-16 justify-between py-8 lg:py-16">
            {addImages}
          </span>

          <VideoEmbedCard
            videoCardTitle={projectTitle}
            videoURL={projectVideoURL}
          />
        </div>
      </section>

      {/* View More Projects CTA */}
      <BannerCTA target={target} />
    </>
  );
};

export default ProjectPageLayout;
