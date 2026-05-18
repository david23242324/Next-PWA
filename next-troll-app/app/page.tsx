"use client";

import { useState } from "react";

import {
  Sparkles,
  Bookmark,
  Layers3,
  Shuffle,
} from "lucide-react";

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
    const randomIndex = Math.floor(
      Math.random() * insultosElegantes.length
    );

    setInsulto(insultosElegantes[randomIndex]);

    navigator.vibrate?.(40);
  };

  return (
    <section
      className="
        w-full
        min-h-[calc(100dvh-220px)]
        flex
        flex-col
        justify-between
        px-1
        pt-6
        pb-1
      "
    >

      {/* TOP */}
      <div className="flex flex-col gap-6">

        {/* HERO */}
        <div className="px-1">
          <p className="text-white/30 text-[11px] tracking-[0.28em] uppercase">
            Premium Collection
          </p>

          <h2
            className="
              mt-3
              text-[2.7rem]
              leading-[0.9]
              font-semibold
              tracking-[-0.05em]
              max-w-[260px]
            "
          >
            Elegant
            <br />
            Insults
          </h2>

          <p className="mt-4 text-[14px] text-white/45 leading-relaxed max-w-[260px]">
            Minimal. Sharp. Unforgettable.
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            light-card
            rounded-[30px]
            px-6
            py-6
            shadow-2xl
          "
        >
          <div className="flex items-start justify-between gap-4">

            <div>
              <p className="text-black/40 text-[10px] tracking-[0.22em] uppercase">
                Featured
              </p>

              <h3 className="text-black text-[24px] font-semibold mt-2">
                Daily Insult
              </h3>
            </div>

            <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center shrink-0">
              <Sparkles
                size={17}
                strokeWidth={2}
                className="text-black"
              />
            </div>

          </div>

          <div className="mt-8 min-h-[140px] flex items-start">
            <p className="text-black text-[17px] leading-[1.7] font-medium tracking-[-0.03em]">
              {insulto ||
                "Generate an elegant insult and let sophistication do the damage."}
            </p>
          </div>

          <button
            onClick={generarInsulto}
            className="
              mt-8
              w-full
              bg-black
              text-white
              rounded-[20px]
              py-4
              text-[14px]
              font-medium
              tracking-wide
              active:scale-[0.98]
              transition
            "
          >
            Generate Insult
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-5">

          <div
            className="
              surface-card
              rounded-[26px]
              p-5
              min-h-[170px]
              flex
              flex-col
              justify-between
            "
          >
            <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center">
              <Bookmark size={18} strokeWidth={1.8} />
            </div>

            <div className="mt-8">
              <h4 className="text-[17px] font-medium">
                Favorites
              </h4>

              <p className="text-[12px] mt-2 text-white/40 leading-relaxed">
                Saved insults collection
              </p>
            </div>
          </div>

          <div
            className="
              surface-card
              rounded-[26px]
              p-5
              min-h-[170px]
              flex
              flex-col
              justify-between
            "
          >
            <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center">
              <Layers3 size={18} strokeWidth={1.8} />
            </div>

            <div className="mt-8">
              <h4 className="text-[17px] font-medium">
                Categories
              </h4>

              <p className="text-[12px] mt-2 text-white/40 leading-relaxed">
                Explore insult styles
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CARD */}
      <div
        className="
          surface-card
          rounded-[28px]
          p-6
          mt-10
        "
      >
        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-white/30 text-[10px] tracking-[0.24em] uppercase">
              Random Mode
            </p>

            <h4 className="mt-3 text-[20px] font-medium">
              Unexpected responses
            </h4>
          </div>

          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
            <Shuffle size={19} strokeWidth={1.9} />
          </div>

        </div>
      </div>

    </section>
  );
}