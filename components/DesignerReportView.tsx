
import React, { useState } from 'react';
import { 
  Send, 
  History as HistoryIcon, 
  Clock, 
  BarChart3, 
  RefreshCw,
  AlertCircle,
  FileText,
  Layers,
  CheckCircle,
  XCircle,
  Eye,
  Check,
  X,
  Folder,
  Paintbrush,
  Star,
  UploadCloud,
  ExternalLink,
  AlertTriangle,
  FolderOpen,
  // Fix: Adding missing icon imports
  ChevronDown,
  Info
} from 'lucide-react';

type ReportTab = 'submit' | 'history' | 'pending' | 'dashboard';

const DesignerReportView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ReportTab>('pending');
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500 relative">
      
      {/* Top Header & Tab Navigation */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
            <FileText className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-white tracking-tight">Designer Report</h1>
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400">
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                LIVE
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Daily design production reporting system</p>
          </div>
        </div>
        
        {/* Navigation Tabs - Exactly as in screenshot */}
        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 p-1 rounded-2xl flex items-center shadow-2xl">
          {[
            { id: 'submit', label: 'New Report', icon: <Send size={14} /> },
            { id: 'history', label: 'History', icon: <HistoryIcon size={14} /> },
            { id: 'pending', label: 'Pending', icon: <Clock size={14} />, badge: 4 },
            { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={14} /> },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ReportTab)}
              className={`relative flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
              {tab.badge && (
                <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                  activeTab === tab.id ? 'bg-white text-indigo-600' : 'bg-rose-500 text-white'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {activeTab === 'pending' && <PendingTab />}
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'submit' && <SubmitTab />}
        {activeTab === 'history' && <DashboardTab />} 
      </div>

      {/* Toast Notification (From Screenshot) */}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 duration-500">
           <div className="bg-[#111827]/95 backdrop-blur-2xl border border-indigo-500/30 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[450px]">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <UploadCloud size={18} className="text-indigo-400" />
              </div>
              <p className="text-sm text-slate-200 font-medium flex-1">
                <span className="font-bold text-white">Des Duy</span> vừa submit: <span className="text-indigo-300">des2-SHIRT-NQD300126_02-1P</span>
              </p>
              <button onClick={() => setShowToast(false)} className="text-slate-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

// --- PENDING TAB (LEADER VIEW) ---
const PendingTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Pending Designs (4)</h2>
        <button className="text-slate-500 hover:text-white transition-all"><RefreshCw size={18} /></button>
      </div>

      {/* Designer Block */}
      <div className="bg-[#111827]/40 border border-slate-800/60 rounded-2xl overflow-hidden">
        {/* Designer Header */}
        <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">D</div>
            <div>
              <h3 className="text-sm font-bold text-white">Des Duy</h3>
              <p className="text-[10px] text-slate-500 font-bold">2026-01-29 • 4 designs</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-all border border-slate-700">
              <Eye size={14} /> Preview
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-950/30 border border-rose-500/30 text-rose-500 rounded-lg text-xs font-bold hover:bg-rose-500/10 transition-all">
              <XCircle size={14} /> Reject All
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all">
              <CheckCircle size={14} /> Approve All
            </button>
          </div>
        </div>

        {/* Designs List */}
        <div className="px-2 pb-2 space-y-1">
          {[
            { id: 1, name: 'des2-SHIRT-NQD300126_02', points: '1P' },
            { id: 2, name: '_PENDING_REVIEW_des1-CROCHET-NQD300126_01', points: '1P', status: 'pending_fix', type: 'revision' },
            { id: 3, name: 'des3-SHIRT-NQD300126_03', points: '1P' },
            { id: 4, name: 'des2-SHIRT-NQD290126_02', points: '1P' },
          ].map((item) => (
            <div 
              key={item.id} 
              className={`flex items-center justify-between p-3 rounded-xl border group transition-all ${
                item.type === 'revision' 
                ? 'bg-[#06b6d4]/5 border-[#06b6d4]/30' 
                : 'bg-transparent border-transparent hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Folder size={16} className="text-slate-600" />
                <span className={`text-xs font-medium ${item.type === 'revision' ? 'text-cyan-200' : 'text-slate-300'}`}>
                  {item.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-[10px] font-black text-yellow-500">
                  {item.points}
                </span>

                {item.status === 'pending_fix' ? (
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 rounded-lg text-[10px] font-bold">
                       <UploadCloud size={12} /> Fix uploaded
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 rounded-lg text-[10px] font-bold">
                       <Check size={12} /> OK Fix
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-rose-600/20 border border-rose-500/30 text-rose-400 rounded-lg text-[10px] font-bold">
                       <X size={12} /> Reject
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-400 rounded-lg text-[10px] font-bold">
                      <Paintbrush size={12} /> Fix Design
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg text-[10px] font-bold">
                      <Star size={12} /> Fix Point
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- DASHBOARD TAB (PERSONAL STATS) ---
const DashboardTab = () => {
  return (
    <div className="space-y-6">
      {/* Success Banner */}
      <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3">
        <CheckCircle className="text-emerald-500" size={20} />
        <p className="text-sm font-bold text-emerald-400">Fix uploaded! Waiting for leader review.</p>
      </div>

      {/* Stats Cards - Deep colors like in screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'REPORTS', val: '0', color: 'bg-[#1e1b4b] border-indigo-500/20' },
          { label: 'APPROVED', val: '0', color: 'bg-[#064e3b] border-emerald-500/20' },
          { label: 'TOTAL DESIGNS', val: '0', color: 'bg-[#4c1d95] border-purple-500/20' },
          { label: 'TOTAL POINTS', val: '0P', color: 'bg-[#451a03] border-orange-500/20' },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${s.color} shadow-lg shadow-black/20`}>
             <p className="text-[10px] font-black text-slate-400 tracking-widest mb-1">{s.label}</p>
             <h3 className="text-4xl font-black text-white">{s.val}</h3>
          </div>
        ))}
      </div>

      {/* Revision Block */}
      <div className="bg-[#451a03]/20 border border-orange-500/20 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-orange-500 flex items-center gap-2 mb-6">
          <AlertTriangle size={20} /> Designs Need Revision (1)
        </h3>

        <div className="bg-[#111827]/60 border border-slate-800 rounded-xl p-5">
           <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 mb-6 uppercase tracking-wider">
              <span>2026-01-29</span> • <span>1P</span> • <button className="text-indigo-400 hover:text-white flex items-center gap-1"><ExternalLink size={10} /> Drive</button>
           </div>

           {/* Inner Card */}
           <div className="bg-[#451a03]/10 border border-orange-500/10 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                 <h4 className="text-orange-200 font-bold text-xs uppercase">des1-CROCHET-NQD300126_01-1P</h4>
                 <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-[10px] font-black text-yellow-500 flex items-center gap-1">
                    <Clock size={10} /> Waiting Review
                 </span>
              </div>
              <p className="text-orange-500/60 text-[10px] font-bold italic">Reason: áds</p>
           </div>

           <div className="w-full py-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-center">
              <span className="text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                 <Check size={14} /> Fix uploaded - Waiting for leader review
              </span>
           </div>
        </div>
      </div>

      {/* History List */}
      <div className="bg-[#111827]/40 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">My Designs</h3>
          <button className="text-slate-500 hover:text-white"><RefreshCw size={16} /></button>
        </div>
        <div className="divide-y divide-slate-800">
           {[
             { name: 'des2-SHIRT-NQD300126_02-1P', status: 'Pending', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
             { name: 'des1-CROCHET-NQD300126_01-1P', status: 'Needs Fix', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20', reason: 'áds' },
             { name: 'des3-SHIRT-NQD300126_03-1P', status: 'Pending', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
           ].map((item, i) => (
             <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-all">
                <div className="flex items-center gap-4">
                   <div className="p-2.5 bg-slate-800 rounded-lg text-slate-500 border border-slate-700">
                      <Folder size={20} />
                   </div>
                   <div>
                      <h4 className="text-xs font-bold text-white mb-1">{item.name}</h4>
                      <div className="flex items-center gap-3">
                         <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">2026-01-29</span>
                         <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${item.color}`}>
                            {item.status}
                         </span>
                         {item.reason && <span className="text-[10px] text-orange-500/60 font-medium italic">{item.reason}</span>}
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <span className="text-xs font-black text-indigo-400">1P</span>
                   <button className="text-slate-500 hover:text-white"><ExternalLink size={16} /></button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// --- SUBMIT TAB ---
const SubmitTab = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Main Upload Box */}
      <div className="bg-[#111827]/40 border border-slate-800 rounded-2xl p-12 text-center relative overflow-hidden group shadow-2xl">
         <div className="absolute top-0 right-0 p-12 opacity-5">
            <Layers size={120} className="text-white" />
         </div>
         <div className="relative z-10">
            <div className="p-5 bg-indigo-500/10 rounded-3xl inline-block mb-6 border border-indigo-500/20 group-hover:scale-110 transition-all duration-500">
               <FolderOpen size={48} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Drag and drop folder or click to select</h3>
            <p className="text-slate-500 text-sm mb-10 font-medium">Support uploading 1 folder or parent folder containing multiple designs</p>
            
            <div className="inline-block px-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-[10px] font-mono text-slate-500 mb-10 uppercase tracking-[0.2em]">
               Format: DESIGNNAME-PRODUCT-XXX######_##-XP
            </div>

            <div className="w-full h-48 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center group-hover:border-indigo-500/40 transition-all cursor-pointer bg-[#0f172a]/40">
               <UploadCloud size={32} className="text-slate-600 mb-3" />
               <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Thả thư mục của bạn vào đây</span>
            </div>
         </div>
      </div>

      {/* Validation Result - As in Screenshot 6 */}
      <div className="bg-[#111827]/60 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-indigo-600/5">
           <div className="flex items-center gap-3">
              <Layers className="text-indigo-400" size={18} />
              <h4 className="text-white font-bold text-sm tracking-wide">NQD300126 <span className="text-slate-500 font-medium ml-1">(3 folders)</span></h4>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-emerald-500 uppercase">3 valid</span>
              <span className="text-[10px] font-black text-indigo-400 uppercase">3.0P</span>
              <ChevronDown size={16} className="text-slate-500" />
           </div>
        </div>

        <div className="divide-y divide-slate-800/50">
           {[1, 2, 3].map((i) => (
             <div key={i} className="p-4 bg-rose-500/5 transition-all hover:bg-rose-500/10">
                <div className="flex items-center justify-between mb-1">
                   <div className="flex items-center gap-3">
                      <AlertCircle size={14} className="text-rose-500" />
                      <span className="text-xs font-bold text-slate-200">des{i}-SHIRT-NQD300126_0{i}-1P</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">1 files</span>
                      <span className="text-[10px] font-black text-indigo-400 uppercase">1P</span>
                   </div>
                </div>
                <p className="text-[10px] text-rose-500 font-bold pl-7 leading-relaxed">
                   Ngày sai! 29/01/26 ≠ 30/01/26. Vui lòng đổi tên folder cho đúng ngày hôm nay.
                </p>
             </div>
           ))}
        </div>

        <div className="p-5 border-t border-slate-800 flex items-center justify-between bg-slate-950/40">
           <div className="flex items-center gap-8">
              <span className="text-[10px] font-black text-emerald-500 flex items-center gap-2 uppercase tracking-widest">
                 <Check size={14} /> 0 uploaded
              </span>
              <span className="text-[10px] font-black text-rose-500 flex items-center gap-2 uppercase tracking-widest">
                 <X size={14} /> 3 failed
              </span>
           </div>
           <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all border border-slate-700">
              Upload more
           </button>
        </div>
      </div>
      
      <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
         <Info size={12} /> Drag and drop folder to upload your designs
      </p>
    </div>
  );
};

export default DesignerReportView;
