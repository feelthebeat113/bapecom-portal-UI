import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  MessageSquare, 
  CheckSquare, 
  Users, 
  Search, 
  Filter, 
  Clock,
  Layout,
  MoreVertical,
  ChevronDown,
  Briefcase,
  Star,
  FolderPlus,
  Check,
  X,
  Image as ImageIcon,
  Type,
  AlignLeft,
  Paperclip,
  Trash2,
  UploadCloud
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  labels: { text: string; color: string }[];
  dueDate?: string;
  comments: number;
  checklists: { total: number; completed: number };
  assignees: string[];
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Project {
  id: string;
  name: string;
  category: string;
  columns: Column[];
  members: string[];
}

const initialProjects: Project[] = [
  {
    id: 'p1',
    name: 'Mobile App Redesign',
    category: 'Design & UX',
    members: ['D', 'P', 'T'],
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        tasks: [
          {
            id: '1',
            title: 'Thiết kế UI cho Mobile App',
            description: 'Hoàn thiện bản mockup cho màn hình Login và Dashboard của ứng dụng nội bộ.',
            thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
            labels: [{ text: 'Design', color: 'text-indigo-400 bg-indigo-500/10' }],
            dueDate: 'Dec 20',
            comments: 4,
            checklists: { total: 8, completed: 3 },
            assignees: ['D', 'P'],
            priority: 'high'
          }
        ]
      },
      {
        id: 'progress',
        title: 'In Progress',
        tasks: [
          {
            id: '3',
            title: 'Fix bug Login Social',
            description: 'Lỗi không nhận callback từ Google API trên môi trường Production.',
            labels: [{ text: 'Development', color: 'text-blue-400 bg-blue-500/10' }],
            dueDate: 'Dec 18',
            comments: 12,
            checklists: { total: 3, completed: 2 },
            assignees: ['T'],
            priority: 'high'
          }
        ]
      },
      { id: 'review', title: 'Review', tasks: [] },
      { id: 'done', title: 'Done', tasks: [] }
    ]
  },
  {
    id: 'p2',
    name: 'E-commerce Website',
    category: 'Web Development',
    members: ['L', 'D', 'N'],
    columns: [
      {
        id: 'todo',
        title: 'Backlog',
        tasks: [
          {
            id: 'web-1',
            title: 'Tích hợp Stripe Payment',
            description: 'Cài đặt và cấu hình thanh toán qua thẻ tín dụng cho khách hàng quốc tế.',
            labels: [{ text: 'Dev', color: 'text-blue-400 bg-blue-500/10' }],
            comments: 0,
            checklists: { total: 5, completed: 0 },
            assignees: ['L'],
            priority: 'high'
          }
        ]
      },
      { id: 'progress', title: 'Doing', tasks: [] },
      { id: 'done', title: 'Finished', tasks: [] }
    ]
  }
];

// --- Task Detail Modal Component ---
interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (updatedTask: Task) => void;
}

const TaskDetailModal: React.FC<TaskModalProps> = ({ task, onClose, onUpdate }) => {
  const [editedTask, setEditedTask] = useState<Task>({ ...task });
  const [isDropping, setIsDropping] = useState(false);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropping(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const updated = { ...editedTask, thumbnail: base64 };
        setEditedTask(updated);
        onUpdate(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...editedTask, [name]: value };
    setEditedTask(updated);
    onUpdate(updated);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDropping(true); }}
          onDragLeave={() => setIsDropping(false)}
          onDrop={handleFileDrop}
          className={`relative h-56 bg-slate-800 transition-all ${isDropping ? 'ring-4 ring-inset ring-indigo-500 bg-slate-700' : ''}`}
        >
          {editedTask.thumbnail ? (
            <img src={editedTask.thumbnail} alt="cover" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2">
              <ImageIcon size={48} className="opacity-20" />
              <p className="text-sm font-medium">Kéo thả ảnh vào đây để làm ảnh bìa</p>
            </div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
          >
            <X size={20} />
          </button>
          
          {editedTask.thumbnail && (
            <button 
              onClick={() => {
                const updated = { ...editedTask, thumbnail: undefined };
                setEditedTask(updated);
                onUpdate(updated);
              }}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-all"
            >
              <Trash2 size={14} />
              Xóa ảnh
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4 text-slate-400">
                  <Type size={18} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Tiêu đề công việc</h4>
                </div>
                <input 
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleChange}
                  className="w-full bg-transparent text-2xl font-bold text-white border-none focus:ring-0 focus:outline-none placeholder:text-slate-700"
                  placeholder="Nhập tiêu đề..."
                />
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4 text-slate-400">
                  <AlignLeft size={18} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Mô tả chi tiết</h4>
                </div>
                <textarea 
                  name="description"
                  value={editedTask.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-slate-300 focus:outline-none focus:border-indigo-500/50 transition-all resize-none placeholder:text-slate-700 leading-relaxed"
                  placeholder="Thêm mô tả chi tiết cho công việc này..."
                />
              </section>

              <section className="pt-4">
                 <div className="flex flex-wrap gap-2">
                    {editedTask.labels.map((l, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-xs font-bold border border-white/5 ${l.color}`}>
                        {l.text}
                      </span>
                    ))}
                    <button className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-500 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                      + Thêm nhãn
                    </button>
                 </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Thông tin bổ sung</h4>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-slate-400">Độ ưu tiên</span>
                       <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border border-white/5 ${
                         editedTask.priority === 'high' ? 'text-rose-400 bg-rose-500/10' : 
                         editedTask.priority === 'medium' ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 bg-slate-500/10'
                       }`}>
                         {editedTask.priority}
                       </span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-slate-400">Ngày hết hạn</span>
                       <span className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                         <Calendar size={12} />
                         {editedTask.dueDate || 'Chưa set'}
                       </span>
                    </div>
                 </div>
              </div>

              <div className="space-y-3">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Thành viên</h4>
                 <div className="flex flex-wrap gap-2">
                    {editedTask.assignees.map((a, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                        {a}
                      </div>
                    ))}
                    <button className="w-10 h-10 rounded-full border-2 border-dashed border-slate-800 text-slate-600 hover:text-indigo-400 hover:border-indigo-400 transition-all flex items-center justify-center">
                      <Plus size={16} />
                    </button>
                 </div>
              </div>

              <div className="pt-4 space-y-2">
                 <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm transition-all">
                    <Paperclip size={16} /> Đính kèm file
                 </button>
                 <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm transition-all">
                    <CheckSquare size={16} /> Thêm Checklist
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Task Card Component ---
const TaskCard: React.FC<{ 
  task: Task; 
  columnId: string;
  onDragStart: (e: React.DragEvent, taskId: string, columnId: string) => void;
  onClick: () => void;
  onImageDrop: (taskId: string, base64: string) => void;
}> = ({ task, columnId, onDragStart, onClick, onImageDrop }) => {
  const [isHoveredFile, setIsHoveredFile] = useState(false);

  const handleDragOverFile = (e: React.DragEvent) => {
    // Chỉ kích hoạt hiệu ứng nếu là đang kéo File, không phải kéo Task
    if (e.dataTransfer.types.includes('Files')) {
      e.preventDefault();
      setIsHoveredFile(true);
    }
  };

  const handleDragLeaveFile = () => {
    setIsHoveredFile(false);
  };

  const handleDropFile = (e: React.DragEvent) => {
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      e.preventDefault();
      e.stopPropagation();
      setIsHoveredFile(false);
      
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target?.result as string;
          onImageDrop(task.id, base64);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, task.id, columnId)}
      onClick={onClick}
      onDragOver={handleDragOverFile}
      onDragLeave={handleDragLeaveFile}
      onDrop={handleDropFile}
      className={`relative bg-slate-800/40 backdrop-blur-sm border rounded-xl overflow-hidden shadow-sm transition-all cursor-grab active:cursor-grabbing group ${
        isHoveredFile ? 'border-indigo-500 ring-4 ring-indigo-500/20 bg-slate-700/80 scale-[1.02]' : 'border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/60'
      }`}
    >
      {/* Overlay hiệu ứng khi đang kéo ảnh đè lên */}
      {isHoveredFile && (
        <div className="absolute inset-0 z-20 bg-indigo-600/20 flex flex-col items-center justify-center pointer-events-none border-2 border-indigo-500 border-dashed rounded-xl">
           <UploadCloud className="text-white mb-1 animate-bounce" size={32} />
           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Thả để đặt ảnh bìa</span>
        </div>
      )}

      {task.thumbnail && (
        <div className="w-full h-32 overflow-hidden pointer-events-none">
          <img src={task.thumbnail} alt="thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3 pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {task.labels.map((label, i) => (
              <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${label.color}`}>
                {label.text}
              </span>
            ))}
          </div>
          <button className="text-slate-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <MoreVertical size={14} />
          </button>
        </div>

        <h4 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-indigo-300 transition-colors pointer-events-none">
          {task.title}
        </h4>
        
        {task.description && (
          <p className="text-xs text-slate-500 line-clamp-2 mb-4 pointer-events-none font-medium leading-relaxed">
            {task.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-700/50 pointer-events-none">
          <div className="flex items-center gap-3 text-slate-500">
            {task.dueDate && (
              <div className="flex items-center gap-1 text-[10px] font-medium text-amber-400/80">
                <Clock size={12} />
                {task.dueDate}
              </div>
            )}
            {task.checklists.total > 0 && (
              <div className={`flex items-center gap-1 text-[10px] font-medium ${task.checklists.completed === task.checklists.total ? 'text-emerald-400' : ''}`}>
                <CheckSquare size={12} />
                {task.checklists.completed}/{task.checklists.total}
              </div>
            )}
          </div>

          <div className="flex -space-x-1.5">
            {task.assignees.map((a, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[10px] font-bold text-white ring-1 ring-slate-800">
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectBoardView: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjects[0].id);
  const [isProjectSelectorOpen, setIsProjectSelectorOpen] = useState(false);
  const [draggedOverCol, setDraggedOverCol] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState<{task: Task, columnId: string} | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectSelectorOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDragStart = (e: React.DragEvent, taskId: string, columnId: string) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColId', columnId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOverColumn = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    setDraggedOverCol(columnId);
  };

  const handleDropOnColumn = (e: React.DragEvent, destColId: string) => {
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColId = e.dataTransfer.getData('sourceColId');

    // Nếu là thả File thì không xử lý di chuyển Task
    if (!taskId) {
       setDraggedOverCol(null);
       return;
    }

    e.preventDefault();
    setDraggedOverCol(null);

    if (sourceColId === destColId) return;

    const newProjects = projects.map(project => {
      if (project.id === activeProjectId) {
        const sourceCol = project.columns.find(c => c.id === sourceColId);
        const destCol = project.columns.find(c => c.id === destColId);

        if (sourceCol && destCol) {
          const taskIndex = sourceCol.tasks.findIndex(t => t.id === taskId);
          if (taskIndex !== -1) {
            const [movedTask] = sourceCol.tasks.splice(taskIndex, 1);
            destCol.tasks.push(movedTask);
          }
        }
      }
      return project;
    });

    setProjects(newProjects);
  };

  const updateTaskThumbnail = (taskId: string, base64: string) => {
    const newProjects = projects.map(p => {
      if (p.id === activeProjectId) {
        return {
          ...p,
          columns: p.columns.map(c => ({
            ...c,
            tasks: c.tasks.map(t => t.id === taskId ? { ...t, thumbnail: base64 } : t)
          }))
        };
      }
      return p;
    });
    setProjects(newProjects);
  };

  const updateTask = (updatedTask: Task) => {
    const newProjects = projects.map(p => {
      if (p.id === activeProjectId) {
        return {
          ...p,
          columns: p.columns.map(c => ({
            ...c,
            tasks: c.tasks.map(t => t.id === updatedTask.id ? updatedTask : t)
          }))
        };
      }
      return p;
    });
    setProjects(newProjects);
  };

  return (
    <div className="h-full flex flex-col animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            <div className="p-3 bg-indigo-600/20 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
              <Layout className="text-indigo-400" size={24} />
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsProjectSelectorOpen(!isProjectSelectorOpen)}
                className="flex flex-col items-start group hover:bg-white/5 px-3 py-1.5 rounded-xl transition-all"
              >
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-white tracking-tight">{activeProject.name}</h1>
                  <ChevronDown className={`text-slate-500 group-hover:text-white transition-transform duration-300 ${isProjectSelectorOpen ? 'rotate-180' : ''}`} size={20} />
                </div>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">{activeProject.category}</span>
              </button>

              {isProjectSelectorOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/50 mb-1">Dự án của bạn</div>
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => { setActiveProjectId(project.id); setIsProjectSelectorOpen(false); }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        activeProjectId === project.id ? 'bg-indigo-600/10 text-white' : 'text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${activeProjectId === project.id ? 'bg-indigo-600 text-white' : 'bg-slate-800'}`}>
                          <Briefcase size={16} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold truncate max-w-[140px]">{project.name}</p>
                          <p className="text-[10px] opacity-60">{project.category}</p>
                        </div>
                      </div>
                      {activeProjectId === project.id && <Check size={16} className="text-indigo-400" />}
                    </button>
                  ))}
                  <div className="p-2 mt-2 border-t border-slate-800/50">
                    <button className="w-full flex items-center gap-2 p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                      <FolderPlus size={18} /> Tạo dự án mới
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Tìm thẻ..." 
                className="bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all w-48 md:w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-indigo-600/20 transition-all">
              <Plus size={16} /> Thêm task
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 custom-scrollbar">
        <div className="flex gap-6 h-full items-start">
          {activeProject.columns.map((column) => (
            <div 
              key={column.id} 
              onDragOver={(e) => handleDragOverColumn(e, column.id)}
              onDragLeave={() => setDraggedOverCol(null)}
              onDrop={(e) => handleDropOnColumn(e, column.id)}
              className={`w-72 sm:w-80 flex-shrink-0 flex flex-col max-h-full bg-slate-900/40 backdrop-blur-md rounded-2xl border transition-all duration-300 ${
                draggedOverCol === column.id ? 'border-indigo-500 ring-2 ring-indigo-500/20 bg-slate-800/60' : 'border-slate-800'
              }`}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide">{column.title}</h3>
                  <span className="text-[10px] font-bold bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded">
                    {column.tasks.length}
                  </span>
                </div>
                <button className="text-slate-500 hover:text-white p-1 rounded transition-colors"><MoreHorizontal size={16} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar min-h-[100px]">
                {column.tasks.map((task) => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    columnId={column.id}
                    onDragStart={handleDragStart}
                    onClick={() => setEditingTask({task, columnId: column.id})}
                    onImageDrop={updateTaskThumbnail}
                  />
                ))}
                {column.tasks.length === 0 && (
                  <div className="py-12 flex flex-col items-center justify-center border border-dashed border-slate-800/50 rounded-xl">
                    <Star size={24} className="text-slate-800 mb-2" />
                    <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Kéo thả để thêm</p>
                  </div>
                )}
              </div>

              <div className="p-3">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/5 rounded-xl text-sm font-medium transition-all group">
                  <Plus size={16} /> Thêm thẻ mới
                </button>
              </div>
            </div>
          ))}
          <button className="w-72 sm:w-80 flex-shrink-0 h-14 border-2 border-dashed border-slate-800/50 rounded-2xl flex items-center justify-center text-slate-600 hover:text-slate-400 hover:border-slate-700 transition-all gap-2 group">
            <Plus size={18} /> <span className="text-sm font-bold">Thêm danh sách</span>
          </button>
        </div>
      </div>

      {editingTask && (
        <TaskDetailModal 
          task={editingTask.task} 
          onClose={() => setEditingTask(null)}
          onUpdate={updateTask}
        />
      )}
    </div>
  );
};

export default ProjectBoardView;
