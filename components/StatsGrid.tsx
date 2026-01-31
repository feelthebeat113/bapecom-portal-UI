import React from 'react';
import { Users, Shield, Briefcase, UserCog } from 'lucide-react';
import { StatMetric } from '../types';

const stats: StatMetric[] = [
  { label: 'Operatives', value: 248, trend: 12, colorClass: '', iconName: 'users' },
  { label: 'Root Admins', value: 4, colorClass: '', iconName: 'shield' },
  { label: 'Managers', value: 12, trend: -2, colorClass: '', iconName: 'briefcase' },
  { label: 'Staff Units', value: 232, trend: 8, colorClass: '', iconName: 'usercog' },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'users': return <Users size={20} strokeWidth={1.5} />;
    case 'shield': return <Shield size={20} strokeWidth={1.5} />;
    case 'briefcase': return <Briefcase size={20} strokeWidth={1.5} />;
    default: return <UserCog size={20} strokeWidth={1.5} />;
  }
};

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-black/5 dark:bg-white/5 p-10 rounded-[32px] group hover:bg-white dark:hover:bg-kinetic-card hover:shadow-xl transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center text-kinetic-zinc group-hover:text-kinetic-orange transition-colors">
              {getIcon(stat.iconName)}
            </div>
            {stat.trend !== undefined && (
               <div className={`px-3 py-1 rounded-full text-[10px] font-black font-mono ${stat.trend >= 0 ? 'bg-kinetic-orange/10 text-kinetic-orange' : 'bg-rose-500/10 text-rose-500'}`}>
                 {stat.trend >= 0 ? '+' : ''}{stat.trend}%
               </div>
            )}
          </div>
          
          <h3 className="text-kinetic-zinc text-[11px] font-black uppercase tracking-[0.2em] mb-2 opacity-50">{stat.label}</h3>
          <p className="text-4xl font-black text-black dark:text-white tracking-tighter font-mono">{stat.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;