"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Loader from "@/app/components/Loader";

export default function LinkPreview({ url }: { url: string }) {
  const [previewImage, setPreviewImage] = useState<{ image: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await (await fetch(`/api/preview?url=${"https://cineverse-entertainment.vercel.app"}`)).json();
  //       if (res.status === "success") setPreviewImage(res?.image);
  //       else throw Error("Unknown error");
  //     } catch {
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // });

  return <Loader />;

  // if (!previewImage)
  //   return (
  //     <div className="w-full h-full items-center flex justify-center text-gray-400">
  //       Unknown Error
  //     </div>
  //   );
  //
  // return (
  //   <Image
  //     src={previewImage}
  //     className="w-full h-full"
  //     alt=""
  //     width={400}
  //     height={500}
  //   />
  // );
}
