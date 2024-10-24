import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* search bar  */}
      <div className="flex gap-2 border p-2 rounded-md">
        <Search className="w-5 h-5" />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="cursor-pointer" />
        <Button> Empezar</Button>
      </div>
    </div>
  );
}

export default Header;
