import React, { useState } from 'react';
import { UploadCloud, Info, FileText, CheckCircle2 } from 'lucide-react';

export default function DesignSubmissionView() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasFiles, setHasFiles] = useState(false);

  return (
    <div className="p-12 max-w-5xl mx-auto animate-fade">
      <div className="mb-20 space-y-4">
        <h2 className="text-7xl font-black tracking-tighter uppercase italic dark:text-white leading-none">SUBMIT.</h2>
        <p className="text-[11px] text-kinetic-orange font-black uppercase tracking-[0.5em] mt-1">Submit design assets to production pipeline</p>
      </div>

      <div className="bg-black/5 dark:bg-white/5 rounded-[48px] p-2">
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setHasFiles(true); }}
          className={`h-[450px] border-4 border-dashed rounded-[40px] flex flex-col items-center justify-center transition-all ${
            isDragging ? 'border-kinetic-orange bg-kinetic-orange/5' : 'border-black/5 dark:border-white/5 hover:border-kinetic-orange/20'
          }`}
        >
          <div className="w-20 h-20 bg-white dark:bg-black rounded-[24px] shadow-2xl flex items-center justify-center mb-8">
            <UploadCloud size={36} className={isDragging ? 'text-kinetic-orange' : 'text-kinetic-zinc'} />
          </div>
          <h3 className="text-lg font-black uppercase tracking-widest mb-3 dark:text-white">Initialize Payload</h3>
          <p className="text-[11px] text-kinetic-zinc font-black uppercase tracking-widest mb-10 opacity-50">Drag & Drop Directory (NAME-TAG-CODE_ID)</p>
          
          <button className="px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Browse Computer Files
          </button>
        </div>
      </div>

      <div className="mt-12 flex items-start gap-6 p-10 bg-black/5 dark:bg-white/5 rounded-[32px]">
        <Info size={24} className="text-kinetic-orange flex-shrink-0" />
        <p className="text-[12px] font-black text-kinetic-zinc leading-relaxed uppercase tracking-widest">
          All assets must follow standard naming conventions. Missing tags will trigger automatic rejection by the production relay.
        </p>
      </div>

      {hasFiles && (
        <div className="mt-16 animate-fade">
           <div className="flex items-center justify-between mb-8">
              <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-kinetic-zinc">Staging Area</h4>
              <button className="text-[11px] font-black text-rose-500 uppercase tracking-widest" onClick={() => setHasFiles(false)}>Clear All</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-transparent hover:border-kinetic-orange/20 transition-all">
                   <div className="flex items-center gap-4">
                      <FileText size={18} className="text-kinetic-zinc" />
                      <span className="text-[12px] font-black uppercase tracking-widest dark:text-white">ASSET_DATA_00{i}.zip</span>
                   </div>
                   <CheckCircle2 size={16} className="text-kinetic-orange" />
                </div>
              ))}
           </div>
           <div className="mt-16 flex justify-end">
              <button className="px-16 py-6 bg-kinetic-orange text-white rounded-full font-black text-[12px] uppercase tracking-[0.4em] orange-glow hover:scale-105 transition-all">
                 Confirm to Pipeline
              </button>
           </div>
        </div>
      )}
    </div>
  );
}