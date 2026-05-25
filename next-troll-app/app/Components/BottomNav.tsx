'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  House,
  Dices,
  PlusSquare,
} from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Inicio',
      href: '/',
      icon: House,
    },
    {
      name: 'Ruleta',
      href: '/ruleta',
      icon: Dices,
    },
    {
      name: 'Crear',
      href: '/crear',
      icon: PlusSquare,
    },
  ];

  return (
    <nav className='fixed bottom-4 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-around rounded-3xl border border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur-xl'>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive
                ? 'text-green-400'
                : 'text-zinc-500'
            }`}
          >
            <item.icon size={24} />

            <span className='text-xs font-medium'>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}