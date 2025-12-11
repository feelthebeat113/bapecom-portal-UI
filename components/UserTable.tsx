import React from 'react';
import { MoreVertical, Edit2, Trash2, Mail, Slack, Figma, Github, Trello } from 'lucide-react';
import { User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Nguyễn Văn Duy',
    email: 'feelthebeat113@gmail.com',
    role: 'admin',
    department: 'IT Infrastructure',
    apps: ['slack', 'github'],
    avatarUrl: 'https://picsum.photos/100/100?random=1',
    status: 'active'
  },
  {
    id: '2',
    name: 'Trần Thị Thu Hương',
    email: 'huong.design@bapecom.vn',
    role: 'staff',
    department: 'Product Design',
    apps: ['figma', 'slack', 'trello'],
    avatarUrl: 'https://picsum.photos/100/100?random=2',
    status: 'active'
  },
  {
    id: '3',
    name: 'Lê Minh Tuấn',
    email: 'tuan.dev@bapecom.vn',
    role: 'manager',
    department: 'Engineering',
    apps: ['github', 'slack'],
    avatarUrl: 'https://picsum.photos/100/100?random=3',
    status: 'inactive'
  },
  {
    id: '4',
    name: 'Phạm Quỳnh Anh',
    email: 'quynhanh@bapecom.vn',
    role: 'staff',
    department: 'Marketing',
    apps: ['slack', 'trello'],
    avatarUrl: 'https://picsum.photos/100/100?random=4',
    status: 'active'
  },
];

const RoleBadge = ({ role }: { role: string }) => {
  const styles = {
    admin: 'bg-red-500/10 text-red-400 border-red-500/20',
    manager: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    staff: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };
  
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[role as keyof typeof styles]} capitalize`}>
      {role}
    </span>
  );
};

const AppIcon = ({ app }: { app: string }) => {
  switch (app) {
    case 'slack': return <Slack size={16} className="text-amber-400" />;
    case 'figma': return <Figma size={16} className="text-purple-400" />;
    case 'github': return <Github size={16} className="text-white" />;
    case 'trello': return <Trello size={16} className="text-blue-400" />;
    default: return null;
  }
};

const UserTable: React.FC = () => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80">
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">User Profile</th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Role & Dept</th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Apps</th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {mockUsers.map((user) => (
              <tr key={user.id} className="group hover:bg-slate-800/40 transition-colors duration-200">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-slate-700 group-hover:border-indigo-500 transition-colors" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">{user.name}</p>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-0.5">
                        <Mail size={10} />
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col items-start gap-1">
                    <RoleBadge role={user.role} />
                    <span className="text-xs text-slate-400">{user.department}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-600'}`}></span>
                        <span className={`text-sm ${user.status === 'active' ? 'text-slate-200' : 'text-slate-500'}`}>
                            {user.status === 'active' ? 'Active' : 'Offline'}
                        </span>
                    </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex -space-x-2 overflow-hidden pl-1">
                    {user.apps.map((app, i) => (
                      <div key={i} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 ring-2 ring-slate-900 relative z-10" title={app}>
                        <AppIcon app={app} />
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-400/10 rounded-lg transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/40 flex items-center justify-between text-xs text-slate-500">
        <span>Showing 4 of 248 users</span>
        <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">Previous</button>
            <button className="px-3 py-1 rounded bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
