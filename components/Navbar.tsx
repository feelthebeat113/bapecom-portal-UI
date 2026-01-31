import React from 'react';
import { Home, Settings, Bell, Search, Menu, UserCircle, Shield } from 'lucide-react';

interface NavbarProps {
  toggleSidebar?: () => void;
  currentView?: 'home' | 'admin' | 'kpi' | 'my_kpi' | 'dodgeprint' | 'designer_report' | 'project_board';
  onNavigate?: (view: 'home' | 'admin' | 'kpi' | 'my_kpi' | 'dodgeprint' | 'designer_report' | 'project_board') => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, currentView = 'home', onNavigate }) => {
  
  const handleNav = (e: React.MouseEvent, view: any) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-midnight-950/70 border-b border-white/5 h-18 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => handleNav(e, 'home')}>
              <div className="w-10 h-10 rounded-[1.25rem] bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-600/20 group-hover:rotate-6 transition-all">
                B
              </div>
              <div className="hidden md:block">
                <span className="block text-sm font-extrabold text-white tracking-tight uppercase">
                  BAPECOM
                </span>
                <span className="block text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase">Operations Portal</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {[
                { id: 'home', icon: <Home size={16} />, label: 'Home' },
                { id: 'my_kpi', icon: <UserCircle size={16} />, label: 'My Hub' },
                { id: 'admin', icon: <Shield size={16} />, label: 'Terminal' },
              ].map((item) => (
                <a 
                  key={item.id}
                  href="#" 
                  onClick={(e) => handleNav(e, item.id)}
                  className={`flex items-center gap-2 text-xs font-bold transition-all px-5 py-2.5 rounded-2xl ${
                    currentView === item.id 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'text-slate-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-white transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/5 border border-white/5 text-white text-xs font-medium rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500/50 transition-all w-56 placeholder:text-slate-600"
              />
            </div>

            <button className="text-slate-500 hover:text-white transition-colors relative p-2 bg-white/5 rounded-xl border border-white/5">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-midnight-950"></span>
            </button>

            <div className="flex items-center gap-4 pl-1 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Des Linh</p>
                <p className="text-[9px] text-slate-500 font-medium uppercase">Senior Operator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center text-white font-bold text-sm ring-2 ring-transparent group-hover:ring-indigo-500/30 transition-all">
                L
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;