import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-semibold text-white">Thêm User Mới</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400">Tên hiển thị</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="VD: Nguyen Van A" />
             </div>
             <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400">Department</label>
                 <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all">
                    <option>IT Infrastructure</option>
                    <option>Design</option>
                    <option>Marketing</option>
                 </select>
             </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Email Address</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="user@bapecom.vn" />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Phân quyền</label>
            <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" className="accent-indigo-500" />
                    <span className="text-sm text-slate-300">Staff</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" className="accent-indigo-500" />
                    <span className="text-sm text-slate-300">Manager</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="role" className="accent-indigo-500" />
                    <span className="text-sm text-slate-300">Admin</span>
                </label>
            </div>
          </div>
          
          <div className="pt-2">
             <label className="block w-full border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all cursor-pointer group">
                <input type="file" className="hidden" />
                <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-slate-800 rounded-full group-hover:bg-indigo-500/20 transition-colors">
                        <Upload size={20} className="text-slate-400 group-hover:text-indigo-400" />
                    </div>
                    <p className="text-sm text-slate-400">Upload Avatar</p>
                </div>
             </label>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 flex justify-end gap-3 bg-slate-900/50">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all">
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
