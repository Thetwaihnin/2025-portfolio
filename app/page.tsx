"use client";

import AboutMe from "@/components/AboutMe";
import Home from "./home/page";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";

export default function page() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Navbar/>
      <div className="fixed top-3 z-30 right-4">
        <Bars3Icon
          className="md:hidden w-8 h-8 text-white cursor-pointer"
          onClick={() => setClick(!click)}
        />
      </div>
      <main className="flex flex-col overflow-x-hidden min-h-screen w-full">
        <Home />
        <AboutMe />
        <Skill/>
        <Project/>
        <Contact/>
      </main>
      {click && <Sidebar setClick={setClick} />}
      <Footer/>
    </>
  );
}
