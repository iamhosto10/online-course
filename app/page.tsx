"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la ruta "/courses" inmediatamente al entrar
    router.push("/courses");
  }, [router]);

  return null; // No necesitas retornar nada, porque rediriges inmediatamente
}
