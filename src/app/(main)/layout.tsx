"use client";

import DarkVeil from "../components/DarkVeilBackground";
import TitleBar from "../components/TitleBar";
import NavBar from "../components/NavBar";
import FloatingElement from "../components/FloatingElement";
// import ShapeGrid from "../components/ShapeGrid";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full flex overflow-hidden bg-black">
      <div className="w-full h-full relative flex">
        <div className="absolute z-0 top-0 left-0 w-full h-full/ h-2/3">
          <DarkVeil />
        </div>
	{/*<div className="absolute z-10 flex flex-col /backdrop-blur-lg w-full h-full bg-black/20">*/}
          <TitleBar />
          <div className="w-full h-full //bg-gray-950 ">
            {children}
          </div>
          <FloatingElement />
          <NavBar />
          {/* <div className="absolute bottom-0 opacity-20 w-full"> */}
          {/*   <ShapeGrid speed={0.1} /> */}
          {/* </div> */}
	  {/*</div>*/}
      </div>
    </div>
  );
}
