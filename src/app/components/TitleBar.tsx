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
    const currentCord = document
      .getElementById(pathname.split("/")[1])
      ?.getBoundingClientRect();
    const follower = document.getElementById("follower");
    // alert(`${(currentCord?.x, currentCord?.y)}`);

    if (follower) {
      follower.style.left = `${currentCord?.x}px`;
    }
  }, [pathname]);

  return (
    <div className="absolute flex justify-center top-0 w-full p-3 #backdrop-blur-2xl">
      <div></div>

      <div className="flex gap-16 px-12 p-4 relative transition-all //bg-gray-900">
        {/* <div className="absolute inset-1 bg-red-100"> */}
        {/* <div */}
        {/*   className="px-14 absolute top-0 left-0 py-4 bg-white/20 rounded-2xl transition-all" */}
        {/*   id="follower" */}
        {/* ></div> */}
        {/* </div> */}
        {routes.map((route) => (
          <Link
            key={route.name}
            id={route.name.toLowerCase()}
            href={route.path}
            className={`${pathname.includes(route.path) ? "//font-semibold text-white underline underline-offset-5" : "text-gray-400"} transition-all`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
