import React from 'react';
import { Search, Filter, RefreshCw, Box, MoreVertical, Archive } from 'lucide-react';

export default function HistoryView() {
  const data = [
    { id: '01', name: 'CORE_ENGINE_v4.2', type: 'SYST', date: 'FEB 14', status: 'Approved', weight: '24.5MB' },
    { id: '02', name: 'UI_PRECISION_KIT', type: 'UXUI', date: 'FEB 14', status: 'Review', weight: '12.1MB' },
    { id: '03', name: 'SEC_VAULT_DEEP', type: 'CORE', date: 'FEB 12', status: 'Sync', weight: '4.8MB' },
    { id: '04', name: 'NET_RELAY_HUB', type: 'IO', date: 'FEB 10', status: 'Approved', weight: '0.5MB' },
  ];

  return (
    <div className="p-12 max-w-[1600px] mx-auto animate-fade">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-kinetic-orange">
             <Archive size={28} strokeWidth={1.5} />
             <span className="text-[11px] font-black uppercase tracking-[0.5em]">Historical Vault</span>
          </div>
          <h2 className="text-9xl font-black tracking-tighter uppercase italic dark:text-white leading-none">ARCHIVE.</h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
           <div className="relative group bg-black/5 dark:bg-white/5 rounded-full transition-all">
              <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-kinetic-zinc group-focus-within:text-kinetic-orange" />
              <input type="text" placeholder="Search archive..." className="bg-transparent py-5 pl-16 pr-8 text-[12px] font-bold uppercase tracking-[0.1em] focus:outline-none w-80 dark:text-white placeholder:text-kinetic-zinc/30" />
           </div>
           <button className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-kinetic-zinc hover:text-black dark:hover:text-white transition-all"><Filter size={22}/></button>
           <button className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-kinetic-zinc hover:text-black dark:hover:text-white transition-all"><RefreshCw size={22}/></button>
        </div>
      </div>

      <div className="bg-black/5 dark:bg-white/5 rounded-[40px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/5 dark:border-white/5">
              <th className="py-10 px-12 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Node ID</th>
              <th className="py-10 px-12 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Manifest</th>
              <th className="py-10 px-12 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Category</th>
              <th className="py-10 px-12 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Timeline</th>
              <th className="py-10 px-12 text-right text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Payload</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 dark:divide-white/5">
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-white dark:hover:bg-kinetic-card transition-all group">
                <td className="py-10 px-12 text-[12px] font-mono text-kinetic-zinc group-hover:text-kinetic-orange transition-colors font-bold">NODE_{item.id}</td>
                <td className="py-10 px-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-kinetic-zinc group-hover:text-kinetic-orange transition-all">
                        <Box size={20} strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-black uppercase tracking-widest dark:text-white">{item.name}</span>
                  </div>
                </td>
                <td className="py-10 px-12">
                    <span className="px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-black text-kinetic-zinc group-hover:text-kinetic-orange uppercase tracking-widest transition-all">{item.type}</span>
                </td>
                <td className="py-10 px-12 text-[12px] font-black text-kinetic-zinc uppercase tracking-[0.1em]">{item.date}</td>
                <td className="py-10 px-12 text-right">
                  <div className="flex items-center justify-end gap-10">
                    <span className="text-[14px] font-black font-mono dark:text-white">{item.weight}</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-kinetic-zinc hover:text-black dark:hover:text-white transition-colors"><MoreVertical size={20}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-16 flex flex-col sm:flex-row justify-between items-center gap-8">
          <span className="text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.4em] opacity-40">Synchronized // Root Cluster</span>
          <div className="flex gap-6">
            <button className="px-10 py-5 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-black uppercase tracking-[0.2em] text-kinetic-zinc hover:text-black dark:hover:text-white transition-all">Previous Page</button>
            <button className="px-10 py-5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl">New Sync</button>
          </div>
        </div>
      </div>
    </div>
  );
}