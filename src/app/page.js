'use client'
import React, { useState, useEffect } from "react";
import Homes from "./components/pages/home/home";
import Monalisa from "./components/Monalisa/Monalisa";
import Loader from "./components/loader/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asíncrona (puedes reemplazar esto con tu lógica de carga real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula una carga de 2 segundos
  }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, está vacío

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      {isLoading ? (
        <Loader />
      ) : (
        <Homes />
      )}
    </main>
  );
}
