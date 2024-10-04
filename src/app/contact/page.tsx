import React from "react";
import { Metadata } from "next";
import {
  ContactDetailsBlock,
  ContactForm,
  ContactPageHeader,
  Footer,
  NavBar,
} from "@/components";

// Metadata
export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <>
      <NavBar />
      <ContactPageHeader />
      <ContactDetailsBlock />
      <ContactForm />
      <Footer />
    </>
  );
}
