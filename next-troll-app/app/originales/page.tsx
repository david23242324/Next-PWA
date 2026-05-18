"use client";
import { useState } from "react";

export default function OriginalesPage() {
  const [insulto, setInsulto] = useState("");

  const insultosElegantes = [
    "Tu intelecto es tan útil como un paraguas roto.",
    "Eres la versión beta de un error permanente.",
    "Tu lógica es más confusa que un manual de Ikea.",
    "Tienes la gracia de un semáforo dañado.",
    "Tu carisma compite con el de una impresora sin tinta.",
    "Eres tan relevante como un meme de 2010.",
  ];

  const girarRuleta = () => {
    const randomIndex = Math.floor(Math.random() * insultosElegantes.length);
    setInsulto(insultosElegantes[randomIndex]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎡 Ruleta de Insultos Elegantes</h1>
      <div
        onClick={girarRuleta}
        className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 flex items-center justify-center cursor-pointer animate-spin-slow hover:animate-none"
      >
        <span className="text-lg font-bold">🎲 Girar</span>
      </div>
      {insulto && (
        <p className="mt-6 text-lg font-serif italic bg-white text-purple-700 p-4 rounded-lg shadow-md">
          {insulto}
        </p>
      )}
    </main>
  );
}
