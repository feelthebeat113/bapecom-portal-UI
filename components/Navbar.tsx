import React from 'react';
import { Home, Settings, Bell, Search, Menu } from 'lucide-react';

interface NavbarProps {
  toggleSidebar?: () => void;
  currentView?: 'home' | 'admin' | 'kpi' | 'dodgeprint' | 'designer_report';
  onNavigate?: (view: 'home' | 'admin' | 'kpi' | 'dodgeprint' | 'designer_report') => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, currentView = 'home', onNavigate }) => {
  
  const handleNav = (e: React.MouseEvent, view: 'home' | 'admin') => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo & Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNav(e, 'home')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                B
              </div>
              <div className="hidden md:block">
                <span className="block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  BAPECOM
                </span>
                <span className="block text-xs text-slate-500 -mt-1 tracking-wider uppercase">Portal</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 ml-4">
              <a 
                href="#" 
                onClick={(e) => handleNav(e, 'home')}
                className={`flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  currentView === 'home' 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Home size={16} />
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNav(e, 'admin')}
                className={`flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  currentView === 'admin' 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Settings size={16} />
                Admin
              </a>
            </div>
          </div>

          {/* Right Side: Profile & Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all w-64"
              />
            </div>

            <button className="text-slate-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">Duy</p>
                <p className="text-xs text-slate-400">admin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold shadow-inner ring-2 ring-slate-900 cursor-pointer">
                D
              </div>
            </div>
            
             <button className="md:hidden text-slate-300" onClick={toggleSidebar}>
               <Menu size={24} />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
