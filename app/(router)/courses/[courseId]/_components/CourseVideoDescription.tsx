import { ICourse } from "@/Interfaces/course";
import React from "react";
import VideoComponent from "./VideoComponent";
import Markdown from "react-markdown";

interface IProps {
  courseInfo: ICourse | undefined;
}

function CourseVideoDescription({ courseInfo }: IProps) {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
      <h2 className="text-[16px] text-gray-400 mb-3">{courseInfo?.author}</h2>
      {courseInfo?.chapter[0]?.video?.url && (
        <VideoComponent url={courseInfo?.chapter[0]?.video?.url} />
      )}
      <h2 className="mt-5 text-[17px] font-semibold">Sobre este Curso</h2>
      <Markdown className="text-[12px] mt-2 leading-7">
        {courseInfo?.description}
      </Markdown>
    </div>
  );
}

export default CourseVideoDescription;
