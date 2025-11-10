"use client";
import { projectData } from "@/app/data/project";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useMediaQuery from "@/app/hook/useMediaQuery";
import Swipedown from "./Swipedown";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(projectData[0]);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!overlayRef.current) return;
    const overlay = overlayRef.current;
    const parent = overlay.parentElement;
    if (!parent) return;

    // Start hidden
    gsap.set(overlay, { y: "100%" });

    const enter = () =>
      gsap.to(overlay, {
        y: "0%",
        duration: 0.6,
        ease: "power3.out",
      });

    const leave = () =>
      gsap.to(overlay, {
        y: "100%",
        duration: 0.4,
        ease: "power3.in",
      });

    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);

    return () => {
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, [selectedImage]);

  return (
    <div
      className="w-full relative flex flex-col p-6 justify-center items-center min-h-screen"
      id="projects"
    >
      <div className="w-full font-obitron mb-6 text-center text-cyan-300 font-bold text-3xl">
        Recent Projects
      </div>

      {isMobile ? (
        <Swipedown />
      ) : (
        <div className="grid grid-cols-4 w-full p-6 h-full">
          <div className="gap-3 flex flex-col p-2 h-[600px] overflow-x-hidden overflow-y-auto">
            {projectData.map((movie, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(movie)}
                className="boxs relative rounded-2xl overflow-hidden border-2 border-cyan-300 cursor-pointer shadow-xl hover:drop-shadow-[0_0_10px_black] hover:scale-105 duration-300"
              >
                <img
                  src={movie.src}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          <div className="col-span-3 w-auto h-[600px] p-2">
            <div className="relative w-full h-full border-2 border-cyan-300 rounded-2xl overflow-hidden flex justify-center items-center">
              <Image
                src={selectedImage.src}
                alt="Selected Project"
                width={1200}
                height={600}
                className="max-w-full max-h-full object-contai rounded-xl"
              />

              <div
                ref={overlayRef}
                className="absolute cursor-pointer inset-0 bg-black/60 flex flex-col justify-end p-4 text-white"
              >
                <h3 className="text-xl font-serif mx-2">
                  {selectedImage.title}
                </h3>
                <p className="text-md text-serif mx-2">{selectedImage.description}</p>
                <div className="flex mt-4">
                  <button className="px-3 hover:bg-blue-500 transition duration-300 cursor-pointer mx-2 rounded-lg py-2 bg-slate-500 font-obitron">
                    Demo Video
                  </button>
                    <a
                      href="#"
                      title="source"
                      className="rounded-md px-3 py-2 bg-cyan-50 cursor-pointer "
                    >
                      <Image
                        src="/github.png"
                        alt="github"
                        width={25}
                        height={25}
                      />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute w-full h-px bg-cyan-300 bottom-0"></div>
    </div>
  );
}
