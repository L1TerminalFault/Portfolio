"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  { name: "Home", path: "/home" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function TitleBar() {
  const pathname = usePathname();
  const [updatePosition, setUpdatePosition] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setUpdatePosition(Math.random());
    });
    // return () => window.removeEventListener("resize", );
  });

  useEffect(() => {
    const currentElm = document.getElementById(pathname.split("/")[1]);
    const currentCord = currentElm?.getBoundingClientRect();
    const follower = document.getElementById("follower");

    if (follower) {
      follower.style.left = `${currentCord?.x}px`;
      follower.style.width = `${currentElm?.clientWidth}px`;
      follower.style.display = "block";
    }
  }, [pathname, updatePosition]);

  return (
    <div className="absolute z-20 flex justify-center top-0 w-full p-3 #backdrop-blur-2xl">
      <div
        id="follower"
        className="absolute hidden md:p-4 p-3 rounded-lg mt-4 bg-white/10 border-t border-white/10 shadow shadow-gray-950 transition-all duration-500"
      ></div>

      <div className="flex sm:gap-6 gap-2 justify-around px-12 p-4 relative transition-all">
        {routes.map((route) => (
          <Link
            key={route.name}
            id={route.name.toLowerCase()}
            href={route.path}
            className={`${pathname.includes(route.path) ? "text-white /underline underline-offset-5" : "text-gray-400 hover:bg-white/5"} transition-all opacity-0 duration-200 md:px-4 px-3 active:p-2 max-md:text-xs p-1 rounded-lg //hover:bg-white/10`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
