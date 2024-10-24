"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import { ICourse } from "@/Interfaces/course";
import CourseEnrollContent from "./_components/CourseEnrollContent";
import CourseContentSection from "./_components/CourseContentSection";

interface ApiResponse {
  courseList?: ICourse; // Si puede ser undefined, usa ?
}

function CoursePreview({ params }: any) {
  const [course, setCourse] = useState<ICourse>();
  const path = usePathname();

  useEffect(() => {
    getCourseInformation();
    console.log(params.courseId);
    console.log(path);
  }, []);

  const getCourseInformation = async () => {
    try {
      const response: ApiResponse = (await GlobalApi.GetCourseBySlug(
        params.courseId
      )) as ApiResponse;
      console.log(response);
      if (response.courseList) {
        setCourse(response?.courseList as ICourse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* Title video and description */}
      <div className="col-span-2 bg-white p-3">
        <CourseVideoDescription courseInfo={course} />
      </div>

      {/* Course Content */}
      <div>
        <CourseEnrollContent />
        <CourseContentSection courseInfo={course} />
      </div>
      <div></div>
    </div>
  );
}

export default CoursePreview;
