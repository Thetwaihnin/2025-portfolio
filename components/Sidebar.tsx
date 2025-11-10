"use client";

import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { gsap } from "gsap";

type Props = {
  setClick: (value: boolean) => void;
};

const Sidebar = ({ setClick }: Props) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.4, ease: "power3.out" }
    );

    // return () => {
    //   gsap.to(sidebarRef.current, { x: "100%", duration: 0.3, ease: "power3.in" });
    // };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="flex flex-col w-64 fixed z-50 right-0 top-0 h-screen px-4 py-8 overflow-y-auto bg-[#0A31F5] border-r rtl:border-r-0 rtl:border-l"
    >
      <div className="flex justify-end items-center h-8 w-full">
        <button type="button" onClick={() => setClick(false)} className="cursor-pointer">
          <XMarkIcon className="w-8 h-8 text-cyan-50" />
        </button>
      </div>

      <div className="flex flex-col justify-between font-obitron flex-1 mt-6">
        <nav>
          <a className="flex cursor-pointer items-center px-4 py-2 text-cyan-300 hover:bg-[#343454] rounded-md" href="#home">
            <span className="mx-4 font-medium">Home</span>
          </a>
          <a className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 hover:bg-[#343454] rounded-md" href="#about">
            <span className="mx-4 font-medium">About Me</span>
          </a>
          <a className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 hover:bg-[#343454] rounded-md" href="#projects">
            <span className="mx-4 font-medium">Projects</span>
          </a>
          <a className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 hover:bg-[#343454] rounded-md" href="#skill">
            <span className="mx-4 font-medium">Skills</span>
          </a>
          <a className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 hover:bg-[#343454] rounded-md" href="#contact">
            <span className="mx-4 font-medium">Contact</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
