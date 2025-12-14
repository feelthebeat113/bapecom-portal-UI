import React from 'react';
import { 
  Store, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  RefreshCw, 
  Package, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

// --- Mock Data ---

const summaryStats = [
  { label: '7-Day Orders', value: '3,853', icon: <ShoppingCart className="text-white/30" size={40} />, gradient: 'from-blue-500 to-cyan-500' },
  { label: '7-Day Revenue', value: '$119,242.02', icon: <DollarSign className="text-white/30" size={40} />, gradient: 'from-green-500 to-emerald-500' },
  { label: 'Active Shops', value: '87', icon: <Store className="text-white/30" size={40} />, gradient: 'from-orange-500 to-amber-500' },
  { label: 'Avg Order Value', value: '$30.95', icon: <TrendingUp className="text-white/30" size={40} />, gradient: 'from-purple-500 to-pink-500' },
];

const topShopsData = [
  { name: 'AnyeArtCollection', value: 3400, color: '#8b5cf6' },
  { name: 'DoodlePrintsLab', value: 3000, color: '#a78bfa' },
  { name: 'sneakerteefind', value: 2750, color: '#c4b5fd' },
  { name: 'HavenBoutiqueGoods', value: 2700, color: '#ddd6fe' },
  { name: 'MMEGlobalShop', value: 2550, color: '#ede9fe' },
];

const topProducts = [
  { id: 1, name: 'Custom Bananas Baseball Jersey, Personalized Savannah Fan Gift', qty: 51, revenue: '$1,706.76' },
  { id: 2, name: 'Funny Diet Coke Acrylic Ornament, Xmas Decor', qty: 49, revenue: '$1,020.42' },
  { id: 3, name: 'Customized Dog Memorial Frame With Pet Portrait Photo', qty: 47, revenue: '$1,725.10' },
  { id: 4, name: 'Funny Diet Coke Acrylic Ornament, Xmas Decor, Christmas Decor', qty: 42, revenue: '$971.38' },
  { id: 5, name: 'Hungry Caterpillar Birthday Shirt, Family Matching Outfit', qty: 40, revenue: '$1,102.40' },
  { id: 6, name: 'Funny Diet Coke Acrylic Ornament, Xmas Decor, Christmas Gift', qty: 38, revenue: '$887.18' },
  { id: 7, name: 'Custom Name and Number Sonic Baseball Jersey', qty: 35, revenue: '$1,057.05' },
  { id: 8, name: 'Funny Diet Coke Fridge Cigs Acrylic Christmas Ornament', qty: 27, revenue: '$621.30' },
  { id: 9, name: 'Minnie Mouse Ornament, Personalized Christmas Tree Decoration', qty: 27, revenue: '$466.95' },
  { id: 10, name: 'Custom Name Six Seven Ornament, Kids Christmas Ornament', qty: 26, revenue: '$339.18' },
];

const recentOrders = [
  { time: '23:59:52', id: '3894245868', shop: 'BellePiecesStore', item: "It's a Wonderful Life Movie Poster, Black and White", original: 'USD 5.26', usd: '$5.26' },
  { time: '23:59:31', id: '3912461551', shop: 'GlowGardenCrafts', item: 'Johnny Cash Vintage Music Shirt, Comfort Colors Tee', original: 'USD 27.26', usd: '$27.26' },
  { time: '23:59:28', id: '3910256367', shop: 'KDigitalArtsShop', item: 'Custom Hercules Meg Jersey Shirt, Hercules Baseball Jersey', original: 'USD 29.31', usd: '$29.31' },
  { time: '23:59:28', id: '3824829437', shop: 'Noodstocks', item: 'Tar Movie Shirt, Tar Vintage Shirt, Tar Fan Shirt', original: 'AUD 56.30', usd: '$36.59' },
  { time: '23:59:20', id: '3898173362', shop: 'HavenBoutiqueGoods', item: 'Jingle My Bells Sweater – Funny Xmas Ugly Sweater', original: 'USD 51.19', usd: '$51.19' },
  { time: '23:59:13', id: '3900231230', shop: 'TheStitchedPalette', item: 'Mickey Mouse Hockey Jersey, Disney Mickey Hockey', original: 'USD 43.61', usd: '$43.61' },
  { time: '23:59:11', id: '3916406681', shop: 'RigoArtCollection', item: 'Talking Heads Comfort Colors Tee, Rock Band Retro Shirt', original: 'USD 34.22', usd: '$34.22' },
  { time: '23:58:05', id: '3788725670', shop: 'LumiCatcher', item: 'Pet Memorial Frame: Custom Engraved Wood', original: 'USD 41.24', usd: '$41.24' },
  { time: '23:58:00', id: '3916405255', shop: 'SultanxStudio', item: 'Pearl Movie Poster, Ti West Film, Mid-Century Modern', original: 'USD 28.54', usd: '$28.54' },
  { time: '23:57:41', id: '3909116418', shop: 'Joesu', item: 'Breaking Bad Poster / Movie Poster / Midcentury Modern', original: 'AUD 43.00', usd: '$27.95' },
];

const DodgeprintAnalyticsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Store className="w-8 h-8 text-orange-400" />
            Dodgeprint Analytics
          </h1>
          <p className="text-slate-400 mt-1">Real-time order monitoring & revenue analytics</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-slate-800 rounded-lg p-1">
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-slate-400 hover:text-white hover:bg-slate-700">Today</button>
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-slate-400 hover:text-white hover:bg-slate-700">Yesterday</button>
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-purple-500 text-white shadow-lg shadow-purple-500/20">7 Days</button>
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-slate-400 hover:text-white hover:bg-slate-700">30 Days</button>
          </div>
          
          <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer select-none">
            <input type="checkbox" className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-purple-500 focus:ring-purple-500 accent-purple-500" defaultChecked />
            Auto-refresh
          </label>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 transition-colors shadow-lg">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>
      
      <p className="text-xs text-slate-500">Last updated: {new Date().toLocaleTimeString()} • Auto-refreshing every 60s</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-5 shadow-lg transform transition-transform hover:scale-[1.02]`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Charts & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Top 5 Shops Chart */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Top 5 Shops by Revenue
          </h2>
          <div className="flex-1 min-h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={topShopsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${value}`} />
                <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100} 
                    stroke="#94a3b8" 
                    fontSize={12}
                    tick={{fill: '#94a3b8'}}
                />
                <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                  {topShopsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Custom Legend */}
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
             {topShopsData.map((shop, i) => (
                 <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: shop.color }}></div>
                    <span className="text-slate-400">{shop.name}</span>
                 </div>
             ))}
          </div>
        </div>

        {/* Top Products Table */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-orange-400" />
            Top Products by Quantity
          </h2>
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="text-slate-400 text-sm border-b border-slate-700">
                  <th className="text-left py-3 px-2 font-medium">#</th>
                  <th className="text-left py-3 px-2 font-medium">Product Name</th>
                  <th className="text-right py-3 px-2 font-medium">Qty</th>
                  <th className="text-right py-3 px-2 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-2 text-slate-500 font-mono text-sm">{product.id}</td>
                    <td className="py-3 px-2">
                      <span className="text-white truncate block max-w-[200px] xl:max-w-[280px]" title={product.name}>
                        {product.name}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span className="text-emerald-400 font-semibold">{product.qty}</span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span className="text-purple-400 font-mono">{product.revenue}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Recent Orders Table */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            Recent Orders (20)
        </h2>
        <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-slate-400 text-sm border-b border-slate-700">
                  <th className="text-left py-3 px-3 font-medium">Time</th>
                  <th className="text-left py-3 px-3 font-medium">Order ID</th>
                  <th className="text-left py-3 px-3 font-medium">Shop</th>
                  <th className="text-left py-3 px-3 font-medium">Items</th>
                  <th className="text-right py-3 px-3 font-medium">Original</th>
                  <th className="text-right py-3 px-3 font-medium">USD</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, idx) => (
                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-3">
                            <span className="text-slate-400 font-mono text-sm">{order.time}</span>
                        </td>
                        <td className="py-3 px-3">
                             <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono text-sm group">
                                {order.id}
                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                             </a>
                        </td>
                        <td className="py-3 px-3">
                             <span className="text-white truncate block max-w-[150px]" title={order.shop}>{order.shop}</span>
                        </td>
                        <td className="py-3 px-3">
                             <div className="max-w-[200px] xl:max-w-[300px]">
                                <span className="text-slate-300 text-sm truncate block" title={order.item}>{order.item}</span>
                             </div>
                        </td>
                        <td className="py-3 px-3 text-right">
                            <span className="text-slate-400 font-mono text-sm">{order.original}</span>
                        </td>
                        <td className="py-3 px-3 text-right">
                            <span className="text-emerald-400 font-semibold font-mono">{order.usd}</span>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>

    </div>
  );
};

export default DodgeprintAnalyticsView;
