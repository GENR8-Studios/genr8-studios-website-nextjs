import React from "react";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

const info = projects
  .filter((tag) => tag.title === "Necro's Revenge")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-necros-revenge`}
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

export default function NecrosRevengePage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
