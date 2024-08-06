"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className="py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 bg-gray-100 rounded-md dark:bg-gray-800">
              <h3 className="text-lg font-medium">What is your product?</h3>
              <PlusIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                Our product is a powerful tool that helps you streamline your
                workflow and increase productivity. It's designed to simplify
                complex tasks and automate repetitive processes, so you can
                focus on what really matters.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 bg-gray-100 rounded-md dark:bg-gray-800">
              <h3 className="text-lg font-medium">How much does it cost?</h3>
              <PlusIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                We offer a range of pricing plans to suit different needs and
                budgets. Our basic plan starts at $9 per month, and we also have
                enterprise-level solutions for larger teams. You can check our
                pricing page for more details.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 bg-gray-100 rounded-md dark:bg-gray-800">
              <h3 className="text-lg font-medium">How do I get started?</h3>
              <PlusIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                Getting started is easy! Simply sign up for an account on our
                website and you'll be guided through the setup process. We have
                comprehensive documentation and a friendly support team to help
                you every step of the way.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 bg-gray-100 rounded-md dark:bg-gray-800">
              <h3 className="text-lg font-medium">Do you offer any support?</h3>
              <PlusIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                Absolutely! We have a dedicated support team available to assist
                you with any questions or issues you may have. You can reach us
                via email, phone, or our online chat. We also have a
                comprehensive knowledge base with helpful articles and
                tutorials.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </motion.div>
  );
};

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default FAQ;
