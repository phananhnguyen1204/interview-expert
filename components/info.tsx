"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Info() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className="container px-4 md:px-6"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              New Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Faster iteration. More innovation.
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The platform for rapid progress. Let your team focus on shipping
              features instead of managing infrastructure with automated CI/CD,
              built-in testing, and integrated collaboration.
            </p>
          </div>
          <ul className="grid gap-2 py-4">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Make collaboration seamless with built-in code review tools.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Automate your workflow with continuous integration and delivery.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Deploy to the cloud with a single click and scale with ease.
            </li>
          </ul>
        </div>
        <img
          src="/assets/image1.png"
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
        />
      </div>
    </motion.div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
