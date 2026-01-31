import React, { useState } from 'react';
import StatsGrid from './StatsGrid';
import UserTable from './UserTable';
import ActivityChart from './ActivityChart';
import AddUserModal from './AddUserModal';
import { Activity, ShieldCheck, UserPlus, Database } from 'lucide-react';

const AdminView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[1600px] mx-auto px-12 py-12 animate-fade">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
                <ShieldCheck size={28} className="text-kinetic-orange" strokeWidth={1.5} />
                <span className="text-[11px] font-black text-kinetic-orange uppercase tracking-[0.5em]">Root Directory</span>
            </div>
            <h1 className="text-9xl font-black tracking-tighter dark:text-white uppercase italic leading-none">USERS.</h1>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-kinetic btn-kinetic-primary flex items-center justify-center gap-6 px-12 orange-glow"
          >
            <UserPlus size={20} /> Provision Member
          </button>
        </div>

        <div className="mb-24">
             <StatsGrid />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-8 space-y-10">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <Database size={20} className="text-kinetic-zinc" />
                   <h3 className="text-[14px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Active Directory</h3>
                </div>
                <span className="px-4 py-1.5 bg-kinetic-orange/10 text-kinetic-orange rounded-full text-[10px] font-black font-mono">342 ONLINE</span>
             </div>
             <div className="bg-black/5 dark:bg-white/5 rounded-[40px] overflow-hidden">
                <UserTable />
             </div>
          </div>
          <div className="xl:col-span-4 space-y-10">
            <div className="flex items-center gap-4">
               <Activity size={20} className="text-kinetic-zinc" />
               <h3 className="text-[14px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">System Load</h3>
            </div>
            <div className="bg-black/5 dark:bg-white/5 rounded-[40px] p-16">
               <div className="h-64">
                <ActivityChart />
               </div>
               <div className="mt-20">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-[12px] font-black text-kinetic-zinc uppercase tracking-widest">Global CPU</span>
                     <span className="text-[12px] font-black font-mono text-kinetic-orange">42.08%</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full">
                     <div className="h-full bg-kinetic-orange rounded-full w-[42%] transition-all duration-1000 orange-glow"></div>
                  </div>
                  <p className="text-[10px] font-black text-kinetic-zinc uppercase mt-10 tracking-[0.1em] opacity-40">Optimized for high-throughput batching processes.</p>
               </div>
            </div>
          </div>
        </div>

      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AdminView;