"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillAnimation() {
  useEffect(() => {
    const rows = gsap.utils.toArray(".skill-row");

    rows.forEach((row: any) => {
      gsap.from(row, {
        y: -40,               // drop from top
        opacity: 0,
        rotateX: 60,          // scroll roll effect
        transformOrigin: "top center",
        duration: 0.8,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: row,
          start: "top 100%",   // 🔥 animate row when THIS row enters
          toggleActions: "play none none none",
          scrub: 1,
        //   markers: true
        },
      });
    });
  }, []);

  return null;
}
