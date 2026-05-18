"use client";
import { useState } from "react";

export default function Page() {
  const [insulto, setInsulto] = useState("");

  const insultosElegantes = [
    "Tu intelecto es tan útil como un paraguas roto.",
    "Eres la versión beta de un error permanente.",
    "Tu lógica es más confusa que un manual de Ikea.",
    "Tienes la gracia de un semáforo dañado.",
    "Tu carisma compite con el de una impresora sin tinta.",
    "Eres tan relevante como un meme de 2010.",
  ];

  const generarInsulto = () => {
    const randomIndex = Math.floor(Math.random() * insultosElegantes.length);
    setInsulto(insultosElegantes[randomIndex]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎩 Generador de Insultos Elegantes</h1>
      <button
        onClick={generarInsulto}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        Generar insulto
      </button>
      {insulto && (
        <p className="mt-6 text-lg font-serif italic bg-white text-purple-700 p-4 rounded-lg shadow-md">
          {insulto}
        </p>
      )}
    </main>
  );
}
