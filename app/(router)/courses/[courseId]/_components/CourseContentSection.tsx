import { ICourse } from "@/Interfaces/course";
import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

interface IProps {
  courseInfo: ICourse | undefined;
}

function CourseContentSection({ courseInfo }: IProps) {
  console.log(courseInfo);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-3 bg-white roundend-sm">
      <h2>Content</h2>
      <h2>
        {courseInfo?.chapter?.map((item, index) => (
          <div>
            <h2
              className={`flex items-center justify-between p-2 m-2 border rounded-sm cursor-pointer hover:bg-gray-200 hover:text-gray-500 ${
                activeIndex === index && "bg-primary text-white"
              }`}
            >
              {index}.{item.name}
              {activeIndex === index ? (
                <Play className="h-4 w-4" />
              ) : (
                <Lock className="h-4 w-4" />
              )}
            </h2>
          </div>
        ))}
      </h2>
    </div>
  );
}

export default CourseContentSection;
