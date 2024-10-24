import Image from "next/image";
import React from "react";
import Class from "../../../assets/Class.svg";

function Welcomebanner() {
  return (
    <div className="flex flex-col sm:flex-row p-5 gap-5 items-center bg-white rounded-xl">
      <Image
        src="/assets/study.png"
        width={100}
        height={100}
        alt="book"
        className=""
      />
      {/* <Class style={{ fill: "#8d7038", width: "100px", height: "100px" }} /> */}
      <div>
        <h2 className="font-bold text-[28px]">
          Bienvenidos a <span className="text-primary">IPSUM</span> academy
        </h2>
        <h2 className="text-gray-500">
          Explora, aprende y construye aprendizaje con los cursos
        </h2>
      </div>
    </div>
  );
}

export default Welcomebanner;
