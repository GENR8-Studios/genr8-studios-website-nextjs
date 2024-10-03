import React from "react";
import {
  AboutSection,
  AccordionGroup,
  FeaturedProject,
  Footer,
  NavBar,
  Services,
} from "@/components";

export default function Home() {
  return (
    <>
      <NavBar />
      <FeaturedProject />
      <AboutSection />
      <AccordionGroup />
      <Services />
      <Footer />
    </>
  );
}
