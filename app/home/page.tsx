"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Home = () => {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  //  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "words",
    });

    gsap.from(split.words, {
      y: 40,
      opacity: 0,
      stagger: 0.28,
      ease: "back.out(1.7)",
      duration: 1.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => split.revert();
  }, []);

  //  useEffect(() => {
  //   if (!textRef.current) return;

  //   // split into words
  //   const split = new SplitText(textRef.current, {
  //     type: "words",
  //   });

  //   gsap.from(split.words, {
  //     y: 40,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "back.out(1.7)",
  //     stagger: 0.18,
  //   });

  //   return () => {
  //     split.revert(); // cleanup on unmount
  //   };
  // }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions && context.conditions.isDesktop) {
          if (col1Ref.current && col2Ref.current) {
            gsap.from(col1Ref.current, {
              x: -150,
              opacity: 0,
              duration: 3,
              ease: "power3.out",
            });

            gsap.from(col2Ref.current, {
              x: 150,
              opacity: 0,
              duration: 3,
              ease: "power3.out",
              delay: 0.3,
            });
          }
        }

        if (context.conditions && context.conditions.isMobile) {
          if (col1Ref.current && col2Ref.current) {
            gsap.from([col1Ref.current, col2Ref.current], {
              y: 50,
              opacity: 0,
              duration: 3,
              ease: "power3.out",
              stagger: 0.2,
            });
          }
        }

        return () => {};
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      className="md:grid md:grid-cols-2 relative h-full min-h-screen overflow-hidden flex flex-col justify-center w-full"
      id="home"
    >
      <div
        className="w-full max-w-600 relative mx-auto flex flex-col justify-center"
        ref={col1Ref}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_cyan]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop stopColor="rgba(248,55,55,1)" offset="0%" />
              <stop stopColor="rgba(8,232,255,1)" offset="100%" />
            </linearGradient>

            {/* Define clip path using the blob path */}
            <clipPath id="blob-clip">
              <path
                d="M20.5,-29.5C24.6,-25.2,24.7,-16.6,26.3,-9.1C28,-1.6,31.3,4.8,31.7,12.3C32,19.7,29.3,28.1,23.5,30.5C17.7,32.9,8.9,29.3,0.8,28.2C-7.2,27,-14.5,28.5,-18.7,25.6C-23,22.7,-24.2,15.5,-25.7,8.8C-27.3,2.2,-29.1,-3.9,-27.5,-9C-25.9,-14,-20.9,-18,-15.8,-21.9C-10.6,-25.9,-5.3,-29.8,1.4,-31.8C8.2,-33.8,16.4,-33.8,20.5,-29.5Z"
                transform="translate(50 50)"
              />
            </clipPath>
          </defs>

          {/* Blob path background */}
          <path
            fill="url(#sw-gradient)"
            d="M20.5,-29.5C24.6,-25.2,24.7,-16.6,26.3,-9.1C28,-1.6,31.3,4.8,31.7,12.3C32,19.7,29.3,28.1,23.5,30.5C17.7,32.9,8.9,29.3,0.8,28.2C-7.2,27,-14.5,28.5,-18.7,25.6C-23,22.7,-24.2,15.5,-25.7,8.8C-27.3,2.2,-29.1,-3.9,-27.5,-9C-25.9,-14,-20.9,-18,-15.8,-21.9C-10.6,-25.9,-5.3,-29.8,1.4,-31.8C8.2,-33.8,16.4,-33.8,20.5,-29.5Z"
            transform="translate(50 50)"
            stroke="url(#sw-gradient)"
            strokeWidth="0"
          />

          <image
            href="/caroline_cat.png"
            width="70"
            height="100"
            clipPath="url(#blob-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <div
        className="flex flex-col mb-6 md:mb-0 relative overflow-x-hidden justify-center items-center md:items-start"
        ref={col2Ref}
      >
        <Image
          src="/images/graph.png"
          alt="graph"
          width={400}
          height={400}
          className="absolute hidden md:flex bottom-1/3 -right-8 object-contain -z-10"
        />
        <p
          ref={textRef}
          className="font-obitron md:text-start text-3xl md:text-6xl text-center text-cyan-300"
        >
          Hello! I'm Thet Wai Hnin
        </p>
        <p className="font-obitron text-start text-md text-white mt-3">
          Frontend Developer
        </p>
        <div className="mt-6 flex justify-between">
          <div className="px-3 py-2 rounded-md bg-amber-300 hover:text-white hover:bg-[#D0083A] transition duration-300 cursor-pointer font-obitron">
            <a href="/resume/thetwaihnin-2025-resume.pdf">Get Resume</a>
          </div>
          <div className="flex gap-3 ml-3">
            <a
              href="https://github.com/Thetwaihnin"
              download
              className="rounded-md px-3 py-2 bg-cyan-50 cursor-pointer "
            >
              <Image src="/github.png" alt="github" width={25} height={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/thet-wai-hnin-289b90288"
              className="rounded-md px-3 py-2 bg-cyan-50 cursor-pointer"
            >
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-px bg-cyan-300 bottom-0"></div>
    </div>
  );
};

export default Home;
