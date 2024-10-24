import React from "react";
import ICourse from "./ICourse";
import Image from "next/image";

interface ICourseItem {
  item: ICourse;
}

function CourseItem({ item }: ICourseItem) {
  return (
    <div className="hover:animate-slow-bounce hover:shadow-md hover:shadow-blue-400 cursor-pointer border rounded-xl">
      <Image
        src={item.banner.url}
        width={500}
        height={150}
        alt="banner"
        className="rounded-t-xl"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="font-semibold">{item.name}</h2>
        <h2 className="text-[12px] text-gray-400">{item.author}</h2>
        {item.chapter.length === 0 ? (
          <div className="flex gap-2">
            <Image
              src="/assets/youtube.png"
              alt="youtube"
              width={20}
              height={20}
            />
            <h2 className="text-[14px] text-gray-400">Miralo en Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image
              src="/assets/capitulo.png"
              alt="chapter"
              width={20}
              height={20}
            />
            <h2 className="text-[14px] text-gray-400">Capitulos</h2>
          </div>
        )}
        <h1 className="text-[14px] font-semibold ">
          {item?.free ? "Gratis" : "Pago"}
        </h1>
      </div>
    </div>
  );
}

export default CourseItem;
