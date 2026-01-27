import React from 'react';
import { 
  Store, 
  ShoppingBag, 
  TrendingUp, 
  RefreshCw, 
  ChevronDown,
  BarChart3,
  ListFilter
} from 'lucide-react';

// --- Mock Data ---

const topShops = [
  { name: 'RigoArtCollection', orders: 26, revenue: '$979.72' },
  { name: 'TaajirBillah', orders: 21, revenue: '$596.91' },
  { name: 'EthanFashionDesign', orders: 17, revenue: '$587.57' },
  { name: 'EnyeBiz', orders: 14, revenue: '$475.01' },
  { name: 'MMEGlobalShop', orders: 11, revenue: '$416.59' },
  { name: 'Joesu', orders: 12, revenue: '$362.95' },
  { name: 'GlowGardenCrafts', orders: 11, revenue: '$344.85' },
  { name: 'Glimmeraesa', orders: 6, revenue: '$254.64' },
];

const recentOrders = [
  { 
    id: '3922136175', 
    date: '2025-12-15', 
    time: '23:51', 
    shop: 'UnlimitedAinun', 
    item: 'Toadette Bootleg T-Shirt, Super Mario Nintendo Unisex Tee', 
    image: 'https://i.etsystatic.com/26673686/r/il/d337c7/5607563173/il_1588xN.5607563173_q8r1.jpg',
    price: '$25.98' 
  },
  { 
    id: '3922135511', 
    date: '2025-12-15', 
    time: '23:50', 
    shop: 'SultanxStudio', 
    item: 'Cincinnati Bengals Poster, Bengals Print, Mid-Century Modern Art, Retro Modern Poster', 
    image: 'https://i.etsystatic.com/40368351/r/il/66b04a/5341355866/il_1588xN.5341355866_1z5k.jpg',
    price: '$9.99' 
  },
  { 
    id: '3922135187', 
    date: '2025-12-15', 
    time: '23:50', 
    shop: 'kardayLLC', 
    item: 'Psych Tv Series T-Shirt, Retro Film Shirt, Comfort Colors Unisex T-Shirt', 
    image: 'https://i.etsystatic.com/34827981/r/il/337318/5424578130/il_1588xN.5424578130_o25s.jpg',
    price: '$25.98' 
  },
  { 
    id: '3922133461', 
    date: '2025-12-15', 
    time: '23:48', 
    shop: 'CoolArtByJacob', 
    item: 'Steve McQueen Poster, Vintage Black and White Photography Print (Digital Download)', 
    image: 'https://i.etsystatic.com/26428795/r/il/8f6a9c/4621021465/il_1588xN.4621021465_b6o3.jpg',
    price: '$5.45' 
  },
  { 
    id: '3922130141', 
    date: '2025-12-15', 
    time: '23:45', 
    shop: 'AlejandroStoreDesign', 
    item: 'Funny &#39;Friends&#39; Bathroom Poster, Meme Restroom Art (Digital Download)', 
    image: 'https://i.etsystatic.com/32466038/r/il/d7e4f1/3655516946/il_1588xN.3655516946_2t0n.jpg',
    price: '$4.20' 
  },
  { 
    id: '3922128157', 
    date: '2025-12-15', 
    time: '23:43', 
    shop: 'InfoproductcoGoods', 
    item: 'Embroidered Ateez Seonghwa Sweatshirt, Aniteez Kpop T-Shirt', 
    image: 'https://i.etsystatic.com/47953282/r/il/c8f2b3/6082498263/il_1588xN.6082498263_d0w8.jpg',
    price: '$39.50' 
  },
  { 
    id: '3912875924', 
    date: '2025-12-15', 
    time: '23:32', 
    shop: 'MMEGlobalShop', 
    item: 'Custom Bananas Baseball Jersey, Personalized Savannah Fan Gift', 
    image: 'https://i.etsystatic.com/34664478/r/il/5b7364/5253896582/il_1588xN.5253896582_7f3l.jpg',
    price: '$31.98' 
  },
  { 
    id: '3922113401', 
    date: '2025-12-15', 
    time: '23:28', 
    shop: 'kardayLLC', 
    item: 'Psych Tv Series T-Shirt, Retro Film Shirt, Comfort Colors Unisex T-Shirt', 
    image: 'https://i.etsystatic.com/34827981/r/il/337318/5424578130/il_1588xN.5424578130_o25s.jpg',
    price: '$31.98' 
  },
];

const DodgeprintAnalyticsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500 space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-8 h-8 text-indigo-500" />
            <h1 className="text-3xl font-bold text-white tracking-tight">Etsy Dashboard</h1>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            Dodgeprint orders & revenue • <span className="text-slate-300">2025-12-15 to 2025-12-15</span> (America/New_York)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Tabs */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-1 flex">
            <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-indigo-600 text-white shadow-sm">
              Orders
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Products
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Finance
            </button>
          </div>

          {/* Filters */}
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-slate-600 transition-colors">
            <span className="text-slate-500">Seller</span>
            <span className="font-medium text-white">Huy</span>
            <ChevronDown size={14} className="text-slate-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-slate-600 transition-colors">
            <span className="text-slate-500">Time</span>
            <span className="font-medium text-white">2025-12-15</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-800 transition-colors">
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative group hover:border-slate-700 transition-all">
          <p className="text-slate-400 text-sm font-medium mb-2">Orders</p>
          <div className="flex items-end justify-between">
             <h3 className="text-3xl font-bold text-white">241</h3>
             <BarChart3 className="text-slate-600 group-hover:text-indigo-500 transition-colors mb-1" size={32} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative group hover:border-slate-700 transition-all">
          <p className="text-slate-400 text-sm font-medium mb-2">Revenue</p>
          <div className="flex items-end justify-between">
             <h3 className="text-3xl font-bold text-white">$7,053.67</h3>
             <TrendingUp className="text-slate-600 group-hover:text-emerald-500 transition-colors mb-1" size={32} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative group hover:border-slate-700 transition-all">
          <p className="text-slate-400 text-sm font-medium mb-2">Active Shops</p>
          <div className="flex items-end justify-between">
             <h3 className="text-3xl font-bold text-white">38</h3>
             <Store className="text-slate-600 group-hover:text-orange-500 transition-colors mb-1" size={32} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative group hover:border-slate-700 transition-all">
          <p className="text-slate-400 text-sm font-medium mb-2">Avg Order</p>
          <div className="flex items-end justify-between">
             <h3 className="text-3xl font-bold text-white">$29.27</h3>
             <ShoppingBag className="text-slate-600 group-hover:text-blue-500 transition-colors mb-1" size={32} />
          </div>
        </div>
      </div>

      {/* Top Shops Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Top Shops</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-900 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        <th className="px-6 py-4 text-left">Shop</th>
                        <th className="px-6 py-4 text-right">Orders</th>
                        <th className="px-6 py-4 text-right">Revenue</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {topShops.map((shop, index) => (
                        <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">{shop.name}</td>
                            <td className="px-6 py-4 text-right text-slate-300">{shop.orders}</td>
                            <td className="px-6 py-4 text-right font-medium text-slate-200">{shop.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Recent Orders</h3>
            
            <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 mr-2">Page 1</span>
                <button className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                    Prev
                </button>
                <button className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                    Next
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-900 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        <th className="px-6 py-4 text-left">Time</th>
                        <th className="px-6 py-4 text-left">Order</th>
                        <th className="px-6 py-4 text-left">Shop</th>
                        <th className="px-6 py-4 text-left">Item</th>
                        <th className="px-6 py-4 text-right">USD</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {recentOrders.map((order, index) => (
                        <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 text-slate-400 text-xs font-mono">
                                <div className="text-slate-300">{order.date}</div>
                                <div>{order.time}</div>
                            </td>
                            <td className="px-6 py-4 text-slate-300 text-sm font-mono">{order.id}</td>
                            <td className="px-6 py-4 font-medium text-white">{order.shop}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 overflow-hidden flex-shrink-0">
                                        {/* In a real app, use the actual image. Using a placeholder color for now if image fails or for styling consistency */}
                                        <img src={order.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-indigo-400 text-sm line-clamp-2 max-w-[300px]" title={order.item}>
                                        {order.item}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right font-medium text-white">{order.price}</td>
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
