import React from "react";
import Link from "next/link";
import { Footer, NavBar } from "@/components";
import { pageError } from "@/constants";

const { callToAction, title, subheading } = pageError;

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="flex justify-center items-center bg-black">
        <section className="flex flex-col w-full items-center py-28">
          <h1 className="text-theme text-6xl font-bold">{title}</h1>
          <p className="font-semibold text-2xl">{subheading}</p>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-theme border-2 border-transparent rounded-full text-white font-semibold uppercase w-full px-8 py-4 hover:border-theme hover:bg-black hover:text-theme"
            >
              {callToAction}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
