import React from "react";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

const info = projects
  .filter((tag) => tag.title === "Mountain Dew")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-mountain-dew`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.feature}
      projectAddImg02={project.images.feature}
      projectAddImg03={project.images.feature}
      projectAddImg04={project.images.feature}
      projectAddImg05={project.images.feature}
      projectVideoURL={project.url.video}
    />
  ));

export default function MountainDewPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
