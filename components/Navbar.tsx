"use client";
// import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { setTimeout } from "timers/promises";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Skill", id: "skill" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

// type Props = {
//   click: boolean;
//   setClick: (value: boolean) => void;
// };

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("home");

  // Hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 50) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);

      // Update active section
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            currentScrollY >= offsetTop - 100 &&
            currentScrollY < offsetTop + offsetHeight - 100
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`sticky top-0 py-6 z-10 transition-transform duration-500 flex justify-center min-w-full ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center md:justify-between p-3 justify-end text-xl mx-12 font-obitron font-bold cursor-pointer w-full">
          <div className="hidden md:flex relative">
            <p className="font-obitron text-3xl text-cyan-300">Wei</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute -top-8 -right-2  w-20 h-20 opacity-20 pointer-events-none"
            >
              <path
                d="M240 0H0v240a240 240 0 0 1 240 240h240V240A240 240 0 0 1 240 0Z"
                fill="#00B8DB"
              ></path>
            </svg>
          </div>
          <div className="hidden md:flex gap-12 text-[#EAEAEA]">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-amber-400 relative nav-item ${
                  active === item.id ? "text-amber-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
