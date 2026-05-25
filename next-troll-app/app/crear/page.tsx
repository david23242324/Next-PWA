'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BottomNav from '../Components/BottomNav';



export default function CrearPage() {
  const [insult, setInsult] = useState('');
  const [savedInsults, setSavedInsults] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('customInsults');

    if (stored) {
      setSavedInsults(JSON.parse(stored));
    }
  }, []);

  const saveInsult = () => {
    if (!insult.trim()) return;

    const updated = [insult, ...savedInsults];

    setSavedInsults(updated);

    localStorage.setItem(
      'customInsults',
      JSON.stringify(updated)
    );

    setInsult('');
  };

  return (
    <main className='min-h-screen bg-black px-5 py-10 pb-28 text-white'>
      
      {/* Título */}
      <div className='mb-10 text-center'>
        <h1 className='text-4xl font-black text-green-400'>
          CREAR INSULTO
        </h1>

        <p className='mt-2 text-zinc-400'>
          Saque el colombiano que lleva dentro.
        </p>
      </div>

      {/* Input */}
      <div className='mx-auto flex max-w-md flex-col gap-4'>
        <input
          type='text'
          placeholder='Ej: Más lento que...'
          value={insult}
          onChange={(e) => setInsult(e.target.value)}
          className='rounded-2xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-green-500'
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={saveInsult}
          className='rounded-2xl bg-green-500 py-4 text-lg font-black text-black'
        >
          GUARDAR INSULTO
        </motion.button>
      </div>

      {/* Lista */}
      <div className='mx-auto mt-10 flex max-w-md flex-col gap-4'>
        {savedInsults.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='rounded-2xl border border-green-500/20 bg-zinc-900 p-4'
          >
            <p className='text-green-400'>
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <BottomNav/>
    </main>
  );
}