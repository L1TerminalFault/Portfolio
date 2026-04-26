import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

import SplitText from "@/app/components/SplitText";
import NextJsIcon from "@/../public/nextjs-icon.svg";
import TailwindCSSIcon from "@/../public/tailwind.png";
import MongoDBIcon from "@/../public/mongodb.ico";
import ClerkIcon from "@/../public/clerk.png";
import TiltedCard from "@/app/components/TiltedCard";
import { projects, projectStatuses, techStacks } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
}

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
    detail: "Styling engine for all stylings with quick and reliable usage",
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
    <div className="flex relative flex-col slide-to-left w-full h-full">
      <div className="flex w-full h-full items-center justify-center">
        {/* NOTE: Edit global padding just on this div */}
        <div className="flex max-[850px]:flex-col gap-8 /pt-45 /pb-15 p-10 max-w-400 scrollbar-hidden overflow-scroll max-md:py-40 sm:p-8 md:p-12 lg:p-16 xl:p-30 md:items-baseline-last items-end justify-center w-full h-full">
          <div className="w-full h-max flex flex-col pt-30 pb-5 gap-30 max-2xl:gap-20 max-lg:gap-10 items-center justify-end /max-sm:justify-start">
            <div className="flex flex-col gap-1 h-full pl-3 w-full z-40 text-gray-400 text-xs fade-in opacity-0">
              <div className="px-1">Preferred Tech Stack</div>

              <div className="flex /relative gap-2 flex-wrap /z-20">
                {preferredTechStack.map((each) => (
                  <div
                    key={each.name}
                    className="flex gap-2 group items-center group rounded-2xl bg-white/5 /max-w-0 transition-colors hover:bg-white/10 pr-4 text-gray-400"
                  >
                    <Image alt="" src={each.icon} className="size-6" />
                    {each.name}

                    <div className="absolute max-md:left-0 translate-y-20 z-50 backdrop-blur-xl bg-gray-900/90 /bg-white/5 max-w-120 max-h-0 group-hover:max-h-40 rounded-2xl flex overflow-hidden gap-4 group-hover:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-black/50">
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

            <div className="flex flex-col pb-30/ gap-4 w-full p-3 h-max justify-end pointer-events-none">
              <div className="text-5xl/tight slide-to-bottom max-lg:text-4xl/tight max-sm:text-xl/tight font-bold">
                <SplitText
                  text="Kaleab Mengesha, NextJs developer"
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
              <div className="text-gray-500 /slide-to-right max-lg:text-sm max-sm:text-xs">
                NextJs (Full Stack) developer with the latest and cutting edge
                frameworks for the least latency and maximum performance for
                web, more than 3yrs of experience using Tailwind CSS for styling
                and MongoDB as main database server
              </div>
              <div className="text-gray-500 -z-10 /slide-to-bottom max-lg:text-sm max-sm:text-xs">
                And ReactNative with NativeWind and also NextJs backend and
                infrastructure for General Android Development and Kotlin with
                Jetpack Compose for Native Android Development
              </div>
            </div>
          </div>

          <div className="relative w-full h-full z-20 /max-xl:h-4/5 flex items-end justify-center">
            <TiltedCard
            // rotateAmplitude={12}
            // scaleOnHover={1.05}
            >
              <div className="flex min-h-80 slide-to-top opacity-0 items-center w-full px-5 h-full group max-h-190">
                <div className="bg-[#ffffff15] p-2 rounded-2xl backdrop-blur-xl lg:rounded-4xl w-full flex-1 h-full justify-end flex flex-col">
                  <div className="p-2 px-4 text-gray-400 flex justify-between">
                    Top Project
                    <Link
                      target="_blank"
                      href={projects[0].link || ""}
                      className="px-3 py-1 flex items-center justify-center gap-2 rounded-full group-hover:scale-110 hover:bg-white/5 transition-all"
                    >
                      <LuArrowUpRight size={20} />
                      <div className="text-gray-400 text-xs max-w-0 group-hover:max-w-18 text-nowrap duration-400 transition-all overflow-hidden">
                        Check it out
                      </div>
                    </Link>
                  </div>

                  <div className="relative overflow-hidden w-full flex-1 h-full bg-[#ffffff09] items-center flex justify-center rounded-xl lg:rounded-3xl">
                    <div className="absolute top-3 left-3 shadow-lg shadow-black/40 flex-col flex backdrop-blur-lg p-2 bg-white/5 rounded-2xl gap-2 transition-all z-10 text-xs">
                      <div className="pl-2">Tech Stack</div>

                      <div className="gap-2 flex-wrap flex">
                        {preferredTechStack.map((each) => (
                          <div
                            key={each.name}
                            className="flex group-hover:gap-2 duration-500 transition-all gap-0 items-center group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:bg-white/10 group-hover:pr-4 text-gray-400"
                          >
                            <Image alt="" src={each.icon} className="size-6" />
                            <div className="group-hover:max-w-18 transition-all max-w-0">
                              {each.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute h-full z-0 w-max group-hover:scale-[102%] transition-all duration-400">
			  {projects[0].image ? <Image
                              alt=""
					width={1080}
					height={720}
                              src={projects[0].image}
                              className={`w-full ${projects[0].image ? "" : "opacity-30"} max-xl:max-h-[70vh] min-h-[50vh] h-full`}
                            /> : <div className="min-h-[50vh] bg-black/50 w-full h-full text-lg flex items-center justify-center">NO IMAGE</div>}
                    </div>

                    <div className="absolute flex flex-col shadow-lg shadow-black/40 py-4 px-6 gap-2 bottom-3 left-3 bg-white/5 max-w-2/3 backdrop-blur-xl rounded-3xl">
                      <div className="font-bold text-xl">
                        {projects[0].name}
                      </div>

                      <div className="italic text-xs text-gray-300/90">
                        {projectStatuses[projects[0].status].text}
                      </div>

                      <div className="text-gray-300/95 text-sm transition-all max-h-0 group-hover:max-h-30 overflow-scroll scrollbar-hidden duration-500">
                        {/* A platform to allow you to watch trailers, check */}
                        {/* metadata, stream online and download torrent of your */}
                        {/* favorite movies and tv-shows */}
                        {projects[0].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>
      </div>
    </div>
  );
}
