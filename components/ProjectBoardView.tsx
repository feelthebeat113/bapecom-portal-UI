import React, { useState } from 'react';
import { 
  Plus, MoreHorizontal, Clock, Layers, 
  ChevronRight, AlignLeft, MessageSquare, 
  Paperclip, User
} from 'lucide-react';

export default function ProjectBoardView() {
  const [columns] = useState([
    { 
      id: 'backlog', 
      title: 'Backlog', 
      tasks: [
        { id: '1', title: 'System Core Node Migration', priority: 'high', date: '20 Dec', user: 'LN', tags: ['INFRA', 'SEC'], comments: 4, files: 2 },
        { id: '2', title: 'UI Precision Audit v2', priority: 'low', date: '22 Dec', user: 'DUY', tags: ['DESIGN'], comments: 0, files: 1 },
        { id: '3', title: 'API Authentication Layer', priority: 'high', date: '18 Dec', user: 'HU', tags: ['DEV'], comments: 12, files: 5 }
      ] 
    },
    { 
      id: 'active', 
      title: 'In Progress', 
      tasks: [
        { id: '4', title: 'Batch #402 Data Flow', priority: 'medium', date: 'Today', user: 'LN', tags: ['CORE'], comments: 2, files: 0, progress: 65 }
      ] 
    },
    { 
      id: 'review', 
      title: 'Review', 
      tasks: [
        { id: '5', title: 'QC Testing - Unit 7', priority: 'high', date: '15 Dec', user: 'HU', tags: ['QA'], comments: 8, files: 3 }
      ] 
    },
    { 
      id: 'done', 
      title: 'Completed', 
      tasks: [
        { id: '6', title: 'Encryption Module v4', priority: 'low', date: '10 Dec', user: 'DUY', tags: ['SEC'], comments: 1, files: 12 }
      ] 
    },
  ]);

  const PriorityBadge = ({ level }: { level: string }) => {
    const colors = {
      high: 'bg-rose-500 text-white',
      medium: 'bg-kinetic-orange text-white',
      low: 'bg-kinetic-zinc text-white'
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${colors[level as keyof typeof colors]}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="h-full flex flex-col animate-fade overflow-hidden">
      {/* Board Header */}
      <div className="px-12 py-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-kinetic-orange text-white rounded-lg flex items-center justify-center">
                <Layers size={16} />
             </div>
             <span className="text-[10px] font-black text-kinetic-orange uppercase tracking-[0.4em]">Project Alpha</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic dark:text-white leading-none">PIPELINE.</h1>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex -space-x-3 mr-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-black bg-kinetic-zinc flex items-center justify-center text-[10px] font-black text-white">
                  OP
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-black">
                +4
              </div>
           </div>
           <button className="btn-kinetic btn-kinetic-primary flex items-center gap-4 orange-glow !py-3">
              <Plus size={16} /> New Sprint
           </button>
        </div>
      </div>

      {/* Kanban Container */}
      <div className="flex-1 overflow-x-auto custom-scrollbar p-12">
        <div className="flex gap-8 h-full items-start">
          {columns.map(col => (
            <div key={col.id} className="w-80 flex-shrink-0 flex flex-col h-full bg-black/[0.02] dark:bg-white/[0.02] rounded-[40px] p-4 border border-black/5 dark:border-white/5">
              {/* Column Header */}
              <div className="flex items-center justify-between px-4 py-4 mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[12px] font-black text-black dark:text-white uppercase tracking-widest">{col.title}</h3>
                  <span className="text-[10px] font-black font-mono text-kinetic-zinc bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">
                    {col.tasks.length}
                  </span>
                </div>
                <button className="text-kinetic-zinc hover:text-black dark:hover:text-white transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              
              {/* Task List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 px-2 pb-4">
                {col.tasks.map(task => (
                  <div 
                    key={task.id} 
                    className="bg-white dark:bg-kinetic-card p-6 rounded-[24px] border border-black/5 dark:border-white/5 hover:border-kinetic-orange/20 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer relative overflow-hidden"
                  >
                    {/* Priority Indicator Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                      task.priority === 'high' ? 'bg-rose-500' : 
                      task.priority === 'medium' ? 'bg-kinetic-orange' : 'bg-kinetic-zinc'
                    }`} />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1.5">
                        {task.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-black text-kinetic-zinc bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <PriorityBadge level={task.priority} />
                    </div>
                    
                    <h4 className="text-[14px] font-black text-black dark:text-white mb-6 leading-tight group-hover:text-kinetic-orange transition-colors">
                      {task.title}
                    </h4>

                    {task.progress && (
                      <div className="mb-6 space-y-2">
                        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-kinetic-zinc">
                           <span>Progress</span>
                           <span>{task.progress}%</span>
                        </div>
                        <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-kinetic-orange transition-all duration-1000" style={{ width: `${task.progress}%` }} />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-5 border-t border-black/5 dark:border-white/5">
                      <div className="flex items-center gap-3 text-kinetic-zinc">
                        <div className="flex items-center gap-1 text-[9px] font-black">
                          <MessageSquare size={12} /> {task.comments}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] font-black">
                          <Paperclip size={12} /> {task.files}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                         <span className="text-[9px] font-black font-mono text-kinetic-zinc uppercase">{task.date}</span>
                         <div className="w-7 h-7 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[9px] font-black">
                           {task.user}
                         </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button className="w-full py-4 mt-2 border-2 border-dashed border-black/5 dark:border-white/5 rounded-[24px] text-[10px] font-black text-kinetic-zinc hover:text-kinetic-orange hover:border-kinetic-orange/20 hover:bg-kinetic-orange/5 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                  <Plus size={14} /> Add Card
                </button>
              </div>
            </div>
          ))}

          {/* New Column Button */}
          <button className="w-80 h-20 flex-shrink-0 flex items-center justify-center gap-4 bg-black/[0.02] dark:bg-white/[0.02] border-2 border-dashed border-black/5 dark:border-white/5 rounded-[40px] text-[12px] font-black text-kinetic-zinc uppercase tracking-[0.3em] hover:border-kinetic-orange/20 hover:text-kinetic-orange transition-all">
             <Plus size={20} /> Add List
          </button>
        </div>
      </div>
    </div>
  );
}