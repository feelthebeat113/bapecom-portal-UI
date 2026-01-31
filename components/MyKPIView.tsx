import React from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

const MyKPIView: React.FC = () => {
  // Mock data for the calendar grid aligned with the user screenshot logic
  const days = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    
    // Status Logic mapped from the reference image:
    const reachedDays = [2, 3, 4, 5, 9, 10, 11, 12, 19, 23, 24, 25, 26, 27, 30];
    const failedDays = [6, 13, 16, 17, 18, 20, 31];
    
    let currentStatus = 'off';
    if (reachedDays.includes(day)) currentStatus = 'reached';
    if (failedDays.includes(day)) currentStatus = 'failed';

    return {
      day,
      status: currentStatus,
      value: Math.floor(Math.random() * 15) + 15
    };
  });

  const StatusDot = ({ status, size = "w-2 h-2" }: { status: string; size?: string }) => {
    const colors = {
      reached: 'bg-[#FF5C00] orange-glow',
      failed: 'bg-[#F43F5E] shadow-[0_0_10px_rgba(244,63,94,0.4)]',
      off: 'bg-zinc-400 dark:bg-[#27272A]'
    };
    return <div className={`${size} rounded-full ${colors[status as keyof typeof colors]}`} />;
  };

  return (
    <div className="min-h-full transition-colors duration-500 light:bg-white dark:bg-black p-8 lg:p-12 animate-fade">
      {/* Top Header / Legend */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-10">
          <h2 className="text-[14px] font-black uppercase tracking-[0.6em] text-black dark:text-white">CHRONO_MATRIX</h2>
          <div className="flex items-center gap-4 bg-black/5 dark:bg-white/5 rounded-full px-5 py-2 border border-black/5 dark:border-white/5">
             <button className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"><ChevronLeft size={16} /></button>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] w-32 text-center text-zinc-600 dark:text-zinc-300">December_2025</span>
             <button className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>

        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <StatusDot status="reached" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Reached</span>
           </div>
           <div className="flex items-center gap-3">
              <StatusDot status="failed" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Failed</span>
           </div>
           <div className="flex items-center gap-3">
              <StatusDot status="off" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Off_Day</span>
           </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        
        {/* Calendar Section */}
        <div className="xl:col-span-8 bg-black/5 dark:bg-[#050505] rounded-[60px] p-10 border border-black/5 dark:border-white/[0.03]">
          <div className="grid grid-cols-7 gap-6 mb-8">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-5">
            {days.map((data) => (
              <div 
                key={data.day} 
                className={`aspect-square rounded-[32px] p-5 flex flex-col justify-between transition-all border group relative ${
                  data.status === 'off' 
                    ? 'bg-transparent border-black/5 dark:border-white/[0.02] opacity-20' 
                    : 'bg-white dark:bg-[#0A0A0A] border-black/5 dark:border-white/[0.05] hover:border-zinc-400 dark:hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[12px] font-black font-mono text-zinc-500 dark:text-zinc-400">
                    {data.day < 10 ? `0${data.day}` : data.day}
                  </span>
                  {data.status !== 'off' && <StatusDot status={data.status} size="w-2.5 h-2.5" />}
                </div>

                {data.status !== 'off' && (
                  <div className="space-y-2">
                    <span className="text-[9px] font-black font-mono text-zinc-400 dark:text-zinc-500 block">{data.value}u</span>
                    <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${data.status === 'reached' ? 'bg-[#FF5C00]' : 'bg-[#F43F5E]'} transition-all duration-700`} 
                        style={{ width: `${(data.value / 30) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="xl:col-span-4 space-y-10">
          
          {/* Performance Card - Theme Consistent (Light = White, Dark = Black) */}
          <div className="bg-white dark:bg-kinetic-card rounded-[60px] p-12 text-black dark:text-white border border-black/5 dark:border-white/5 shadow-2xl flex flex-col items-start gap-12 min-h-[420px] transition-all duration-500">
            <h4 className="text-[14px] font-black uppercase tracking-[0.6em] leading-none opacity-80">Performance</h4>
            
            <div className="flex items-center gap-10">
               <span className="text-9xl font-black tracking-tighter leading-none">8.4</span>
               <div className="flex flex-col justify-center">
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] leading-tight opacity-70">Index</span>
                  <span className="text-[12px] font-black uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500 mt-1 whitespace-pre-line leading-relaxed">
                    +1.2 THIS{"\n"}MONTH
                  </span>
               </div>
            </div>

            <button className="w-full py-7 bg-black/5 dark:bg-white/5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all mt-auto">
              Analyze Methodology
            </button>
          </div>

          {/* Monthly Recap Card - Theme Consistent */}
          <div className="bg-white dark:bg-[#0A0A0A] rounded-[48px] p-12 border border-black/5 dark:border-white/[0.05] shadow-xl dark:shadow-none space-y-10">
            <div className="flex items-center gap-4 text-[#FF5C00]">
               <div className="w-6 h-6 rounded-full border border-[#FF5C00]/30 flex items-center justify-center">
                  <Info size={12} strokeWidth={3} />
               </div>
               <h4 className="text-[11px] font-black uppercase tracking-[0.4em]">Monthly_Recap</h4>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Days Reached</span>
                <span className="text-[12px] font-black font-mono text-black dark:text-white">22</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Below Threshold</span>
                <span className="text-[12px] font-black font-mono text-[#F43F5E]">04</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Avg. Daily Yield</span>
                <span className="text-[12px] font-black font-mono text-black dark:text-white">14.2u</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/[0.03] flex justify-between items-center opacity-30">
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black dark:text-white">System_Node: BAPECOM_CORE_002</span>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Last_Sync: 04m_ago</span>
      </div>
    </div>
  );
};

export default MyKPIView;