import React from "react";
import { Metadata } from "next";
import { Footer, NavBar, PortfolioPageHeader, Projects } from "@/components";

// Metadata
export const metadata: Metadata = {
  title: "Our Projects",
};

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <PortfolioPageHeader />
      <Projects />
      <Footer />
    </>
  );
}
