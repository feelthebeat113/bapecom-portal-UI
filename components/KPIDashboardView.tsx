import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, AreaChart, Area } from 'recharts';
import { ChevronDown, FileText, Filter, Calendar, TrendingUp } from 'lucide-react';

// --- Mock Data ---

const summaryStats = [
  { label: 'Tổng sản phẩm', value: 608, sub: 'Tất cả levels', color: 'bg-blue-600', subColor: 'text-blue-200' },
  { label: 'Designers', value: 8, sub: 'Đang hoạt động', color: 'bg-purple-600', subColor: 'text-purple-200' },
  { label: 'Chờ duyệt', value: 11, sub: 'Reports pending', color: 'bg-orange-600', subColor: 'text-orange-200' },
  { label: 'Đã duyệt', value: 39, sub: 'Reports approved', color: 'bg-emerald-600', subColor: 'text-emerald-200' },
];

const levelData = [
  { name: 'Lv1', value: 320, color: '#10b981' }, // emerald-500
  { name: 'Lv2', value: 240, color: '#3b82f6' }, // blue-500
  { name: 'Lv3', value: 48, color: '#a855f7' },  // purple-500
];

const statusData = [
  { name: 'Pending', value: 15, color: '#f97316' }, // orange-500
  { name: 'Approved', value: 75, color: '#22c55e' }, // green-500
  { name: 'Rejected', value: 10, color: '#ef4444' }, // red-500
];

const performanceData = [
  { name: 'Des Phú', lv1: 132, lv2: 0, lv3: 0, total: 132 },
  { name: 'Des Tiến', lv1: 18, lv2: 100, lv3: 9, total: 127 },
  { name: 'Des Linh', lv1: 20, lv2: 99, lv3: 0, total: 119 },
  { name: 'Des Nhi', lv1: 14, lv2: 79, lv3: 1, total: 94 },
  { name: 'Des Long', lv1: 44, lv2: 28, lv3: 9, total: 81 },
  { name: 'Des Huy', lv1: 1, lv2: 38, lv3: 0, total: 39 },
  { name: 'Des Thư', lv1: 0, lv2: 9, lv3: 0, total: 9 },
  { name: 'Test Bot', lv1: 0, lv2: 4, lv3: 3, total: 7 },
];

const trendData = [
  { name: '01/12', products: 12 },
  { name: '05/12', products: 19 },
  { name: '10/12', products: 15 },
  { name: '15/12', products: 28 },
  { name: '20/12', products: 32 },
  { name: '25/12', products: 45 },
  { name: '30/12', products: 38 },
];

const LeaderboardRow = ({ rank, name, data }: { rank: number, name: string, data: typeof performanceData[0] }) => {
  const getRankIcon = (r: number) => {
    if (r === 1) return <span className="text-xl">🥇</span>;
    if (r === 2) return <span className="text-xl">🥈</span>;
    if (r === 3) return <span className="text-xl">🥉</span>;
    return <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500">{r}</span>;
  };

  const maxTotal = 150; // Reference for progress bar
  const percentage = (data.total / maxTotal) * 100;

  return (
    <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
      <td className="py-4 pl-4 w-12">{getRankIcon(rank)}</td>
      <td className="py-4 font-medium text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border border-slate-500/30 flex items-center justify-center text-xs text-slate-300">
           {name.split(' ').pop()?.charAt(0)}
        </div>
        {name}
      </td>
      <td className="py-4 px-4 w-1/3">
        <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-indigo-400 w-8 text-right">{data.total}</span>
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
      </td>
      <td className="py-4 text-center text-emerald-400 font-medium">{data.lv1}</td>
      <td className="py-4 text-center text-blue-400 font-medium">{data.lv2}</td>
      <td className="py-4 text-center text-purple-400 font-medium">{data.lv3}</td>
    </tr>
  );
};

const KPIDashboardView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
             <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30">
                <FileText className="text-emerald-400" size={24} />
             </div>
             <h1 className="text-3xl font-bold text-white tracking-tight">KPI Dashboard</h1>
          </div>
          <p className="text-slate-400 ml-1">Thống kê sản phẩm theo tháng</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="flex items-center gap-2 bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-lg hover:border-slate-500 transition-colors">
              <Calendar size={16} className="text-slate-400"/>
              <span className="text-sm font-medium">Tháng 12 năm 2025</span>
              <ChevronDown size={16} className="text-slate-400 ml-2" />
            </button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 transition-all">
            50 báo cáo
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 shadow-lg relative overflow-hidden group`}>
             <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform scale-150">
                <Filter size={48} />
             </div>
             <p className="text-white/80 text-sm font-medium mb-1">{stat.label}</p>
             <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
             <p className={`text-xs font-medium ${stat.subColor} uppercase tracking-wide opacity-90`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Middle Row: Donut Charts & Area Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Chart 1: Levels */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Tỷ lệ Level
                </h3>
            </div>
            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={levelData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {levelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Chart 2: Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Trạng thái báo cáo
                </h3>
            </div>
            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={statusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {statusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* New Chart: Productivity Trend (Area Chart) */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    <span className="p-1 rounded bg-indigo-500/20 text-indigo-400"><TrendingUp size={14} /></span>
                    Xu hướng
                </h3>
                <select className="bg-slate-950 border border-slate-800 text-slate-400 text-[10px] rounded px-1.5 py-0.5 focus:outline-none">
                   <option>7 ngày</option>
                </select>
            </div>
            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                    <defs>
                        <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 10}} 
                        dy={5}
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 10}} 
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#c4b5fd' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="products" 
                        stroke="#8b5cf6" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorProducts)" 
                    />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* Bottom Row: Stacked Bar Chart */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
             <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                Thống kê theo Designer
            </h3>
        </div>
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 12}} 
                        dy={10}
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 12}} 
                    />
                    <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
                    <Bar dataKey="lv1" name="Level 1" stackId="a" fill="#10b981" barSize={50} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="lv2" name="Level 2" stackId="a" fill="#3b82f6" barSize={50} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="lv3" name="Level 3" stackId="a" fill="#a855f7" barSize={50} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-900/50">
            <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="text-yellow-500">🏆</span>
                Leaderboard
            </h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-slate-500 text-xs uppercase tracking-wider bg-slate-900/30">
                        <th className="py-4 pl-4 font-medium">#</th>
                        <th className="py-4 font-medium">Designer</th>
                        <th className="py-4 px-4 font-medium w-1/3">Total Progress</th>
                        <th className="py-4 text-center font-medium">Lv1</th>
                        <th className="py-4 text-center font-medium">Lv2</th>
                        <th className="py-4 text-center font-medium">Lv3</th>
                    </tr>
                </thead>
                <tbody>
                    {performanceData.map((data, index) => (
                        <LeaderboardRow key={index} rank={index + 1} name={data.name} data={data} />
                    ))}
                </tbody>
            </table>
        </div>
      </div>

    </div>
  );
};

export default KPIDashboardView;
