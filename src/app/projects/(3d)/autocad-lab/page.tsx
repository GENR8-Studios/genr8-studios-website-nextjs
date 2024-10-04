import React from "react";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

const info = projects
  .filter((tag) => tag.title === "AutoCAD Lab")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-hmths-autocad-lab`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.annexOne}
      projectAddImg02={project.images.annexFour}
      projectAddImg03={project.images.annexTwo}
      projectAddImg04={project.images.annexThree}
      projectAddImg05={project.images.annexFive}
      projectVideoURL={project.url.video}
    />
  ));

export default function HmthsAutocadLabPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
