"use client";

// Imports: Internal Dependencies
import React, { useState } from "react";

// Imports: External Dependencies
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Imports: Internal files
import { contactMarkup } from "@/constants";
import FormErrorMessage from "./FormErrorMessage";

const formLabel = {
  nameLabel: "Your name",
  emailLabel: "Your email address",
  messageLabel: "How can we help?",
  ctaCaption: "Send message",
};

const { ctaCaption, emailLabel, messageLabel, nameLabel } = formLabel;

// Formspark Validation URL
const FORMSPARK_ACTION_URL =
  process.env.FORMSPARK_ACTION_URL || "https://submit-form.com/T930LuAgW";

const ContactForm = () => {
  const { register, handleSubmit, control, formState } = useForm({
    mode: "onChange",
  });

  const { errors } = formState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e: any) => {
    // e.preventDefault();
    const FORM_ACTION = FORMSPARK_ACTION_URL;
    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <>
      <DevTool control={control} placement="top-left" />
      <section
        className="flex justify-center items-center py-12 lg:py-20"
        id="contact-form-section"
      >
        {/* HEADER */}
        <div className="flex flex-col w-full items-center py-4 lg:py-16">
          <div className="flex flex-col-reverse gap-y-2 uppercase text-center mb-12 lg:mb-20">
            <h3 className="font-bold text-4xl lg:text-5xl xl:text-7xl">
              {contactMarkup.title}
            </h3>
            <p className="text-gray-400 text-sm">{contactMarkup.caption}</p>
          </div>
          {/* === FORM START === */}
          <form
            id="form"
            onSubmit={handleSubmit(formSubmit)}
            className="w-4/5 flex flex-col"
            noValidate
          >
            <div className="flex max-lg:flex-col justify-between w-full max-lg:gap-y-4 lg:gap-x-8 mb-4 lg:mb-6">
              {/* FORM SECTION: NAME */}
              <div className="w-full flex flex-col p-2">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="" className="text-theme xl:text-xl">
                    {nameLabel}
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Name must be 6 characters minimum",
                      },
                      maxLength: {
                        value: 24,
                        message: "Entered name is too long",
                      },
                      pattern: {
                        // value: /^[A-Z][a-z]+$/gm,
                        value: /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/gm,
                        message: "The entered name is invalid",
                      },
                    })}
                    type="text"
                    id="name"
                    inputMode="text"
                    value={name}
                    onChange={(e) =>
                      setName(
                        e.target.value.charAt(0).toUpperCase() +
                          e.target.value.substring(1)
                      )
                    }
                    spellCheck={false}
                    title="Please enter your name. Example: Jay Doe"
                    placeholder="Enter your name"
                    className="bg-transparent border border-transparent border-b-theme border-b-2 outline-none focus:border-theme p-2 xl:text-2xl"
                  />
                </div>
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
              </div>
              {/* FORM SECTION: EMAIL */}
              <div className="w-full flex flex-col p-2">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="" className="text-theme xl:text-xl">
                    {emailLabel}
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email address required",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Entered email address is invalid",
                      },
                    })}
                    type="email"
                    id="email"
                    name="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    autoComplete="off"
                    spellCheck={false}
                    title="Please enter your email address. Example: yourname@email.com"
                    placeholder="Enter your email address"
                    className="bg-transparent border border-transparent border-b-theme border-b-2 outline-none focus:border-theme p-2 xl:text-2xl"
                  />
                </div>
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </div>
            </div>
            {/* FORM SECTION: MESSAGE */}
            <div className="mb-6 flex flex-col p-2">
              <div className="flex flex-col">
                <label htmlFor="" className="text-theme xl:text-xl">
                  {messageLabel}
                </label>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                    minLength: {
                      value: 20,
                      message: "Message must be 20 characters minimum",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Entered message is too long",
                    },
                  })}
                  id="message"
                  name="message"
                  rows={5}
                  spellCheck={true}
                  title="Please enter any questions/comments you may have."
                  value={message}
                  onChange={(e) =>
                    setMessage(
                      e.target.value.trimStart().charAt(0).toUpperCase() +
                        e.target.value.substring(1)
                    )
                  }
                  placeholder="Tell us how we can help you"
                  className="bg-transparent border border-transparent border-b-theme border-b-2 outline-none focus:border-theme p-2 xl:text-2xl"
                ></textarea>
              </div>
              <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
            </div>
            {/* CTA */}
            <div className="flex justify-center">
              <button
                id="submit"
                type="submit"
                className="group flex justify-center items-center gap-x-4 bg-black rounded-full border border-theme px-6 py-3 xl:text-2xl hover:bg-theme focus-visible:bg-theme"
              >
                <p className="capitalize font-semibold text-white group-hover:text-black">
                  {ctaCaption}
                </p>
                <div className="bg-theme rounded-full w-4 h-4 group-hover:bg-black group-focus-visible:bg-white"></div>
              </button>
            </div>
          </form>
          {/* === FORM END === */}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
