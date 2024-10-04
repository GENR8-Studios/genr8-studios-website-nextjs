import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

// Metadata
export const metadata: Metadata = {
  title: "Electric Race Car - Project Details",
};

const info = projects
  .filter((tag) => tag.title === "Race Car Visualization")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-electric-racecar`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.annexOne}
      projectAddImg02={project.images.annexTwo}
      projectAddImg03={project.images.annexThree}
      projectAddImg04={project.images.annexFour}
      projectAddImg05={project.images.annexFive}
      projectVideoURL={project.url.video}
    />
  ));

export default function ElectricRaceCarPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
