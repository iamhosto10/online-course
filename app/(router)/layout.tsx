import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
