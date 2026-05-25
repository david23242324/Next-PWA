'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNav from './Components/BottomNav';
import { defaultInsults } from './data/insults';
import { InsultManager } from './lib/InsultManager';

export default function HomePage() {
  const [history, setHistory] = useState<string[]>([]);

  const manager = new InsultManager(defaultInsults);

  const generateInsult = () => {
    const random = manager.getRandomInsult();

    setHistory((prev) => [random, ...prev]);

    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

  return (
    <main className='min-h-screen bg-black px-5 py-10 pb-28 text-white flex flex-col items-center'>
      
      {/* Título */}
      <div className='mb-10 text-center'>
        <h1 className='text-5xl font-black text-green-400'>
          INSULTADOR
        </h1>

        <p className='mt-2 text-zinc-400'>
          Tecnología avanzada en groserías colombianas 🇨🇴
        </p>
      </div>

      {/* Historial */}
      <div className='w-full max-w-md flex flex-col gap-4'>
        {history.length === 0 ? (
          <div className='rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-center text-zinc-500'>
            Presione el botón y reciba conocimiento colombiano.
          </div>
        ) : (
          history.map((insult, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className='rounded-3xl border border-green-500/20 bg-zinc-900 p-5 shadow-lg'
            >
              <p className='text-lg font-semibold text-green-400'>
                {insult}
              </p>
            </motion.div>
          ))
        )}
      </div>

      {/* Botón */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.03 }}
        onClick={generateInsult}
        className='fixed bottom-32 z-40 w-[90%] max-w-md rounded-3xl bg-green-500 py-5 text-xl font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.5)] glow'
      >
        INSÚLTEME
      </motion.button>

      <BottomNav />
    </main>
  );
}