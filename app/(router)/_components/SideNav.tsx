"use client";
import {
  BadgeCheck,
  BadgeIcon,
  BookOpen,
  GraduationCap,
  Newspaper,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const menu = [
    { id: 1, title: "Todos los Cursos", icon: BookOpen, path: "/courses" },
    { id: 2, title: "Membresia", icon: BadgeCheck, path: "/memebership" },
    { id: 3, title: "Se Instructor", icon: GraduationCap, path: "/instructor" },
    { id: 4, title: "Noticias", icon: Newspaper, path: "/news" },
    // { id: 4, title: "AllCourses", icon: BookOpen },
  ];
  const path = usePathname();
  return (
    <div className="h-screen p-5 bg-white shadow-sm  border">
      <Image
        src="/assets/logoipsum-325.svg"
        alt="logo"
        width={170}
        height={80}
      />
      <hr className="mt-6"></hr>
      <div className="mt-5">
        {menu.map((item, index) => (
          <Link href={item.path}>
            <div
              key={index}
              className={`group flex gap-2 mt-3 p-2 text-[18px] items-center cursor-pointer hover:bg-primary hover:text-white hover:rounded-md transition-all ease-in-out duration-700 ${
                path.includes(item.path) && "bg-primary text-white rounded-md"
              }`}
            >
              <item.icon className="group-hover:animate-bounce " />
              <h2> {item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
