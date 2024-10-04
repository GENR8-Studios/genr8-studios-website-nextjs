import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

// Metadata
export const metadata: Metadata = {
  title: "STEM Lab - Project Details",
};

const info = projects
  .filter((tag) => tag.title === "STEM Lab")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-hmths-stem-lab`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.annexFour}
      projectAddImg02={project.images.annexTwo}
      projectAddImg03={project.images.annexThree}
      projectAddImg04={project.images.annexOne}
      projectAddImg05={project.images.annexThree}
      projectVideoURL={project.url.video}
    />
  ));

export default function HmthsStemLabPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
