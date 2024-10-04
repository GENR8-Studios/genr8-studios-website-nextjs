import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

// Metadata
export const metadata: Metadata = {
  title: "Driven - Project Details",
};

const info = projects
  .filter((tag) => tag.title === "Driven")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-driven`}
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
      projectAddImg04={project.images.annexFive}
      projectAddImg05={project.images.annexFour}
      projectVideoURL={project.url.video}
    />
  ));

export default function DrivenPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
