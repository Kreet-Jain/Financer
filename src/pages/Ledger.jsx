import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

const recoveries = [
  { id: 'RCV-9021', company: 'Vanguard Logistics Corp', principal: '₹12,450,000', status: 'GRACE PERIOD ENDED', state: 'danger' },
  { id: 'RCV-8842', company: 'Solstice Retail Group', principal: '₹4,200,000', status: 'SAFE', state: 'safe' },
  { id: 'RCV-9105', company: 'Titan Energy Solutions', principal: '₹8,920,000', status: 'WATCHLIST', state: 'watch' },
  { id: 'RCV-7731', company: 'Meridian Holdco Ltd', principal: '₹1,150,000', status: 'WATCHLIST', state: 'watch' },
];

export default function Ledger() {
  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Asset Liability Management</div>
        <h1 className="text-4xl font-extrabold text-[#0f1a24] leading-tight tracking-tight mb-4">Toxic Debt<br/>Ledger</h1>
        <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[90%] text-right ml-auto border-r-2 border-gray-200 pr-3">
          Systemic audit of high-yield distressed assets.<br/>Real-time reconciliation of Everest Reserve exposure parameters.
        </p>
      </div>

      <div className="card bg-white border border-gray-100 flex flex-col gap-6 mt-4 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest relative top-0.5">Total High Risk Exposure</span>
          </div>
          <TrendingUp size={16} className="text-gray-400" />
        </div>
        
        <div className="text-5xl font-extrabold tracking-tighter text-[#0f1a24]">₹42.8M</div>
        
        <div className="flex items-center gap-3">
          <div className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-2 rounded-lg flex-1 text-center whitespace-nowrap">
            +14.2% vs Last Quarter
          </div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex-1 text-right leading-tight">
            Reserve Limit:<br/>
            <span className="text-[#0f1a24] text-[11px]">₹50.0M</span>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-2"></div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-sm text-[#0f1a24]">Category Breakdown</div>
          
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                <span>Unsecured Commercial</span>
                <span>42%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#475E69] w-[42%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                <span>Subprime Real Estate</span>
                <span>28%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#475E69] w-[28%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                <span>Distressed Equities</span>
                <span>15%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#475E69] w-[15%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase mb-1.5">
                <span>Other Assets</span>
                <span>15%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-300 w-[15%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold tracking-tight text-[#0f1a24]">Active<br/>Recoveries</h2>
          <div className="flex gap-2">
            <button className="bg-[#EAEFF2] text-[#475E69] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-300 transition-colors shadow-sm">Export<br/>Ledger</button>
            <button className="bg-[#475E69] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#34444a] transition-colors shadow-sm">Initiate<br/>Clawback</button>
          </div>
        </div>

        {recoveries.map((item, idx) => (
          <div key={idx} className="card bg-white border border-gray-100 p-6 flex flex-col items-center text-center relative hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{item.id}</div>
            <h3 className="font-bold text-lg text-[#0f1a24] mb-5">{item.company}</h3>
            
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Principal</div>
            <div className="font-bold text-xl mb-6 tracking-tight">{item.principal}</div>
            
            <div className={`w-full py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2
              ${item.state === 'danger' ? 'bg-[#FFF0F0] text-[#D32F2F]' : ''}
              ${item.state === 'safe' ? 'bg-[#F0FFF4] text-[#2E7D32]' : ''}
              ${item.state === 'watch' ? 'bg-gray-50 text-[#485B64]' : ''}
            `}>
              <span className={`w-1.5 h-1.5 rounded-full ${item.state === 'danger' ? 'bg-[#D32F2F]' : item.state === 'safe' ? 'bg-[#2E7D32]' : 'bg-[#485B64]'}`}></span>
              {item.status}
            </div>

            <button className="mt-5 w-10 h-10 bg-[#F5F8FA] rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#EAEFF2] group-hover:text-gray-700 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
      <div className="h-6"></div>
    </div>
  );
}
