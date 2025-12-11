import React from 'react';
import { Users, Shield, Briefcase, UserCog, TrendingUp } from 'lucide-react';
import { StatMetric } from '../types';

const stats: StatMetric[] = [
  { label: 'Tổng Users', value: 248, trend: 12, colorClass: 'from-blue-600 to-blue-400', iconName: 'users' },
  { label: 'Admins', value: 4, colorClass: 'from-red-600 to-red-400', iconName: 'shield' },
  { label: 'Managers', value: 12, trend: -2, colorClass: 'from-purple-600 to-purple-400', iconName: 'briefcase' },
  { label: 'Staff', value: 232, trend: 8, colorClass: 'from-slate-600 to-slate-400', iconName: 'usercog' },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'users': return <Users className="text-white/80" size={24} />;
    case 'shield': return <Shield className="text-white/80" size={24} />;
    case 'briefcase': return <Briefcase className="text-white/80" size={24} />;
    default: return <UserCog className="text-white/80" size={24} />;
  }
};

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="relative group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
        >
          {/* Background Glow */}
          <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.colorClass} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.colorClass} shadow-lg`}>
              {getIcon(stat.iconName)}
            </div>
            {stat.trend !== undefined && (
               <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${stat.trend >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                 {stat.trend >= 0 ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                 {Math.abs(stat.trend)}%
               </div>
            )}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</h3>
            <p className="text-3xl font-bold text-white mt-1">{stat.value.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
