"use client";

import Image from "next/image";
import ProgressCircle from "./ProgressCirlce";
import { skills } from "@/app/data/skill";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SkillAnimation from "./SkillAnimation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Skill = () => {
  useGSAP(() => {
    gsap.from(".skill", {
      x: -200,
      opacity:0,
      duration: 2,
      scrollTrigger: {
        trigger: '.skill',
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.from(".circle", {
      x: 0,
      opacity:0,
      rotate: 360,
      duration: 3,
      scrollTrigger: {
        trigger: '.circle',
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
        // markers: true,
      },
    });
  });
  // const skillRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //   if (!skillRef.current) return;

  //   const rows = gsap.utils.toArray(".skill-row") as HTMLElement[];

  //   gsap.from(rows, {
  //     y: -80,               // ✅ drop from top
  //     opacity: 0,
  //     rotateX: 45,          // ✅ ancient scroll tilt
  //     transformOrigin: "top center",
  //     duration: 0.8,
  //     ease: "back.out(1.4)",
  //     stagger: 0.15,        // ✅ one by one
  //     scrollTrigger: {
  //       trigger: skillRef.current,
  //       start: "top 80%",   // ✅ animate when visible
  //     },
  //   });
  // }, []);

  return (
    <div
      id="skill"
      className="p-6 relative mt-6 md:mt-0 min-h-screen h-full justify-center flex flex-col items-center"
    >
      <h1 className="font-obitron skill text-3xl md:text-4xl text-cyan-300 text-shadow-md text-shadow-cyan-500 font-bold">
        MY EXPERTISE
      </h1>
      {/* <div className="mt-4 flex gap-8 p-6"></div> */}
      <div className="flex gap-8 p-10 mt-6 circle">
        <ProgressCircle percentage={85} label="85%" name="Frontend" />
        <ProgressCircle percentage={50} label="50%" name="Backend" />
        <ProgressCircle percentage={70} label="70%" name="Tools" />
      </div>
      <div className="mt-6  md:grid md:grid-cols-4 gap-10 ">
        <SkillAnimation />

        {skills.map((s, i) => (
          <div className=" flex flex-col mt-12 md:mt-0" key={i}>
            <h1 className="font-obitron mb-3 text-shadow-lg text-shadow-slate-900 text-3xl mx-auto text-white">
              {s.category}
            </h1>

            <div className="flex flex-col gap-6 my-4">
              {s.items.map((item, idx) => (
                <div
                  className="skill-row flex gap-4 items-center"
                  key={`${item}-${idx}`}
                >
                  {/* Skill Icon */}
                  <div className="rounded-lg shadow-[0_0_4px_cyan] bg-white/20 drop-shadow-[0_0_2px_cyan] w-18 h-12">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-full h-full p-2 "
                    />
                  </div>

                  {/* Progress Bar */}
                  <div className="flex flex-col w-48 md:w-[400px] mx-auto my-3">
                    <span className="mr-2 text-start text-lg text-amber-50 font-obitron">
                      {item.name}
                    </span>

                    <div className="relative w-full">
                      <div className="w-full bg-slate-900 rounded-full h-2 border border-cyan-500 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-amber-500 to-red-500 h-2 transition-all duration-700"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* management  */}
        {/* <div className="bg-white/20 p-3 flex flex-col">
          <div className="flex">Hello</div>
        </div> */}
      </div>
      <div className="absolute w-full h-px bg-cyan-300 bottom-0"></div>
    </div>
  );
};

export default Skill;
