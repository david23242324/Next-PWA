'use client';

import { motion } from 'framer-motion';

interface Props {
  insult: string;
}

export default function InsultCard({
  insult,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className='rounded-3xl border border-green-500/20 bg-zinc-900 p-5 shadow-lg'
    >
      <p className='text-lg font-semibold text-green-400'>
        {insult}
      </p>
    </motion.div>
  );
}