import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, ProjectPageLayout } from "@/components";
import { projects } from "@/constants";

// Metadata
export const metadata: Metadata = {
  title: "The Vault - Project Details",
};

const info = projects
  .filter((tag) => tag.title === "The Vault")
  .map((project) => (
    <ProjectPageLayout
      key={project.id}
      addStyles={`bg-the-vault`}
      projectTitle={project.title}
      projectCategory={project.category}
      projectSummary={project.description}
      projectClient={project.client}
      projectFormat={project.format}
      projectPublishedDate={project.date.published}
      projectPublishedDateFormat={project.date.publishedFormat}
      projectFeatImg={project.images.feature}
      projectAddImg01={project.images.annexOne}
      projectAddImg02={project.images.annexThree}
      projectAddImg03={project.images.annexTwo}
      projectAddImg04={project.images.annexFour}
      projectAddImg05={project.images.annexFive}
      projectVideoURL={project.url.video}
    />
  ));

export default function TheVaultPage() {
  return (
    <>
      <NavBar />
      {info}
      <Footer />
    </>
  );
}
