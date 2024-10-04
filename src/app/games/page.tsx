import React from "react";
import { Metadata } from "next";
import { Footer, GamesPageHeader, GamesSection, NavBar } from "@/components";

// Metadata
export const metadata: Metadata = {
  title: "Games We Made",
};

export default function Games() {
  return (
    <>
      <NavBar />
      <GamesPageHeader />
      <GamesSection />
      <Footer />
    </>
  );
}
