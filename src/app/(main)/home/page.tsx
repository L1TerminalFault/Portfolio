"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

import SplitText from "@/app/components/SplitText";
import cineverseImage from "@/../public/cineverse.png";
import NextJsIcon from "@/../public/nextjs-icon.svg";
import TailwindCSSIcon from "@/../public/tailwind.png";
import MongoDBIcon from "@/../public/mongodb.ico";
import ClerkIcon from "@/../public/clerk.png";

const preferredTechStack = [
  {
    name: "NextJs",
    icon: NextJsIcon,
    detail:
      "The main backbone of the web based projects due to its clean structure and simplified boundary of front and backend",
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSSIcon,
    detail:
      "Styling engine for all non-animation categories, for the animations native CSS is used",
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
    detail:
      "The preferred database service provider other databases also might be used",
  },
  {
    name: "Clerk",
    icon: ClerkIcon,
    detail:
      "The main user auth and session flow engine providing dependable backend and premade components",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col slide-to-left w-full h-full -z-10">
      <div className="flex w-full h-full items-center justify-center">
        {/* <div className="flex flex-col w-full h-full "> */}
        {/* NOTE: Edit global padding just on this div */}
        <div className="flex max-sm:flex-col-reverse gap-8 max-w-425 scrollbar-hidden overflow-scroll p-0 sm:p-8 md:p-12 lg:p-16 xl:p-30 items-end justify-center w-full h-full">
          <div className="w-full h-full flex flex-col gap-30 max-2xl:gap-20 max-lg:gap-10 items-center justify-end max-sm:justify-start">
            <div className="flex flex-col gap-1 h-max pl-3 w-full z-10 text-gray-400 text-xs fade-in opacity-0">
              <div className="px-1">Preferred Tech Stack</div>

              <div className="flex relative gap-2 flex-wrap z-20">
                {preferredTechStack.map((each) => (
                  <div
                    key={each.name}
                    className="flex relative gap-1 items-center group z-20 rounded-2xl bg-white/5 transition-colors hover:bg-white/10 pr-2 text-gray-400"
                  >
                    <Image alt="" src={each.icon} className="size-6" />
                    {each.name}

                    <div className="absolute flex translate-y-24 z-50 backdrop-blur-2xl max-w-145 rounded-2xl gap-4 p-6 hidden group-hover:flex bg-black/50 transition-all shadow-md shadow-black/70">
                      <div className="shrink-0">
                        <Image alt="" src={each.icon} className="size-18" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="text-lg font-bold">{each.name}</div>
                        <div className="text-sm text-gray-400">
                          {each.detail}
                        </div>
		      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex -z-10 flex-col pb-30 gap-4 w-full /h-full justify-end">
              <div className="text-5xl/tight slide-to-bottom max-lg:text-4xl/tight max-sm:text-xl/tight font-bold">
                <SplitText
                  text="Rex renderer X on l, NextJs developer"
                  className=""
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  textAlign="start"
                />
              </div>
              <div className="text-gray-500 slide-to-right max-lg:text-sm max-sm:text-xs">
                NextJs developer with the latest and cutting edge frameworks for
                the least latency and maximum performance for web, more than
                3yrs of experience using Tailwind CSS for styling and MongoDB as
                main database server
              </div>
              <div className="text-gray-500 slide-to-left max-lg:text-sm max-sm:text-xs">
                And ReactNative with NativeWind and also NextJs backend and
                infrastructure for General Android Development and Kotlin with
                Jetpack Compose for Native Android Development
              </div>
            </div>
          </div>

          <div className="flex slide-to-top opacity-0 items-center w-full px-5 h-full group max-h-190">
            <div className="bg-[#ffffff15] p-2 rounded-2xl lg:rounded-4xl w-full flex-1 h-full justify-end flex flex-col">
              <div className="p-2 px-4 text-gray-400 flex justify-between">
                Top Project
                <Link
                  target="_blank"
                  href={"https://cineverse-entertainment.vercel.app"}
                  className="p-1 rounded-full hover:bg-white/5 transition-colors"
                >
                  <LuArrowUpRight size={20} />
                </Link>
              </div>

              <div className="relative overflow-hidden w-full flex-1 h-full bg-[#ffffff09] items-center flex justify-center rounded-xl lg:rounded-3xl">
                <div className="absolute h-full z-0 w-max hover:scale-[102%] transition-all duration-400">
                  <Image
                    alt=""
                    src={cineverseImage}
                    className="w-full h-full"
                  />
                </div>

                <div className="absolute flex flex-col py-4 px-6 gap-2 bottom-3 left-3 bg-white/5 max-w-2/3 backdrop-blur-xl rounded-3xl">
                  <div className="font-bold text-xl">Cineverse</div>

                  <div className="italic text-xs text-gray-300/90">
                    Still in development
                  </div>

                  <div className="text-gray-300/95 text-sm transition-all h-0 group-hover:h-20 overflow-hidden duration-300">
                    A platform to allow you to watch trailers, check metadata,
                    stream online and download torrent of your favorite movies
                    and tv-shows
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
