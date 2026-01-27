import React, { useState } from 'react';
import { 
  Send, 
  History as HistoryIcon, 
  Clock, 
  BarChart3, 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw,
  Search,
  AlertCircle,
  FileText,
  User,
  ChevronDown,
  Info,
  Layers,
  CheckCircle,
  XCircle,
  // Added TrendingUp to imports
  TrendingUp
} from 'lucide-react';

type ReportTab = 'submit' | 'history' | 'pending' | 'dashboard';

const DesignerReportView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ReportTab>('submit');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'submit': return <SubmitTab />;
      case 'history': return <HistoryTab />;
      case 'pending': return <PendingTab />;
      case 'dashboard': return <DashboardTab />;
      default: return <SubmitTab />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <FileText className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Designer Report</h1>
              <p className="text-slate-400 text-sm">Hệ thống báo cáo sản xuất thiết kế hàng ngày</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs - Modern Segmented Control */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-1 rounded-xl flex overflow-x-auto no-scrollbar">
          {[
            { id: 'submit', label: 'Báo cáo mới', icon: <Send size={16} /> },
            { id: 'history', label: 'Lịch sử', icon: <HistoryIcon size={16} /> },
            { id: 'pending', label: 'Chờ duyệt', icon: <Clock size={16} /> },
            { id: 'dashboard', label: 'Thống kê', icon: <BarChart3 size={16} /> },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ReportTab)}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderTabContent()}
      </div>
    </div>
  );
};

// --- Sub-components with Redesigned UI ---

const SubmitTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-6">
      {/* Main Input Card */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Layers size={120} className="text-white" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold border border-indigo-500/30">1</div>
            <h3 className="text-xl font-bold text-white">Nhập link Google Drive</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="https://drive.google.com/drive/folders/..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95 flex items-center justify-center gap-2">
              <CheckCircle size={20} />
              Kiểm tra
            </button>
          </div>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <Info size={14} className="text-indigo-400" />
            Dán link thư mục chứa thiết kế. Hệ thống sẽ tự động quét và tính điểm.
          </p>
        </div>
      </div>

      {/* Points Visualization */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="text-indigo-400" size={20} />
          Mức độ thiết kế (Quy đổi điểm)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { p: '0.5P', label: 'Rất dễ', desc: 'Chỉnh sửa nhẹ', color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-400' },
            { p: '1.0P', label: 'Cơ bản', desc: 'Thiết kế đơn giản', color: 'hover:border-cyan-500/50 hover:bg-cyan-500/5 text-cyan-400' },
            { p: '1.5P', label: 'Trung bình', desc: 'Có độ chi tiết', color: 'hover:border-orange-500/50 hover:bg-orange-500/5 text-orange-400' },
            { p: '2.0P', label: 'Phức tạp', desc: 'Nhiều layer', color: 'hover:border-red-500/50 hover:bg-red-500/5 text-red-400' },
            { p: '2.5P', label: 'Nâng cao', desc: 'Yêu cầu kỹ thuật', color: 'hover:border-rose-500/50 hover:bg-rose-500/5 text-rose-400' },
            { p: '3.0P', label: 'Premium', desc: 'Sáng tạo đột phá', color: 'hover:border-purple-500/50 hover:bg-purple-500/5 text-purple-400' },
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border border-slate-800 transition-all cursor-default group text-center ${item.color}`}>
              <div className="text-xl font-black mb-1 tracking-tight">{item.p}</div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{item.label}</div>
              <div className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sidebar Guide */}
    <div className="lg:col-span-1">
      <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-6 text-indigo-400">
          <Info size={20} />
          <h3 className="font-bold">Hướng dẫn đặt tên</h3>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Định dạng chuẩn</p>
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg font-mono text-xs text-indigo-300 break-all leading-relaxed">
              TÊN-THIẾT-KẾ-LOẠI-MÃ-ĐIỂM
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Ví dụ</p>
            <p className="text-sm text-white font-medium italic">STARWARS-SHIRT-NHL270126_01-2P</p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            {[
              { label: 'Tên', value: 'STARWARS' },
              { label: 'Loại', value: 'SHIRT, JERSEY...' },
              { label: 'Mã', value: 'NHL (Designer code)' },
              { label: 'Ngày', value: '270126 (DDMMYY)' },
              { label: 'STT', value: '01 (Sequence)' },
              { label: 'Điểm', value: '0.5P -> 3P' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-slate-500">{row.label}:</span>
                <span className="text-slate-300 font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HistoryTab = () => (
  <div className="space-y-6">
    {/* Quick Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Báo cáo', val: '12', color: 'from-blue-600/20 to-indigo-600/20 text-blue-400' },
        { label: 'Đã duyệt', val: '10', color: 'from-emerald-600/20 to-teal-600/20 text-emerald-400' },
        { label: 'Tổng mẫu', val: '45', color: 'from-purple-600/20 to-pink-600/20 text-purple-400' },
        { label: 'Tổng điểm', val: '32.5P', color: 'from-orange-600/20 to-amber-600/20 text-orange-400' },
      ].map((s, i) => (
        <div key={i} className={`bg-gradient-to-br ${s.color} border border-white/5 rounded-2xl p-6 shadow-sm`}>
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">{s.label}</p>
          <p className="text-2xl font-black text-white">{s.val}</p>
        </div>
      ))}
    </div>

    {/* Detailed List */}
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h3 className="font-bold text-white">Lịch sử báo cáo gần đây</h3>
        <button className="text-slate-400 hover:text-white transition-colors">
          <RefreshCw size={16} />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-950/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800">
              <th className="px-6 py-4 text-left font-semibold">Ngày tháng</th>
              <th className="px-6 py-4 text-left font-semibold">Trạng thái</th>
              <th className="px-6 py-4 text-center font-semibold">Số mẫu</th>
              <th className="px-6 py-4 text-center font-semibold">Tổng điểm</th>
              <th className="px-6 py-4 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {[
              { date: '2025-12-15', status: 'Approved', designs: 12, points: '14.5P', statusColor: 'text-emerald-400 bg-emerald-500/10' },
              { date: '2025-12-14', status: 'Rejected', designs: 5, points: '4.0P', statusColor: 'text-rose-400 bg-rose-500/10' },
              { date: '2025-12-13', status: 'Approved', designs: 18, points: '22.0P', statusColor: 'text-emerald-400 bg-emerald-500/10' },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-slate-500" />
                    <span className="text-sm font-medium text-slate-300">{row.date}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border border-white/5 ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-sm text-slate-400">{row.designs} mẫu</td>
                <td className="px-6 py-4 text-center font-bold text-indigo-400">{row.points}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-500 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PendingTab = () => (
  <div className="flex flex-col items-center justify-center py-20 bg-slate-900/20 border border-slate-800 border-dashed rounded-3xl">
    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 animate-pulse">
      <CheckCircle size={48} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Mọi thứ đã sạch sẽ!</h3>
    <p className="text-slate-500 max-w-sm text-center">Không có báo cáo nào đang chờ duyệt. Hãy nghỉ ngơi hoặc bắt đầu một thiết kế mới.</p>
    <button className="mt-8 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center gap-2">
      <RefreshCw size={16} />
      Làm mới dữ liệu
    </button>
  </div>
);

const DashboardTab = () => (
  <div className="space-y-8">
    {/* Filter Row */}
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-white">Thống kê cá nhân</h3>
      <div className="flex items-center gap-3">
        <div className="relative">
          <select className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg pl-4 pr-10 py-2 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option>30 ngày gần đây</option>
            <option>Tháng này</option>
            <option>Hôm nay</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        </div>
      </div>
    </div>

    {/* Dashboard Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Báo cáo', val: '28', icon: <FileText size={24} />, color: 'text-blue-400' },
        { label: 'Thiết kế', val: '142', icon: <Layers size={24} />, color: 'text-emerald-400' },
        { label: 'Điểm số', val: '186.5P', icon: <BarChart3 size={24} />, color: 'text-purple-400' },
        { label: 'Vị trí', val: '#4', icon: <TrendingUp size={24} />, color: 'text-orange-400' },
      ].map((stat, i) => (
        <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 group hover:border-indigo-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
             <div className={`p-2 bg-slate-950 rounded-lg border border-slate-800 ${stat.color}`}>{stat.icon}</div>
             <div className="text-xs text-slate-500 flex items-center gap-1">
                <TrendingUp size={12} className="text-emerald-500" />
                +12%
             </div>
          </div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
          <h3 className="text-3xl font-black text-white mt-1 tracking-tight">{stat.val}</h3>
        </div>
      ))}
    </div>

    {/* Leaderboard Redesign */}
    <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5">
        <BarChart3 size={150} className="text-white" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">🏆</div>
             <div>
                <h4 className="text-white font-bold">Bảng xếp hạng Designer</h4>
                <p className="text-slate-500 text-xs">Tháng 12/2025</p>
             </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { rank: 1, name: 'Phú Designer', points: '245.0P', designs: 182, color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30' },
            { rank: 2, name: 'Linh Creative', points: '210.5P', designs: 156, color: 'text-slate-300 bg-slate-400/10 border-slate-400/30' },
            { rank: 3, name: 'Tiến Art', points: '198.0P', designs: 148, color: 'text-amber-700 bg-amber-700/10 border-amber-700/30' },
            { rank: 4, name: 'Duy (Bạn)', points: '186.5P', designs: 142, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
          ].map((user, i) => (
            <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${user.rank === 4 ? 'bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/5' : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm border ${user.color}`}>{user.rank}</div>
                <div>
                   <span className="text-sm font-bold text-white block">{user.name}</span>
                   <span className="text-[10px] text-slate-500 uppercase tracking-tighter">{user.designs} mẫu thiết kế</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-white tracking-tight">{user.points}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Simple Calendar Icon for Table ---
const Calendar = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default DesignerReportView;