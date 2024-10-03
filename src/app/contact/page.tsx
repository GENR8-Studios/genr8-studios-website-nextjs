import React from "react";
import {
  ContactDetailsBlock,
  ContactForm,
  ContactPageHeader,
  Footer,
  NavBar,
} from "@/components";

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
