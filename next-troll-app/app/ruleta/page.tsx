'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Wheel = dynamic(
  () =>
    import('react-custom-roulette').then(
      (mod) => mod.Wheel
    ),
  {
    ssr: false,
  }
);

import { motion } from 'framer-motion';
import BottomNav from '../Components/BottomNav';



const rouletteData = [
  { option: 'Habla 1 minuto con acento paisa' },
  { option: 'Haga 20 sentadillas mientras canta' },
  { option: 'Improvisa un vallenato sobre alguien del grupo' },
  { option: 'Declare su amor a una silla' },
  { option: 'Venda una cuchara como si costara un millón' },
  { option: 'Imite un profesor bravo durante 30 segundos' },
  { option: 'Actúe una pelea con un enemigo imaginario' },
  { option: 'Dé una charla TED sobre las empanadas' },
  { option: 'Hable únicamente en preguntas por 1 minuto' },
  { option: 'Narre una pelea de barrio como comentarista deportivo' },
  { option: 'Explique qué es una empanada a un extraterrestre' },
  { option: 'Improvisa un reggaetón con 3 palabras del grupo' },
];

export default function RuletaPage() {
  const [mustSpin, setMustSpin] = useState(false);

  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrize =
      Math.floor(Math.random() * rouletteData.length);

    setPrizeNumber(newPrize);

    setMustSpin(true);

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  return (
    <main className='min-h-screen bg-black px-5 py-10 pb-28 text-white flex flex-col items-center'>
      
      {/* Título */}
      <div className='mb-10 text-center'>
        <h1 className='text-5xl font-black text-green-400'>
          RULETA
        </h1>

        <p className='mt-2 text-zinc-400'>
          El destino colombiano decide.
        </p>
      </div>

      {/* Ruleta */}
      <div className='scale-90 md:scale-100'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={rouletteData}
          backgroundColors={[
            '#22c55e',
            '#18181b',
          ]}
          textColors={['#ffffff']}
          outerBorderColor='#3f3f46'
          outerBorderWidth={6}
          radiusLineColor='#27272a'
          radiusLineWidth={2}
          fontSize={14}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>

      {/* Resultado */}
      <motion.div
        key={prizeNumber}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mt-8 rounded-3xl border border-green-500/20 bg-zinc-900 p-5 text-center max-w-md'
      >
        <p className='text-lg font-bold text-green-400'>
          {rouletteData[prizeNumber].option}
        </p>
      </motion.div>

      {/* Botón */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        onClick={handleSpinClick}
        disabled={mustSpin}
        className='mt-8 rounded-3xl bg-green-500 px-10 py-5 text-xl font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.5)]'
      >
        GIRAR
      </motion.button>

      <BottomNav/>
    </main>
  );
}