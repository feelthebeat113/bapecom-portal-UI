import React from 'react';
import { 
  RefreshCw,
  Package,
  CheckCircle,
  XCircle,
  Eye,
  ExternalLink,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const DesignerReportView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-16 animate-in fade-in duration-700 relative">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-20">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-mono-black dark:bg-mono-white text-mono-white dark:text-mono-black shadow-2xl flex items-center justify-center">
            <Package size={32} strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-5xl font-black text-mono-black dark:text-mono-white tracking-tighter uppercase italic">Audit Matrix</h1>
              <span className="flex items-center gap-2 px-3 py-1 border border-mono-black dark:border-mono-white text-[9px] font-black uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-mono-black dark:bg-mono-white animate-pulse"></div>
                Live_Monitor
              </span>
            </div>
            <p className="text-mono-zinc-500 text-[11px] font-bold uppercase tracking-[0.3em] mt-2">Global Dispatch & Approval Engine</p>
          </div>
        </div>
      </div>

      {/* Main Audit Area */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-mono-zinc-100 dark:border-mono-zinc-900 pb-6">
          <h2 className="text-[12px] font-black text-mono-black dark:text-mono-white uppercase tracking-[0.5em]">Inventory Pipeline (4 SKUs)</h2>
          <button className="p-2 text-mono-zinc-400 hover:text-mono-black dark:hover:text-mono-white hover:rotate-180 transition-all duration-500">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Batch Card */}
        <div className="bg-mono-white dark:bg-mono-black border border-mono-zinc-200 dark:border-mono-zinc-800 shadow-2xl relative">
          
          {/* Batch Header */}
          <div className="p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 bg-mono-zinc-50 dark:bg-mono-zinc-950/50 border-b border-mono-zinc-200 dark:border-mono-zinc-800">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-mono-black dark:bg-mono-white flex items-center justify-center text-mono-white dark:text-mono-black font-black text-2xl shadow-xl">
                D
              </div>
              <div>
                <h3 className="text-md font-black text-mono-black dark:text-mono-white uppercase tracking-widest">Operator_Duy</h3>
                <p className="text-[9px] text-mono-zinc-500 font-black uppercase tracking-[0.4em] mt-2">SEA_REGIONAL_HUB • BATCH_2026-01-29</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-mono-white dark:bg-mono-black border border-mono-zinc-300 dark:border-mono-zinc-700 text-mono-zinc-600 dark:text-mono-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] hover:border-mono-black dark:hover:border-mono-white hover:text-mono-black dark:hover:text-mono-white transition-all">
                <Eye size={16} /> Inspect_Frame
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-mono-black dark:bg-mono-white text-mono-white dark:text-mono-black text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:opacity-80 transition-all">
                <CheckCircle size={16} /> Dispatch_All
              </button>
            </div>
          </div>

          {/* SKU List */}
          <div className="p-8 space-y-4">
            {[
              { id: 1, name: 'SKU_SHIRT_NQD300126_02', val: '1.0P', highlighted: false },
              { id: 2, name: 'SKU_CROCHET_NQD300126_01', val: '1.5P', highlighted: true },
              { id: 3, name: 'SKU_SHIRT_NQD300126_03', val: '1.0P', highlighted: false },
            ].map((item) => (
              <div 
                key={item.id} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-8 transition-all border ${
                  item.highlighted 
                  ? 'bg-mono-zinc-50 dark:bg-mono-zinc-900 border-mono-black dark:border-mono-white border-l-8' 
                  : 'bg-mono-white dark:bg-mono-black border-mono-zinc-100 dark:border-mono-zinc-900 hover:border-mono-zinc-400 dark:hover:border-mono-zinc-600'
                }`}
              >
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <Package size={20} className={item.highlighted ? 'text-mono-black dark:text-mono-white' : 'text-mono-zinc-400'} />
                  <span className={`text-xs font-black uppercase tracking-[0.2em] ${item.highlighted ? 'text-mono-black dark:text-mono-white' : 'text-mono-zinc-700 dark:text-mono-zinc-400'}`}>
                    {item.name}
                  </span>
                </div>

                <div className="flex items-center gap-8">
                  <div className={`px-5 py-2 border text-[10px] font-black tracking-[0.3em] uppercase ${
                    item.highlighted 
                    ? 'bg-mono-black dark:bg-mono-white text-mono-white dark:text-mono-black border-mono-black dark:border-mono-white' 
                    : 'bg-mono-zinc-50 dark:bg-mono-zinc-950 border-mono-zinc-200 dark:border-mono-zinc-800 text-mono-zinc-500'
                  }`}>
                    VAL: {item.val}
                  </div>

                  <div className="flex items-center gap-4">
                     <button className="w-12 h-12 flex items-center justify-center border border-mono-zinc-200 dark:border-mono-zinc-800 text-mono-zinc-400 hover:text-mono-black dark:hover:text-mono-white transition-all">
                        <ExternalLink size={18} />
                     </button>
                     <button className={`px-8 py-3 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-3 ${
                       item.highlighted 
                       ? 'bg-mono-black dark:bg-mono-white text-mono-white dark:text-mono-black border border-mono-black dark:border-mono-white' 
                       : 'bg-mono-white dark:bg-mono-black text-mono-black dark:text-mono-white border border-mono-zinc-200 dark:border-mono-zinc-800 hover:bg-mono-zinc-50 dark:hover:bg-mono-zinc-900'
                     }`}>
                        Audit <ArrowRight size={14} />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer System Info */}
      <div className="mt-20 flex items-center justify-between text-[10px] font-black text-mono-zinc-400 uppercase tracking-[0.5em] border-t border-mono-zinc-100 dark:border-mono-zinc-900 pt-10">
        <div className="flex flex-wrap items-center gap-10">
          <span className="flex items-center gap-2">
             <div className="w-2 h-2 bg-mono-zinc-200 dark:bg-mono-zinc-800"></div>
             CORE: 4.2.1-STABLE
          </span>
          <span className="flex items-center gap-2">
             <div className="w-2 h-2 bg-mono-zinc-200 dark:bg-mono-zinc-800"></div>
             SYNC_LATENCY: 12ms
          </span>
        </div>
        <div className="flex items-center gap-3 group cursor-pointer hover:text-mono-black dark:hover:text-mono-white transition-colors">
          <span>PIPELINE_PRIORITY</span>
          <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default DesignerReportView;
