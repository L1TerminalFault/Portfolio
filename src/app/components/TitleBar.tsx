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

export default function TitleBar() {
  const pathname = usePathname();
  const [updatePosition, setUpdatePosition] = useState(0);
  const [hoverElement, setHoverElement] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => setUpdatePosition(Math.random()), 1000);
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
    const currentElm = document.getElementById(pathname.split("/")[1]);
    const currentCord = currentElm?.getBoundingClientRect();
    const follower = document.getElementById("select-follower");
    const hoverFollower = document.getElementById("hover-follower");

    if (hoverFollower) {
      hoverFollower.style.display = "block";
      hoverFollower.style.opacity = "100%";

      if (hoverElement) {
        const hovered = document.getElementById(hoverElement);
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
  }, [pathname, updatePosition, hoverElement]);

  return (
    <div className="absolute w-full flex justify-center py-6 px-12 z-20 top-0">
      <div
        id="select-follower"
        className="absolute hidden rounded-full bg-white/6 translate-y-3.5 z-25 pointer-events-none duration-400 transition-all"
      ></div>

      <div
        id="hover-follower"
        className="absolute hidden rounded-full bg-white/5 translate-y-3.5 z-20 pointer-events-none duration-400 transition-all"
      ></div>

      <div className="relative w-full flex justify-between shadow-lg shadow-black/50 xl:w-7/8 /xl:justify-around transition-all rounded-full py-2 px-2 backdrop-blur-2xl bg-white/4">
        <Link
          href="/"
          className="flex gap-2 items-center px-8 hover:bg-white/2 transition-colors rounded-full"
        >
          <div className="text-2xl font-semibold max-md:text-xl">Portfolio</div>
          <div className="size-2 blur-[2px] rounded-full animate-pulse bg-orange-500" />
        </Link>
        <div className="flex gap-4 max-[850px]:hidden rounded-full bg-[#00000b] relative p-1.5 items-center">
          {routes.map((route) => (
            <Link
              key={route.name}
              id={route.name.toLowerCase()}
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
        <Link
          href="/"
          className="py-2 px-6 items-center max-lg:text-sm flex bg-gray-950 rounded-full hover:bg-gray-950/65 active:bg-gray-950/60 transition-all"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
