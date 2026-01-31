import React from 'react';
import { 
  Activity, Zap, TrendingUp, ShieldCheck, Plus, 
  ArrowUpRight, Globe, Cpu, Maximize2, Layers,
  ChevronRight, BarChart3, Clock
} from 'lucide-react';
import { 
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip,
  BarChart, Bar
} from 'recharts';

const chartData = [
  { time: '00:00', val: 400 }, { time: '04:00', val: 300 },
  { time: '08:00', val: 600 }, { time: '12:00', val: 800 },
  { time: '16:00', val: 500 }, { time: '20:00', val: 900 },
  { time: '23:59', val: 750 },
];

const miniChartData = [
  { name: 'A', v: 40 }, { name: 'B', v: 70 }, { name: 'C', v: 50 },
  { name: 'D', v: 90 }, { name: 'E', v: 60 }, { name: 'F', v: 80 },
];

export default function HomeView({ onNavigate }: any) {
  const MetricCard = ({ label, value, trend, icon: Icon }: any) => (
    <div className="p-8 group bg-black/5 dark:bg-white/[0.03] rounded-[32px] hover:bg-white dark:hover:bg-kinetic-card transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-black/5 dark:hover:border-white/5">
      <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10 bg-white dark:bg-black rounded-xl flex items-center justify-center text-kinetic-zinc group-hover:text-kinetic-orange transition-colors">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-black font-mono ${trend >= 0 ? 'text-kinetic-orange' : 'text-rose-500'}`}>
          <TrendingUp size={12} className={trend < 0 ? 'rotate-180' : ''} />
          {trend >= 0 ? '+' : ''}{trend}%
        </div>
      </div>
      <div>
        <p className="text-[9px] font-black text-kinetic-zinc uppercase tracking-[0.3em] mb-2">{label}</p>
        <h3 className="text-4xl font-black tracking-tighter font-mono dark:text-white leading-none">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="p-8 lg:p-12 max-w-[1800px] mx-auto animate-fade space-y-8">
      {/* Header Section */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 bg-kinetic-orange rounded-full orange-glow animate-pulse"></div>
             <span className="text-[11px] font-black text-kinetic-orange uppercase tracking-[0.5em]">System Core: Operational</span>
          </div>
          <h1 className="text-7xl xl:text-8xl font-black tracking-tighter dark:text-white leading-none uppercase italic">DASHBOARD.</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
           <div className="hidden sm:flex flex-col items-end mr-6 text-right">
              <span className="text-[10px] font-black text-kinetic-zinc uppercase tracking-widest">Local Time</span>
              <span className="text-xl font-black font-mono dark:text-white tracking-tighter">14:42:08</span>
           </div>
           <button onClick={() => onNavigate('submit_design')} className="btn-kinetic btn-kinetic-primary flex items-center gap-6 orange-glow shadow-xl">
              <Plus size={18} /> Initiate Payload
           </button>
        </div>
      </div>

      {/* Main Grid: 12 Columns */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Cell 1: Large Performance Matrix (8/12) */}
        <div className="col-span-12 xl:col-span-8 bg-black/5 dark:bg-white/[0.03] rounded-[48px] p-10 lg:p-14 relative overflow-hidden group border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-16">
              <div className="space-y-2">
                <h3 className="text-3xl font-black tracking-tighter uppercase italic">Throughput Matrix</h3>
                <p className="text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Network Velocity // Real-time Sync</p>
              </div>
              <div className="flex gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5">
                 <button className="px-6 py-2.5 bg-white dark:bg-black text-black dark:text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">Real-time</button>
                 <button className="px-6 py-2.5 text-kinetic-zinc text-[9px] font-black uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">Historical</button>
              </div>
            </div>

            <div className="flex-1 min-h-[300px] w-full mb-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF5C00" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF5C00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: '900', color: '#fff', padding: '12px 20px' }}
                    itemStyle={{ color: '#FF5C00' }}
                    cursor={{ stroke: '#FF5C00', strokeWidth: 2, strokeDasharray: '4 4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="val" 
                    stroke="#FF5C00" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorVal)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-black/5 dark:border-white/5">
               <div>
                  <p className="text-[10px] font-black text-kinetic-zinc uppercase tracking-widest mb-2">Peak Rate</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black font-mono">1.2k</span>
                    <span className="text-[10px] font-black text-kinetic-orange uppercase">Sync/s</span>
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black text-kinetic-zinc uppercase tracking-widest mb-2">Average Flow</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black font-mono">842</span>
                    <span className="text-[10px] font-black text-kinetic-zinc uppercase">Mbps</span>
                  </div>
               </div>
               <div className="flex justify-end items-end">
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-kinetic-orange group/btn">
                    Expand Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Cell 2: System Nodes Health (4/12) */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-8">
          
          <div className="flex-1 bg-black/5 dark:bg-white/[0.03] rounded-[48px] p-10 flex flex-col border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all">
            <div className="flex items-center gap-4 mb-12">
               <div className="p-3 bg-kinetic-orange/10 rounded-xl text-kinetic-orange">
                  <Cpu size={24} />
               </div>
               <h4 className="text-[14px] font-black uppercase tracking-[0.4em]">Node Clusters</h4>
            </div>
            
            <div className="flex-1 space-y-8">
              {[
                { label: 'Cluster Alpha', status: 'Optimal', val: 78, color: 'bg-kinetic-orange' },
                { label: 'Relay Nodes', status: 'Active', val: 42, color: 'bg-kinetic-zinc' },
                { label: 'Encryption', status: 'Secured', val: 99, color: 'bg-kinetic-orange' },
              ].map((node, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-kinetic-zinc">{node.label}</span>
                    <span className="text-black dark:text-white">{node.status} // {node.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${node.color} rounded-full transition-all duration-1000 orange-glow`} style={{ width: `${node.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/5 flex items-center justify-between group cursor-pointer hover:bg-kinetic-orange transition-all">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-black flex items-center justify-center">
                    <Activity size={18} className="text-kinetic-orange" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Global Pulse Check</span>
               </div>
               <ArrowUpRight size={18} className="text-kinetic-zinc group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="h-48 bg-kinetic-orange rounded-[40px] p-10 flex items-center justify-between orange-glow group cursor-pointer hover:scale-[1.02] transition-all">
             <div className="space-y-2 text-white">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Accumulated Yield</p>
                <h4 className="text-5xl font-black font-mono tracking-tighter leading-none">$725K</h4>
             </div>
             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md">
                <BarChart3 size={28} />
             </div>
          </div>
        </div>

        {/* Bottom Metrics Row (4 Columns) */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <MetricCard label="Bandwidth" value="1.24k" trend={12.4} icon={Globe} />
           <MetricCard label="Processing" value="482" trend={5.2} icon={Layers} />
           <MetricCard label="Integrity" value="99.2%" trend={0.1} icon={ShieldCheck} />
           <MetricCard label="Latency" value="0.04ms" trend={-8.1} icon={Clock} />
        </div>

      </div>
    </div>
  );
}