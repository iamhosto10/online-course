import GlobalApi from "@/app/_utils/GlobalApi";
import type { ICourse } from "@/Interfaces/course";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

interface ApiResponse {
  courseLists?: ICourse[]; // Si puede ser undefined, usa ?
}

function CourseList() {
  const [courseList, setCourseList] = useState<ICourse[] | []>([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      const courseList: ApiResponse =
        (await GlobalApi.getCourseList()) as ApiResponse;
      if (courseList.courseLists) {
        setCourseList(courseList.courseLists as ICourse[]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 bg-white rounded-xl mt-5">
      {/* Title and filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">Todos los Cursos</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue key="first" placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="All">
              Todos
            </SelectItem>
            <SelectItem key="Paid" value="Paid">
              Pago
            </SelectItem>
            <SelectItem key="Free" value="Free">
              Gratis
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display course List  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <>
                <Link href={"/courses/" + item.slug}>
                  <div key={item.tag + "1"}>
                    <CourseItem item={item} />
                  </div>
                </Link>
                <Link href={"/courses/" + item.slug}>
                  <div key={item.tag + "2"}>
                    <CourseItem item={item} />
                  </div>
                </Link>
                <Link href={"/courses/" + item.slug}>
                  <div key={item.tag + "3"}>
                    <CourseItem item={item} />
                  </div>
                </Link>
              </>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index}>
                <div className="w-full h-[130px] rounded-xl m-2 bg-blue-200 animate-pulse" />
                <div className="w-full h-[15px] rounded-xl m-2 bg-blue-200 animate-pulse" />
              </div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
