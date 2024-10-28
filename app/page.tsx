"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignUp, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      // Redirige a la ruta "/courses" inmediatamente al entrar
      isLoaded && router.push("/courses");
    }
  }, [user]);

  return <>{/* <UserButton afterSignOutUrl="/sign-in" /> */}</>; // No necesitas retornar nada, porque rediriges inmediatamente
}
