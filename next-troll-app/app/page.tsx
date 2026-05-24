"use client";
import { Flame, CalendarDays, CheckSquare, Activity, Zap } from "lucide-react";
import { useState } from "react";

export default function InsultPlanner() {
  const [insults, setInsults] = useState<string[]>([
    "Carechimba",
    "Huevón",
    "Mamagallista",
  ]);

  const insultBank = [
    "Sapo hijuep...",
    "Gonorrea",
    "Culicagado",
    "Ñero de quinta",
    "Lagarto",
  ];

  const generateInsult = () => {
    const random = insultBank[Math.floor(Math.random() * insultBank.length)];
    setInsults([...insults, random]);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Greeting + Stats */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-black">
        <h2 className="text-2xl font-bold mb-2">Buenos días, David</h2>
        <p className="text-sm text-gray-600">
          Hoy tienes {insults.length} insultos creados. Genera más para tu colección.
        </p>
        <div className="flex gap-6 mt-5 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <CalendarDays size={20} className="text-[#7b6f4b]" /> 3 reuniones
          </div>
          <div className="flex items-center gap-2">
            <CheckSquare size={20} className="text-[#7b6f4b]" /> 2 tareas
          </div>
          <div className="flex items-center gap-2">
            <Activity size={20} className="text-[#7b6f4b]" /> 1 hábito
          </div>
        </div>
      </div>

      {/* Lista de insultos */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Flame className="text-[#7b6f4b]" size={22} /> Insultos creados
        </h3>
        <ul className="space-y-3">
          {insults.map((insult, i) => (
            <li
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-black transition-transform hover:scale-[1.02] animate-slideUp"
            >
              {insult}
            </li>
          ))}
        </ul>
      </div>

      {/* Botón generador grande */}
      <div>
        <button
          onClick={generateInsult}
          className="
            w-full
            py-6
            bg-gradient-to-r from-[#7b6f4b] to-[#a58b61]
            text-white
            rounded-2xl
            font-bold
            text-lg
            flex
            items-center
            justify-center
            gap-3
            shadow-xl
            hover:scale-[1.03]
            transition
            animate-pulse
          "
        >
          <Zap size={26} strokeWidth={2.5} /> Generar insulto
        </button>
      </div>
    </div>
  );
}
