"use client";

import DarkVeil from "../components/DarkVeilBackground";
import TitleBar from "../components/TitleBar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full relative flex">
        <div className="absolute z-0 top-0 left-0 w-full h-2/3">
          <DarkVeil />
        </div>
        {/* <div className="absolute z-0 w-full h-full"> */}
        {/*   <LightRays /> */}
        {/* </div> */}
        {/* <div className="absolute z-0 w-full h-full"> */}
        {/* <DotsBackground */}
        {/*   dotSize={5} */}
        {/*   gap={15} */}
        {/*   //baseColor="#000000" */}
        {/*   activeColor="#888888" */}
        {/* /> */}
        {/* </div> */}
        <div className="absolute z-10 flex backdrop-blur-[120px] w-full h-full hbg-black/50">
          <TitleBar />
          <div className="pt-24 p-9 w-full h-full //bg-gray-950 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
