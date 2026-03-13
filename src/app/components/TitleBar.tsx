"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const currentElm = document.getElementById(pathname.split("/")[1]);
    const currentCord = currentElm?.getBoundingClientRect();
    const follower = document.getElementById("follower");
    // alert(`${(currentCord?.x, currentCord?.y)}`);

    if (follower) {
      follower.style.left = `${currentCord?.x}px`;
      follower.style.width = `${currentElm?.clientWidth}px`;
    }
  }, [pathname]);

  return (
    <div className="absolute z-20 flex justify-center top-0 w-full p-3 #backdrop-blur-2xl">
      <div
        id="follower"
        className="absolute p-4 rounded-xl mt-4 bg-white/15 transition-all duration-500"
      ></div>

      <div className="flex sm:gap-6 gap-2 justify-around px-12 p-4 relative transition-all">
        {routes.map((route) => (
          <Link
            key={route.name}
            id={route.name.toLowerCase()}
            href={route.path}
            className={`${pathname.includes(route.path) ? "text-white /underline underline-offset-5" : "text-gray-400"} transition-all px-4 p-1 rounded-xl //hover:bg-white/10`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
