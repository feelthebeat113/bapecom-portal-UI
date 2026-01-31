import React from 'react';
import { Search, Bell, Sun, Moon, Settings } from 'lucide-react';

export default function TopHeader({ theme, onToggleTheme }: any) {
  return (
    <header className="h-24 flex items-center justify-between px-12 bg-transparent sticky top-0 z-50">
      <div className="flex items-center gap-12 flex-1">
        <div className="relative group max-w-md w-full">
          <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-kinetic-zinc group-focus-within:text-kinetic-orange transition-colors" />
          <input 
            type="text" 
            placeholder="Search within system nodes..." 
            className="w-full bg-black/5 dark:bg-white/5 border-none py-4 pl-16 pr-8 text-[11px] font-bold uppercase tracking-[0.1em] focus:outline-none rounded-full placeholder:text-kinetic-zinc/40 dark:text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button 
            onClick={onToggleTheme} 
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all text-kinetic-zinc dark:text-kinetic-white"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all text-kinetic-zinc dark:text-kinetic-white relative">
            <Bell size={18} />
            <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 bg-kinetic-orange rounded-full"></span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-all shadow-xl">
             <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}