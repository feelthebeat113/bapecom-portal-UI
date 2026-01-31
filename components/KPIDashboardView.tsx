import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Calendar } from 'lucide-react';

const summaryStats = [
  { label: 'System Load', value: 608, sub: 'SKU Nodes' },
  { label: 'Active Ops', value: 8, sub: 'Personnel' },
  { label: 'Queue', value: 11, sub: 'Pending' },
  { label: 'Auth Logs', value: 39, sub: 'Verified' },
];

const levelData = [
  { name: 'LV1', value: 320, color: '#FF5C00' },
  { name: 'LV2', value: 240, color: '#71717A' },
  { name: 'LV3', value: 48, color: '#000000' },
];

const performanceData = [
  { name: 'PHU', total: 132 },
  { name: 'TIEN', total: 127 },
  { name: 'LINH', total: 119 },
  { name: 'NHI', total: 94 },
  { name: 'LONG', total: 81 },
];

const KPIDashboardView: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-12 py-12 animate-fade">
      <div className="flex items-center justify-between mb-24">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter uppercase italic dark:text-white leading-none">ANALYTICS.</h1>
          <p className="text-[11px] font-black text-kinetic-orange uppercase tracking-[0.5em]">DEC 2025 // Global Matrix</p>
        </div>
        <div className="flex gap-4">
           <div className="px-8 py-4 bg-black/5 dark:bg-white/5 rounded-full flex items-center gap-4">
              <Calendar size={18} className="text-kinetic-zinc" />
              <span className="text-[11px] font-black uppercase tracking-widest">DECEMBER_2025</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="bg-black/5 dark:bg-white/5 p-10 rounded-[32px] hover:bg-white dark:hover:bg-kinetic-card hover:shadow-xl transition-all group">
             <p className="text-kinetic-zinc text-[10px] font-black uppercase tracking-widest mb-4 group-hover:text-kinetic-orange">{stat.label}</p>
             <h3 className="text-5xl font-black font-mono dark:text-white">{stat.value}</h3>
             <p className="text-[9px] font-black text-kinetic-zinc uppercase mt-4 opacity-40">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <div className="bg-black/5 dark:bg-white/5 rounded-[48px] p-16">
            <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-kinetic-zinc mb-16">Resource Flux</h3>
            <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={levelData} innerRadius={80} outerRadius={100} dataKey="value" stroke="none">
                            {levelData.map((e, i) => <Cell key={i} fill={e.color} />)}
                        </Pie>
                        <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '16px', fontSize: '11px', color: '#fff'}} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="lg:col-span-2 bg-black/5 dark:bg-white/5 rounded-[48px] p-16 flex flex-col">
            <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-kinetic-zinc mb-16">Output Index</h3>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                        <CartesianGrid stroke="#27272a" vertical={false} strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 11, fontWeight: '900'}} />
                        <YAxis hide />
                        <Bar dataKey="total" fill="#FF5C00" radius={[12, 12, 0, 0]} barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default KPIDashboardView;