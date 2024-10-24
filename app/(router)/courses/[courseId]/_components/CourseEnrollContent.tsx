import { Button } from "@/components/ui/button";
import React from "react";

function CourseEnrollContent() {
  const membership = true;
  return (
    <div className="p-3 rounded-sm text-center bg-primary ">
      <h2 className="text-[22px] text-white font-bold">Inscribirse al Curso</h2>
      {membership ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Inscribete al curso para empezar a aprender
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary ">
            Inscribete
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Compra la membresia para obtener accesso a todos los cursos
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Comprar Membresia
          </Button>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollContent;
