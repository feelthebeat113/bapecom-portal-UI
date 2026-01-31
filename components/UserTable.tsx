import React from 'react';
import { Edit2, Trash2, Box } from 'lucide-react';
import { User } from '../types';

const mockUsers: User[] = [
  { id: '1', name: 'Nguyễn Văn Duy', email: 'feelthebeat113@gmail.com', role: 'admin', department: 'IT Infra', apps: ['slack', 'github'], avatarUrl: 'https://picsum.photos/100/100?random=1', status: 'active' },
  { id: '2', name: 'Trần Thị Thu Hương', email: 'huong.design@bapecom.vn', role: 'staff', department: 'Design', apps: ['figma', 'slack'], avatarUrl: 'https://picsum.photos/100/100?random=2', status: 'active' },
  { id: '3', name: 'Lê Minh Tuấn', email: 'tuan.dev@bapecom.vn', role: 'manager', department: 'Eng', apps: ['github', 'slack'], avatarUrl: 'https://picsum.photos/100/100?random=3', status: 'inactive' },
];

const RoleBadge = ({ role }: { role: string }) => {
  const styles = {
    admin: 'bg-kinetic-orange text-white',
    manager: 'bg-black/10 dark:bg-white/10 text-kinetic-zinc border border-black/5 dark:border-white/5',
    staff: 'bg-transparent text-kinetic-zinc border border-black/10 dark:border-white/10',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${styles[role as keyof typeof styles]}`}>
      {role}
    </span>
  );
};

const UserTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-black/5 dark:border-white/5">
            <th className="py-8 px-10 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Operative</th>
            <th className="py-8 px-10 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Department</th>
            <th className="py-8 px-10 text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Status</th>
            <th className="py-8 px-10 text-right text-[11px] font-black text-kinetic-zinc uppercase tracking-[0.3em]">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 dark:divide-white/5">
          {mockUsers.map((user) => (
            <tr key={user.id} className="hover:bg-white dark:hover:bg-kinetic-card group transition-all">
              <td className="py-8 px-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center font-black text-sm uppercase group-hover:bg-kinetic-orange group-hover:text-white transition-all">
                      {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-black uppercase text-black dark:text-white tracking-widest">{user.name}</p>
                    <p className="text-[10px] text-kinetic-zinc font-mono mt-1">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-8 px-10">
                <div className="flex flex-col items-start gap-2">
                  <RoleBadge role={user.role} />
                  <span className="text-[10px] font-black text-kinetic-zinc uppercase tracking-widest opacity-50">{user.department}</span>
                </div>
              </td>
              <td className="py-8 px-10">
                  <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-kinetic-orange orange-glow' : 'bg-kinetic-zinc opacity-30'}`}></div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{user.status}</span>
                  </div>
              </td>
              <td className="py-8 px-10 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-kinetic-zinc hover:text-kinetic-orange"><Edit2 size={16} /></button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-kinetic-zinc hover:text-rose-500"><Trash2 size={16} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;