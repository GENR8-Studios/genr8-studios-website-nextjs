import React from "react";
import { Metadata } from "next";
import {
  AboutPageHeader,
  Achievements,
  Footer,
  Services,
  Team,
} from "@/components";

// Metadata
export const metadata: Metadata = {
  title: "About Us",
};

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
