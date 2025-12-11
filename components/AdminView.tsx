import React, { useState } from 'react';
import StatsGrid from './StatsGrid';
import UserTable from './UserTable';
import ActivityChart from './ActivityChart';
import AddUserModal from './AddUserModal';
import { Plus, Settings } from 'lucide-react';

const AdminView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-indigo-400">
                    <Settings size={24} />
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Admin Panel</h1>
            </div>
            <p className="text-slate-400 ml-1">Quản lý users và phân quyền hệ thống</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>Thêm User</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
             <StatsGrid />
        </div>

        {/* Content Grid (Table + Chart) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="xl:col-span-2">
            <UserTable />
          </div>
          <div className="xl:col-span-1 min-h-[300px]">
            <ActivityChart />
          </div>
        </div>

      {/* Interactive Modal */}
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AdminView;
