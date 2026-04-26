import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { MdRemoveDone } from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

import TiltedCard from "@/app/components/TiltedCard";
import {
  projects,
  techStacks,
  projectStatuses,
  projectCategories,
} from "@/lib/utils";
import cineverseImage from "@/../public/cineverse.png";

export const metadata: Metadata = {
  title: "Projects",
}

export default function Projects() {
  return (
    <div className="flex w-full h-full pt-24 p-9 slide-to-left items-center justify-center">
      <div className="flex w-full h-full max-w-425">
        <div className="relative flex flex-col gap-9 w-full h-full overflow-scroll scrollbar-hidden">
          {projectCategories.map((eachCat) => (
            <div
              key={eachCat.index}
              className={`relative flex flex-col w-full h-max gap-4 ${projects.find((project) => eachCat.index === project.category) ? "" : "hidden"}`}
            >
              <div className="text-gray-400 2xl:pl-50 pl-14 flex justify-center w-max px-5 py-2 rounded-full backdrop-blur-xl bg-white/5 gap-2 z-40 items-center top-0 sticky">
                {eachCat.text}
                <GoDotFill className="text-[6px] text-center" />
                {
                  <span className="text-xs -translate-x-0.5">
                    {eachCat.index === 0
                      ? "Projects related to Web"
                      : eachCat.index === 1
                        ? "Projects related to Native Desktop"
                        : eachCat.index === 2
                          ? "Projects related to Native Mobile (Android)"
                          : eachCat.index === 3
                            ? "Projects related to Low Level (C, Rust, Go)"
                            : "Projects related to Linux (Kernel, OS)"}
                  </span>
                }
              </div>

              <div className="relative flex flex-col p-5 px-10 md:px-10 2xl:px-40 w-full h-full /overflow-scroll /scrollbar-hidden gap-9">
                {projects
                  .filter((project) => project.category === eachCat.index)
                  .map((project) => (
                    <TiltedCard
                      key={project.name}
                      rotateAmplitude={5}
                      scaleOnHover={1.02}
                    >
                      <div className="p-3 backdrop-blur-xl flex flex-col w-full group bg-white/5 rounded-3xl lg:rounded-4xl">
                        <div className="relative overflow-hidden w-full flex-1 h-full bg-[#ffffff09] items-center flex justify-center rounded-xl lg:rounded-3xl">
                          <Link
                            href={project.link ?? ""}
                            className={`${project.link ? "" : "hidden"} absolute top-3 right-3 backdrop-blur-xl bg-white/5 z-40 group-hover:px-4 shadow-lg shadow-black/40 p-2 flex items-center justify-center group-hover:gap-2 rounded-full group-hover:scale-110 hover:bg-white/9 transition-all`}
                          >
                            <LuArrowUpRight size={20} />
                            <div className="text-gray-400 text-xs max-w-0 group-hover:max-w-18 text-nowrap transition-all overflow-hidden">
                              Check it out
                            </div>
                          </Link>

                          <div className="h-full z-0 w-max group-hover:scale-[102%] transition-all duration-400">
                            <Image
                              alt=""
                              src={cineverseImage}
                              className="w-full max-xl:max-h-[70vh] h-full"
                            />
                          </div>

                          <div className="absolute flex flex-col py-4 px-6 gap-2 bottom-3 left-3 bg-white/5 max-w-2/3 backdrop-blur-xl shadow-lg shadow-black/40 rounded-3xl">
                            <div className="font-bold text-xl">
                              {project.name}
                            </div>

                            <div className="flex-col flex /p-2 rounded-2xl /gap-2 transition-all z-10 text-xs">
                              <div className="gap-2 flex-wrap flex">
                                {project.techStack
                                  .map(
                                    (eachTechStack) =>
                                      techStacks[eachTechStack],
                                  )
                                  .map((each) => (
                                    <div
                                      key={each.name}
                                      className="flex group-hover:gap-2 duration-500 transition-all gap-0 items-center group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:bg-white/10 group-hover:pr-4 text-gray-400"
                                    >
                                      <Image
                                        alt=""
                                        src={each.icon}
                                        className="size-6"
                                      />
                                      <div className="group-hover:max-w-18 transition-all max-w-0">
                                        {each.name}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            <div className="italic flex text-center items-center gap-2 text-xs text-gray-300/90">
                              {projectStatuses[project.status].index === 0 ? (
                                <MdDone />
                              ) : projectStatuses[project.status].index ===
                                1 ? (
                                <MdRemoveDone />
                              ) : projectStatuses[project.status].index ===
                                2 ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                              ) : (
                                <RiRestartLine />
                              )}
                              {projectStatuses[project.status].text}
                            </div>

                            <div className="text-gray-300/95 text-sm transition-all max-h-0 group-hover:max-h-10 overflow-scroll scrollbar-hidden duration-300">
                              {project.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltedCard>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
