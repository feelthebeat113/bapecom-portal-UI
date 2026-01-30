import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Zap, 
  Calendar, 
  CheckCircle, 
  Star, 
  Clock, 
  AlertTriangle, 
  XCircle, 
  Layers, 
  ArrowUpRight,
  Check,
  LayoutGrid,
  Trophy,
  Coffee,
  TrendingUp,
  User,
  Sparkles
} from 'lucide-react';

const MyKPIView: React.FC = () => {
  const calendarDays = [
    { day: 1, status: 'holiday', label: 'New Year' },
    { day: 2, status: 'approved', points: '15P' },
    { day: 3, status: 'approved', points: '16.5P' },
    { day: 4, status: 'weekend' },
    { day: 5, status: 'approved', points: '19.5P' },
    { day: 6, status: 'approved', points: '7.5P' },
    { day: 7, status: 'approved', points: '13.5P' },
    { day: 8, status: 'approved', points: '16.5P' },
    { day: 9, status: 'approved', points: '19.5P' },
    { day: 10, status: 'weekend' },
    { day: 11, status: 'weekend' },
    { day: 12, status: 'approved', points: '17P' },
    { day: 13, status: 'leave' },
    { day: 14, status: 'approved', points: '13P' },
    { day: 15, status: 'approved', points: '17P' },
    { day: 16, status: 'approved', points: '19P' },
    { day: 17, status: 'approved', points: '17P' },
    { day: 18, status: 'weekend' },
    { day: 19, status: 'approved', points: '20P' },
    { day: 20, status: 'approved', points: '22P' },
    { day: 21, status: 'approved', points: '20P' },
    { day: 22, status: 'approved', points: '19.5P' },
    { day: 23, status: 'approved', points: '19.5P' },
    { day: 24, status: 'approved', points: '13P' },
    { day: 25, status: 'weekend' },
    { day: 26, status: 'approved', points: '18P' },
    { day: 27, status: 'approved', points: '20P' },
    { day: 28, status: 'none' },
    { day: 29, status: 'none' },
    { day: 30, status: 'none' },
    { day: 31, status: 'none' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10 pb-24">
      
      {/* 1. HERO DASHBOARD: All-in-one Profile, Progress & Monthly Goal */}
      <section className="relative group">
        {/* Glow Effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col xl:flex-row items-center gap-12">
          
          {/* User Profile Visual */}
          <div className="flex flex-col items-center xl:items-start gap-6 lg:min-w-[280px]">
             <div className="relative">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-indigo-500/30 transform group-hover:rotate-3 transition-transform duration-500 ring-1 ring-white/20">
                  D
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-1.5 rounded-2xl border-4 border-slate-900 shadow-lg">
                   <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                </div>
             </div>
             <div className="text-center xl:text-left space-y-1">
                <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-2 justify-center xl:justify-start">
                  Des Linh <Sparkles className="text-yellow-400" size={24} />
                </h1>
                <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-2 justify-center xl:justify-start">
                  Senior Designer <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span> #LIN-2026
                </p>
             </div>
          </div>

          {/* Progress Architecture */}
          <div className="flex-1 w-full space-y-8">
             <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                   <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Target size={16} className="text-indigo-400" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Current Achievement</span>
                   </div>
                   <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter">242.0</span>
                      <span className="text-xl font-bold text-slate-500">/ 410.0 P</span>
                   </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                      <span className="text-2xl font-black text-indigo-400 tracking-tight">59% <span className="text-sm font-bold opacity-60">Goal</span></span>
                   </div>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">12 Days Remaining</p>
                </div>
             </div>
             
             <div className="relative">
                <div className="h-6 w-full bg-slate-950/80 rounded-full border border-white/5 p-1 overflow-hidden shadow-inner backdrop-blur-md">
                   <div 
                     className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full relative shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out"
                     style={{ width: '59%' }}
                   >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-[progress-stripe_2s_linear_infinite]"></div>
                   </div>
                </div>
                {/* Milestone Markers */}
                <div className="absolute -top-1 left-[25%] h-8 w-[1px] bg-white/10"></div>
                <div className="absolute -top-1 left-[50%] h-8 w-[1px] bg-white/10"></div>
                <div className="absolute -top-1 left-[75%] h-8 w-[1px] bg-white/10"></div>
             </div>

             <div className="grid grid-cols-3 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] px-1">
                <span className="text-left">Start</span>
                <span className="text-center">Midpoint</span>
                <span className="text-right">Goal</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. ANALYTICS GRID: Metrics & Breakdown Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Data Column */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Productivity Pulse */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 space-y-6 shadow-xl">
             <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Efficiency Matrix</h4>
                <div className="p-2 bg-indigo-500/10 rounded-lg"><TrendingUp size={16} className="text-indigo-400" /></div>
             </div>
             
             <div className="space-y-5">
               {[
                 { label: 'Daily Average', val: '17.2', unit: 'Pts', icon: <Zap size={16} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
                 { label: 'Days Worked', val: '20', unit: 'Days', icon: <Calendar size={16} />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                 { label: 'Approved', val: '299', unit: 'Designs', icon: <CheckCircle size={16} />, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                 { label: 'KPI Points', val: '343', unit: 'Earned', icon: <Star size={16} />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
               ].map((s, i) => (
                 <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                       <div className={`p-2.5 rounded-xl ${s.bg} ${s.color} group-hover:scale-110 transition-transform`}>{s.icon}</div>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</span>
                    </div>
                    <div className="text-right">
                       <div className="text-lg font-black text-white tracking-tight">{s.val}</div>
                       <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{s.unit}</div>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Status Distribution */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 shadow-xl">
             <div className="flex items-center gap-3 mb-8">
                <LayoutGrid className="text-indigo-400" size={18} />
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Status Distribution</h4>
             </div>
             
             <div className="space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase">
                      <span>Approved Designs</span>
                      <span className="text-emerald-400">100%</span>
                   </div>
                   <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-[9px] font-black text-slate-600 uppercase mb-1">1P Designs</p>
                      <p className="text-xl font-black text-indigo-400">211</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-[9px] font-black text-slate-600 uppercase mb-1">1.5P Designs</p>
                      <p className="text-xl font-black text-indigo-400">88</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Calendar Column */}
        <div className="lg:col-span-8 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div>
               <h3 className="text-2xl font-black text-white tracking-tight mb-1">Activity Log</h3>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Monthly Performance Overview</p>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-white/5 shadow-inner">
               <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-500 hover:text-white transition-all"><ChevronLeft size={16} /></button>
               <span className="text-xs font-black text-white uppercase px-4 tracking-[0.1em]">January 2026</span>
               <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-500 hover:text-white transition-all"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 md:gap-4 lg:gap-5">
             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
               <div key={i} className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">{day}</div>
             ))}

             {/* Padding for month start */}
             {[...Array(3)].map((_, i) => <div key={i} className="aspect-square"></div>)}

             {calendarDays.map((item, idx) => (
               <div 
                 key={idx}
                 className={`aspect-square rounded-[1.25rem] border transition-all duration-500 relative group flex flex-col items-center justify-center cursor-default ${
                   item.status === 'approved' ? 'bg-indigo-600/10 border-indigo-500/20 hover:bg-indigo-600/20 hover:scale-[1.08] hover:shadow-2xl hover:shadow-indigo-500/20' :
                   item.status === 'leave' ? 'bg-orange-500/10 border-orange-500/20 hover:scale-[1.08]' :
                   item.status === 'holiday' ? 'bg-rose-500/10 border-rose-500/20 hover:scale-[1.08]' :
                   item.status === 'weekend' ? 'bg-slate-950/40 border-transparent' :
                   'bg-transparent border-white/[0.03] hover:border-white/10'
                 }`}
               >
                 <span className={`absolute top-2.5 left-2.5 text-[9px] font-black opacity-30 ${item.status === 'weekend' ? 'text-slate-600' : 'text-slate-400'}`}>
                   {item.day.toString().padStart(2, '0')}
                 </span>
                 
                 {item.points && (
                   <span className={`text-[13px] font-black tracking-tighter ${item.status === 'approved' ? 'text-indigo-300 drop-shadow-[0_0_10px_rgba(165,180,252,0.5)]' : 'text-slate-500'}`}>
                     {item.points}
                   </span>
                 )}
                 
                 {item.status === 'leave' && <Clock size={14} className="text-orange-400/80 animate-pulse" />}
                 {item.status === 'holiday' && <Coffee size={14} className="text-rose-400/80" />}
                 
                 {/* Decorative Pulse for approved days */}
                 {item.status === 'approved' && (
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
                 )}

                 {/* Rich Tooltip for Holiday Label */}
                 {item.status === 'holiday' && item.label && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1.5 bg-slate-950 border border-white/10 rounded-xl text-[10px] font-black text-rose-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all z-20 shadow-2xl pointer-events-none uppercase tracking-widest translate-y-2 group-hover:translate-y-0">
                       {item.label}
                       <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-950"></div>
                    </div>
                 )}
               </div>
             ))}
          </div>

          {/* Luxury Legend Footer */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-8 border-t border-white/[0.03]">
             {[
               { color: 'bg-indigo-500', label: 'Approved', shadow: 'shadow-indigo-500/50' },
               { color: 'bg-orange-500', label: 'Leave', shadow: 'shadow-orange-500/50' },
               { color: 'bg-rose-500', label: 'Holiday', shadow: 'shadow-rose-500/50' },
               { color: 'bg-slate-800', label: 'Weekend', shadow: '' },
             ].map((legend, i) => (
               <div key={i} className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${legend.color} ${legend.shadow} shadow-lg`}></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{legend.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-stripe {
          from { background-position: 40px 0; }
          to { background-position: 0 0; }
        }
      `}} />
    </div>
  );
};

export default MyKPIView;
