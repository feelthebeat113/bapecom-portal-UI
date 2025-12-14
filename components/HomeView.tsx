import React, { useState } from 'react';
import { Palette, HardDrive, Users, BarChart3, ShoppingBag, Settings, Search, Lock, ArrowRight, Store } from 'lucide-react';

interface AppCardProps {
  title: string;
  description: string;
  category: string;
  status: 'live' | 'development' | 'coming_soon';
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const apps = [
  {
    id: 'design',
    title: 'Design Search',
    description: 'Tìm kiếm và quản lý file thiết kế từ NAS',
    category: 'Creative',
    status: 'live',
    icon: <Palette size={24} />,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'syno',
    title: 'Syno Files',
    description: 'Truy cập và quản lý files trên Synology NAS',
    category: 'Utility',
    status: 'live',
    icon: <HardDrive size={24} />,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'hr',
    title: 'HR Management',
    description: 'Quản lý nhân sự, thông tin nhân viên',
    category: 'Management',
    status: 'development',
    icon: <Users size={24} />,
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'kpi',
    title: 'KPI Dashboard',
    description: 'Theo dõi và quản lý KPI cá nhân và team',
    category: 'Management',
    status: 'live',
    icon: <BarChart3 size={24} />,
    color: 'from-emerald-500 to-teal-500',
    target: 'kpi'
  },
  {
    id: 'dodgeprint',
    title: 'Dodgeprint Analytics',
    description: 'Real-time order monitoring & revenue analytics',
    category: 'Management',
    status: 'live',
    icon: <Store size={24} />,
    color: 'from-orange-500 to-amber-500',
    target: 'dodgeprint'
  },
  {
    id: 'orders',
    title: 'Orders Manager',
    description: 'Quản lý đơn hàng và khách hàng',
    category: 'Management',
    status: 'coming_soon',
    icon: <ShoppingBag size={24} />,
    color: 'from-slate-600 to-slate-500'
  },
  {
    id: 'admin',
    title: 'Admin Panel',
    description: 'Quản lý users, phân quyền và cài đặt hệ thống',
    category: 'System',
    status: 'live',
    icon: <Settings size={24} />,
    color: 'from-slate-500 to-gray-500',
    target: 'admin'
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    development: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    coming_soon: 'bg-slate-700/50 text-slate-400 border-slate-700',
  };

  const labels = {
    live: 'LIVE',
    development: 'In Development',
    coming_soon: 'Coming Soon',
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof styles]}
    </span>
  );
};

interface HomeViewProps {
  onNavigate: (view: 'home' | 'admin' | 'kpi' | 'dodgeprint') => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Management', 'Creative', 'System', 'Utility'];

  const filteredApps = apps.filter(app => {
    const matchesFilter = activeFilter === 'All' || app.category === activeFilter;
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Xin chào, Duy! 👋</h1>
        <p className="text-slate-400 text-lg">Chọn một ứng dụng để bắt đầu làm việc</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-slate-900 shadow-lg shadow-white/10'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Tìm kiếm ứng dụng..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:bg-slate-900 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <div 
            key={app.id}
            onClick={() => (app.target === 'admin' || app.target === 'kpi' || app.target === 'dodgeprint') ? onNavigate(app.target as any) : null}
            className={`group relative bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 ${
              app.status === 'coming_soon' 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-slate-800/40 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl cursor-pointer'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3.5 rounded-xl bg-gradient-to-br ${app.color} shadow-lg text-white`}>
                {app.icon}
              </div>
              <StatusBadge status={app.status as any} />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{app.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{app.description}</p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{app.category}</span>
              
              {app.status === 'coming_soon' ? (
                <Lock size={18} className="text-slate-600" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={16} className="-ml-0.5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
