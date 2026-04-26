import Image from "next/image"

import { IconType } from "react-icons";
import { MdWeb, MdOutlineMiscellaneousServices as Custom } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { LuAppWindow } from "react-icons/lu";

const serviceList = [
  {
    name: "Web App Development",
    icon: MdWeb,
    detail: "Web apps with tech stacks NextJs and ReactJs",
  },
  {
    name: "Android App Development",
    icon: IoLogoAndroid,
    detail: "Android applications development preferrably Kotlin and ReactNative",
  },
  {
    name: "Desktop App Development",
    icon: LuAppWindow,
    detail: "Desktop apps with teck stacks C, C++, Python, Java",
  },
  {
    name: "Custom Software Development",
    icon: Custom,
    detail: "Any stack, any scale software development including Rust, Go",
  },
]

export default function Services() {
  return <div className="flex slide-to-left items-center justify-center w-full h-full">
    <div className="flex flex-col items-center max-w-250 w-full h-full py-35 px-10 gap-5">
    {serviceList.map((eachService) => <div className="flex items-center px-12 py-8  rounded-full backdrop-blur-3xl bg-white/7 w-full gap-4">
        <eachService.icon className="size-20" />
	<div className="flex flex-col gap-3">
	  <div className="text-lg">{eachService.name}</div>
	  <div className="text-gray-400">{eachService.detail}</div>
	</div>
      </div>)}
    </div>
  </div>;
}
