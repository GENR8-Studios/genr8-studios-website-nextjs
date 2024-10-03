import React from "react";
import {
  AboutPageHeader,
  Achievements,
  Footer,
  Services,
  Team,
} from "@/components";

export default function About() {
  return (
    <>
      <AboutPageHeader />
      <Services />
      <Team />
      <Achievements />
      <Footer />
    </>
  );
}
