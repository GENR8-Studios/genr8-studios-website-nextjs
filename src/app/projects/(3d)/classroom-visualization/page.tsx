import React from "react";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

const info = projects
  .filter((tag) => tag.title === "Classroom Visualization")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-hmths-classroom`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.annexTwo}
      projectAddImg02={project.images.annexOne}
      projectAddImg03={project.images.annexThree}
      projectAddImg04={project.images.annexFour}
      projectAddImg05={project.images.feature}
      projectVideoURL={project.url.video}
    />
  ));

export default function HmthsClassroomVisualizationPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
