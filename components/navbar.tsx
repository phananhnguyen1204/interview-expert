"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/header";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 flex justify-between items-center border-b border-slate-500">
      <div className="container flex justify-between mx-auto items-center ">
        <div>
          <h1>Logo here</h1>
        </div>
        <div className=" items-center space-x-6 hidden lg:block">
          <Link
            href="/"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            href="/mock-interview"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Mock Interview
          </Link>
          <Link
            href="/code-editor"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Code Editor
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Contact
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <Header />
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} w-full`}>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link
            href="/"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            href="/mock-interview"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Mock Interview
          </Link>
          <Link
            href="/code-editor"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Code Editor
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-black hover:text-orange-400"
          >
            Contact
          </Link>
          <div>
            <Header />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
