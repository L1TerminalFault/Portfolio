"use client";

import Image from "next/image";

import SplitText from "@/app/components/SplitText";
import cineverseImage from "@/../public/cineverse.png";
import NextJsIcon from "@/../public/nextjs-icon.svg";
import TailwindCSSIcon from "@/../public/tailwind.png";
import MongoDBIcon from "@/../public/mongodb.ico";

export default function Home() {
  return (
    <div className="flex flex-col slide-to-left w-full h-full">
      <div className="flex w-full h-full items-center justify-center">
        {/* <div className="flex flex-col w-full h-full "> */}
        {/* NOTE: Edit global padding just on this div */}
        <div className="flex max-sm:flex-col-reverse py-90 gap-2 max-w-425 scrollbar-hidden overflow-scroll p-5 sm:p-8 md:p-12 lg:p-16 xl:p-30 items-center justify-center w-full h-full">
          <div className="w-full h-full flex flex-col gap-30 max-2xl:gap-20 max-lg:gap-10 items-center justify-center max-sm:justify-start">
            <div className="flex flex-col gap-1 h-max max-2xl:pt-40 pt-90 w-full text-gray-400 text-xs fade-in opacity-0">
              <div className="px-1">Preferred Tech Stack</div>

              <div className="flex gap-2 flex-wrap">
                {[
                  { name: "NextJs", icon: NextJsIcon },
                  { name: "TailwindCSS", icon: TailwindCSSIcon },
                  { name: "MongoDB", icon: MongoDBIcon },
                ].map((each) => (
                  <div
                    key={each.name}
                    className="flex gap-1 items-center rounded-2xl bg-white/5 pr-2 text-gray-400"
                  >
                    <Image alt="" src={each.icon} className="size-6" />
                    {each.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col pb-30 gap-4 w-full /h-full justify-end">
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

          <div className="flex slide-to-top opacity-0 items-center w-full bg-white p-3 /h-full">
            <div className="bg-[#ffffff15] p-2 max-h-4/6 rounded-2xl lg:rounded-4xl w-full max-h- flex-1 h-full flex flex-col">
              <div className="p-1 px-4 text-gray-400">Top Project</div>

              <div className="relative overflow-hidden w-full flex-1 h-full bg-[#ffffff09] items-center flex justify-center rounded-xl lg:rounded-3xl">
                <div className="absolute h-full /h-max w-max">
                  <Image
                    alt=""
                    src={cineverseImage}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="sm:w-3/5 flex flex-col sm:h-full items-center lg:p-28 xl:p-40 md:p-18 ">
              <div className="flex flex-col max-h-4/5 gap-4 w-full h-full justify-end">
                <div className="text-5xl/tight slide-to-bottom max-lg:text-4xl/tight font-bold">
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
                <div className="text-gray-500 slide-to-right relative max-lg:text-sm">
                  NextJs developer with the latest and cutting edge frameworks
                  for the least latency and maximum performance, more than 3yrs
                  of experience using Tailwind CSS for styling and MongoDB as
                  main database server
                  <br />
                  Also ReactNative and Kotlin for Android Development
                </div>
              </div>
            </div>

            <div className="flex slide-to-top opacity-0 flex-1 /sm:w-2/5 w-full h-full sm:pr-8 items-center">
              <div className="bg-[#ffffff15] p-2 max-h-4/6 rounded-2xl lg:rounded-4xl w-full max-h- flex-1 h-full flex flex-col">
                <div className="p-1 px-4 text-gray-400">Top Project</div>

                <div className="relative overflow-hidden w-full flex-1 h-full bg-[#ffffff09] items-center flex justify-center rounded-xl lg:rounded-3xl">
		<div className="absolute h-full /h-max w-max">
                  <Image
                    alt=""
                    src={cineverseImage}
                    className="w-full h-full"
                  />
		  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
