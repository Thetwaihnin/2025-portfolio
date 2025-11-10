"use client";

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>(".boxs");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 90%",
              scrub: 1,
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: rightColumnRef }
  );

  useEffect(() => {
    const el = ref.current;
    const tl = textRef.current;
    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      tl,
      { opacity: 0, x : -100 },
      {
        x: 30,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      className="p-6 relative md:grid md:grid-cols-2 md:mx-0 mt-6 md:mt-0 min-h-screen h-full justify-center flex flex-col items-center"
      id="about"
    >
      <div className="relative flex flex-col justify-between items-center text-center">
        <h1
          ref={textRef}
          className="text text-3xl md:text-5xl font-obitron text-cyan-300 font-bold text-shadow-lg text-shadow-cyan-500"
        >
          About Me
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute -top-6 left-0 w-30 h-30 opacity-20 pointer-events-none"
        >
          <path
            d="m337 320 63-160h-80a160 160 0 1 0-320 0h160L80 320h80a160 160 0 1 0 320 0H337Z"
            fill="#00B8DB"
          ></path>
        </svg>
        <div className=" z-30" ref={ref}>
          <Image
            src="/images/girl.png"
            className="drop-shadow-[0_0_15px_cyan] transition duration-300 hover:scale-105"
            alt="me"
            width={400}
            height={400}
          />
        </div>
        <div className="md:mt-4 md:w-2/3 w-[90%]">
          <p className="font-serif text-xl text-cyan-50 ">
              Frontend developer focused on building clean, responsive, and modern interfaces using React, Next.js, TypeScript, and Tailwind. Always learning and improving through hands-on projects.
          </p>
        </div>
        <div className="md:w-2/3 z-0 w-[95%] absolute h-2/3 shadow-md shadow-cyan-300 -bottom-10 bg-white/20 rounded-3xl" />
      </div>
      <div
        id="rightColumn"
        ref={rightColumnRef}
        className="flex flex-col md:mr-4 mt-16 md:mt-0"
      >
        <div
          ref={box1Ref}
          className="bg-red-400 boxs p-4 mb-4 shadow-md shadow-cyan-300 rounded-2xl hover:scale-105 transition duration-300"
        >
          <h1 className="font-obitron text-3xl text-shadow-lg text-shadow-black text-[#D0083A]">
            What I am interested
          </h1>
          <div className="mt-3">
            <ul className="font-serif text-lg text-black">
              <li>
                I'm interested in building beautiful, fast user interfaces, exploring UI animations, and learning more about full-stack development as I grow.
              </li>
              {/* <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                modi!
              </li> */}
            </ul>
          </div>
        </div>
        <div
          ref={box2Ref}
          className="bg-amber-300 boxs shadow-md shadow-cyan-300 p-4 rounded-2xl hover:scale-105 transition duration-300"
        >
          <h1 className="font-obitron text-3xl text-shadow-lg text-shadow-black text-amber-500">
            Education
          </h1>
          <div className="mt-3">
            <ul className="font-serif text-lg text-black">
              <li>
                University of Computer Studies, Yangon (2020)
              </li>
              <li>
                University of People
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={box3Ref}
          className="bg-blue-600 boxs rounded-2xl shadow-md shadow-cyan-300 mt-4 p-3 hover:scale-105 transition duration-300"
        >
          <h1 className="font-obitron text-3xl text-shadow-lg text-shadow-black text-cyan-500">
            Experience
          </h1>
          <div className="mt-4">
            <p className="font-serif text-lg text-white">
              Completed a 3-month training program, contributing to UI development,
               API integration, and feature implementation using Next.js, MUI, and Laravel.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-px bg-cyan-300 bottom-0"></div>
    </div>
  );
};

export default AboutMe;
