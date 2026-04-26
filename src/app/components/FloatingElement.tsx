"use client";

import Link from "next/link";

export default function FloatingElement() {
  return (
    <div className="absolute w-full bottom-25 flex items-end justify-end">
      <Link
        href="/about"
        className="bg-white/5 hover:bg-white/9 active:bg-white/3 group shadow-lg shadow-black/50 transition-colors backdrop-blur-2xl rounded-l-full p-4"
      >
        <div className="text-sm group-hover:max-w-30 group-hover:max-h-10 max-h-0 max-w-0 overflow-hidden transition-all">
          More About Me
        </div>
      </Link>
    </div>
  );
}
