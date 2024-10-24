"use client";
import React from "react";
import Welcomebanner from "./_components/Welcomebanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";

function Courses() {
  return (
    <div className="grid grid-cols-4 p-5 gap-2">
      {/* Left container  */}
      <div className="col-span-4 md:col-span-3">
        <Welcomebanner />
        <CourseList />
      </div>

      {/* Right container  */}
      <div className="md:col-span-1 hidden md:block p-5 bg-white rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
}

export default Courses;
