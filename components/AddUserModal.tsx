import React from 'react';
import { X, UploadCloud } from 'lucide-react';

export default function AddUserModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative ui-card w-full max-w-md bg-app-bg animate-reveal overflow-hidden">
        <div className="p-6 border-b border-app-border flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest italic">Init_Operative</h2>
          <button onClick={onClose} className="text-app-muted hover:text-white"><X size={18} /></button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-app-muted uppercase tracking-widest">Full_Name</label>
            <input type="text" className="w-full bg-app-sub border border-app-border rounded p-2 text-xs focus:outline-none focus:border-app-accent" placeholder="OPERATOR_NAME" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-app-muted uppercase tracking-widest">System_Access</label>
            <select className="w-full bg-app-sub border border-app-border rounded p-2 text-xs focus:outline-none">
                <option>TIER_01_STAFF</option>
                <option>TIER_02_MANAGER</option>
                <option>ROOT_ADMIN</option>
            </select>
          </div>

          <div className="border-2 border-dashed border-app-border rounded p-8 flex flex-col items-center justify-center group hover:border-app-accent cursor-pointer transition-colors">
            <UploadCloud size={24} className="text-app-muted group-hover:text-app-accent mb-2" />
            <span className="text-[10px] font-bold text-app-muted uppercase tracking-widest">Upload_Profile_Biometric</span>
          </div>
        </div>

        <div className="p-6 border-t border-app-border flex justify-end gap-3 bg-app-sub/50">
          <button onClick={onClose} className="text-[10px] font-bold text-app-muted uppercase tracking-widest px-4">Cancel</button>
          <button onClick={onClose} className="btn-primary">Execute_Commit</button>
        </div>
      </div>
    </div>
  );
}