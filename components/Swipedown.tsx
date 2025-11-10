"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { projectData } from "@/app/data/project";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Swipedown() {
  const overlayRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    overlayRefs.current.forEach((overlay) => {
      if (!overlay) return;

      const parent = overlay.parentElement;
      if (!parent) return;

      // Hidden initially
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
    });
  }, []);

  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="swiper rounded-2xl"
    >
      {projectData.map((p, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full border-2 border-cyan-300 rounded-2xl overflow-hidden flex justify-center items-center">
            <Image
              src={p.src}
              alt={p.title}
              width={1200}
              height={600}
              className="max-w-full max-h-full object-conver rounded-xl"
            />

            <div
              ref={(el) => {
                if (el) overlayRefs.current[i] = el;
              }}
              className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
              <div className="flex mt-4 justify-center">
                <button className="px-3 hover:bg-blue-500 transition duration-300 cursor-pointer mx-2 rounded-lg py-2 bg-slate-500 font-obitron">
                  Demo Video
                </button>
                <a
                  href={p.source}
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
