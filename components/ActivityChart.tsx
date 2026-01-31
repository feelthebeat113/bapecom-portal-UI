import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M', users: 140 }, { name: 'T', users: 230 }, { name: 'W', users: 180 },
  { name: 'T', users: 278 }, { name: 'F', users: 189 }, { name: 'S', users: 340 }, { name: 'S', users: 290 },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartAccent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#71717a', fontSize: 10, fontWeight: 'bold'}} 
                dy={10}
            />
            <YAxis hide />
            <Tooltip 
                contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '4px', fontSize: '10px' }}
                itemStyle={{ color: '#2563eb' }}
                cursor={{ stroke: '#27272a' }}
            />
            <Area 
                type="monotone" 
                dataKey="users" 
                stroke="#2563eb" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#chartAccent)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;