"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", path: "/home" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  // { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [updatePosition, setUpdatePosition] = useState(0);
  const [hoverElement, setHoverElement] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => setUpdatePosition(Math.random()), 400);
    });

    let counter = 0;
    const autoUpdaterId = setInterval(() => {
      counter += 500;
      setUpdatePosition(Math.random());
      if (counter > 3000) clearInterval(autoUpdaterId);
    }, 500);
    // return () => window.removeEventListener("resize", );
  }, []);

  useEffect(() => {
    const currentElm = document.getElementById("nav-" + pathname.split("/")[1]);
    const currentCord = currentElm?.getBoundingClientRect();
    const follower = document.getElementById("nav-select-follower");
    const hoverFollower = document.getElementById("nav-hover-follower");

    if (hoverFollower) {
      hoverFollower.style.display = "block";
      hoverFollower.style.opacity = "100%";

      if (hoverElement) {
        const hovered = document.getElementById("nav-" + hoverElement);
        const hoveredCoord = hovered?.getBoundingClientRect();

        hoverFollower.style.left = `${hoveredCoord?.x}px`;
        hoverFollower.style.width = `${hovered?.clientWidth}px`;
        hoverFollower.style.height = `${hovered?.clientHeight}px`;
        hoverFollower.style.display = "block";
      } else {
        hoverFollower.style.left = `${currentCord?.x}px`;
        hoverFollower.style.width = `${currentElm?.clientWidth}px`;

        setTimeout(() => {
          if (follower?.style.left === hoverFollower.style.left)
            hoverFollower.style.opacity = "0";
        }, 200);
      }
    }

    if (follower) {
      follower.style.left = `${currentCord?.x}px`;
      follower.style.width = `${currentElm?.clientWidth}px`;
      follower.style.height = `${currentElm?.clientHeight}px`;
      follower.style.display = "block";
    }
    //alert(`positions ${follower.style.left + "  " + ""}`)
  }, [pathname, updatePosition, hoverElement]);

  return (
    <div className="absolute w-full flex justify-center min-[850px]:hidden py-6 px-8 z-20 bottom-0">
      <div
        id="nav-select-follower"
        className="absolute hidden translate-y-2 rounded-full bg-white/8  z-20 pointer-events-none duration-400 transition-all"
      ></div>

      <div
        id="nav-hover-follower"
        className="absolute hidden rounded-full bg-white/5 translate-y-2 z-20 pointer-events-none duration-400 transition-all"
      ></div>

      <div className="relative items-center w-full max-w-140 flex justify-around shadow-lg shadow-black/50 transition-all rounded-full py-2 px-2 backdrop-blur-2xl bg-white/8">
        {routes.map((route) => (
          <Link
            key={route.name}
            id={`nav-${route.name.toLowerCase()}`}
            href={pathname.includes(route.path) ? "" : route.path}
            className={`${pathname.includes(route.path) ? "text-white" : "text-gray-400"} rounded-full px-6 py-1.5 transition-all`}
            onMouseEnter={() =>
              pathname.includes(route.path)
                ? null
                : setHoverElement(route.name.toLowerCase())
            }
            onMouseLeave={() => setHoverElement(null)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
