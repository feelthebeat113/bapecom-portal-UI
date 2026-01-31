import React, { useState } from 'react';
import { 
  LogOut, ChevronDown, Lock, LayoutDashboard, Send, Plus, 
  History, Zap, Clock, Search, Users, BarChart2, 
  UserCheck, Briefcase, HardDrive, Layers, Settings 
} from 'lucide-react';

export default function Sidebar({ currentView, onNavigate }: any) {
  const [expandedReport, setExpandedReport] = useState(true);

  const NavItem = ({ id, label, icon: Icon, tag, locked }: any) => {
    const isActive = currentView === id;
    
    return (
      <button
        onClick={() => !locked && onNavigate(id)}
        className={`w-full flex items-center justify-between px-8 py-3.5 transition-all duration-300 group relative ${
          isActive 
            ? 'text-black dark:text-white' 
            : 'text-kinetic-zinc hover:text-black dark:hover:text-white'
        } ${locked ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {/* Active Indicator Line */}
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-kinetic-orange rounded-r-full orange-glow" />
        )}
        
        <div className="flex items-center gap-4">
          {Icon && (
            <Icon 
              size={18} 
              strokeWidth={isActive ? 2.5 : 2} 
              className={`transition-all ${isActive ? 'text-kinetic-orange' : 'text-kinetic-zinc group-hover:text-black dark:group-hover:text-white'}`} 
            />
          )}
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
            isActive ? 'translate-x-1' : 'group-hover:translate-x-0.5'
          }`}>
            {label}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {tag === 'DEV' && (
            <span className="text-[8px] font-black bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded border border-yellow-500/20">DEV</span>
          )}
          {locked && <Lock size={12} className="text-kinetic-zinc" />}
        </div>
      </button>
    );
  };

  const SubItem = ({ id, label, icon: Icon }: any) => {
    const isActive = currentView === id;
    return (
      <button
        onClick={() => onNavigate(id)}
        className={`w-full flex items-center gap-3 pl-14 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all group ${
          isActive ? 'text-kinetic-orange' : 'text-kinetic-zinc hover:text-black dark:hover:text-white'
        }`}
      >
        {Icon && (
          <Icon 
            size={14} 
            strokeWidth={2.5} 
            className={isActive ? 'text-kinetic-orange' : 'text-kinetic-zinc/60 group-hover:text-kinetic-zinc'} 
          />
        )}
        {label}
      </button>
    );
  };

  return (
    <aside className="w-72 h-full bg-transparent flex flex-col border-r border-black/5 dark:border-white/5">
      {/* Brand Section */}
      <div className="p-10 mb-6">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center font-black text-xl italic shadow-2xl transition-transform group-hover:scale-110">
             B
          </div>
          <div>
            <h2 className="text-sm font-black tracking-[0.15em] uppercase leading-none">BAPECOM</h2>
            <p className="text-[8px] font-bold text-kinetic-zinc uppercase tracking-[0.3em] mt-1.5 opacity-60">System Core 4.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-10 overflow-y-auto custom-scrollbar pb-10">
        {/* Simple Dashboard Link */}
        <div>
          <NavItem id="home" label="Dashboard" icon={LayoutDashboard} />
        </div>

        {/* Section: DESIGNER */}
        <section className="space-y-1">
          <p className="px-8 mb-4 text-[9px] font-black text-kinetic-zinc uppercase tracking-[0.4em] opacity-30">Designer</p>
          
          <div className="space-y-0.5">
            <button 
              onClick={() => setExpandedReport(!expandedReport)}
              className="w-full flex items-center justify-between px-8 py-3.5 group text-kinetic-zinc hover:text-black dark:hover:text-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <Send size={18} className={`transition-all ${expandedReport ? 'text-kinetic-orange' : 'text-kinetic-zinc'}`} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Designer Report</span>
              </div>
              <ChevronDown size={14} className={`transition-transform duration-300 ${expandedReport ? '' : '-rotate-90 opacity-40'}`} />
            </button>
            
            {expandedReport && (
              <div className="space-y-1 mt-1 animate-fade">
                <SubItem id="submit_design" label="New Report" icon={Plus} />
                <SubItem id="history" label="History" icon={History} />
                <SubItem id="my_kpi" label="My KPI" icon={Zap} />
                <SubItem id="pending" label="Pending" icon={Clock} />
              </div>
            )}
          </div>

          <NavItem id="design_search" label="Design Search" icon={Search} />
        </section>

        {/* Section: MANAGER */}
        <section className="space-y-1">
          <p className="px-8 mb-4 text-[9px] font-black text-kinetic-zinc uppercase tracking-[0.4em] opacity-30">Manager</p>
          <NavItem id="team_kpi" label="Team KPI Tracker" icon={Users} />
          <NavItem id="kpi" label="KPI Dashboard" icon={BarChart2} />
          <NavItem id="hr_management" label="HR Management" icon={UserCheck} tag="DEV" />
          <NavItem id="orders_manager" label="Orders Manager" icon={Briefcase} locked />
        </section>

        {/* Section: TOOL */}
        <section className="space-y-1">
          <p className="px-8 mb-4 text-[9px] font-black text-kinetic-zinc uppercase tracking-[0.4em] opacity-30">Tool</p>
          <NavItem id="syno_files" label="Syno Files" icon={HardDrive} />
          <NavItem id="project_board" label="Project Board" icon={Layers} />
        </section>

        {/* Section: SYSTEM */}
        <section className="space-y-1">
          <p className="px-8 mb-4 text-[9px] font-black text-kinetic-zinc uppercase tracking-[0.4em] opacity-30">System</p>
          <NavItem id="admin" label="Admin Panel" icon={Settings} />
        </section>
      </nav>

      {/* Footer Profile */}
      <div className="p-8">
        <div className="bg-black/5 dark:bg-white/[0.03] p-5 rounded-[24px] border border-black/5 dark:border-white/5 group hover:border-kinetic-orange/20 transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[11px] font-black shadow-lg">
              DL
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase truncate group-hover:text-kinetic-orange transition-colors">Des Linh</p>
              <span className="text-[8px] font-bold text-kinetic-zinc uppercase tracking-widest block mt-0.5">Sr. Operator</span>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 flex items-center justify-center gap-3 text-kinetic-zinc hover:text-rose-500 transition-colors text-[9px] font-black uppercase tracking-[0.3em]">
          <LogOut size={12} />
          Terminate session
        </button>
      </div>
    </aside>
  );
}