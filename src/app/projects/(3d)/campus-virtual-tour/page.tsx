import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

// Metadata
export const metadata: Metadata = {
  title: "HMTHS Campus Virtual Tour - Project Details",
};

const info = projects
  .filter((tag) => tag.title === "Campus Virtual Tour")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-hmths-campus-virtual-tour`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.feature}
      projectAddImg02={project.images.annexThree}
      projectAddImg03={project.images.annexOne}
      projectAddImg04={project.images.annexTwo}
      projectAddImg05={project.images.annexFour}
      projectVideoURL={project.url.video}
    />
  ));

export default function HmthsCampusVirtualTourPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
