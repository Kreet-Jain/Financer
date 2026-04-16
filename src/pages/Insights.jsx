import React from 'react';
import { Target, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Insights() {
  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-4 leading-relaxed">
          Personalized investment strategy based on your current liquid capital.
        </p>
      </div>
      
      <div className="card border border-gray-100 bg-white">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Available To Invest</div>
        <div className="text-4xl font-extrabold text-[#0f1a24] tracking-tight mb-6">₹142,500.00</div>
        
        <div className="flex gap-3 flex-wrap">
          <button className="flex-1 bg-[#475E69] text-white py-3 px-4 rounded-xl font-bold flex justify-between items-center hover:bg-[#34444c] transition-colors shadow-sm text-sm whitespace-nowrap">
            Deploy Capital <ChevronRight size={16}/>
          </button>
          <button className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-xl font-bold flex justify-center items-center hover:bg-gray-200 transition-colors shadow-sm text-sm whitespace-nowrap">
            Adjust Risk
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
        <div className="card min-w-[140px] bg-white border border-gray-100 flex-none p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3"><Target size={16} className="text-green-600"/><span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Target Yield</span></div>
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold">12.4%</span>
            <span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full mb-1">+2.1%</span>
          </div>
          <p className="text-[10px] text-gray-400 font-medium mt-1">Projected annual return</p>
        </div>
        <div className="card min-w-[140px] bg-white border border-gray-100 flex-none p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3"><Activity size={16} className="text-gray-600"/><span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Volatility Index</span></div>
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold">Low</span>
            <span className="text-[10px] font-bold text-gray-500 mb-1">4.2σ</span>
          </div>
          <p className="text-[10px] text-gray-400 font-medium mt-1">Stability score</p>
        </div>
        <div className="card min-w-[140px] bg-white border border-gray-100 flex-none p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3"><ShieldCheck size={16} className="text-[#3c5461]"/><span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Backtest Score</span></div>
          <div className="text-xl font-bold">94/100</div>
          <p className="text-[10px] text-gray-400 font-medium mt-1">Historical reliability</p>
        </div>
      </div>

      <div className="card bg-white border border-gray-100 shadow-sm mt-2">
        <h3 className="font-bold text-[#0f1a24] mb-4 text-sm">Recommended Allocation</h3>
        <div className="flex w-full h-3 rounded-full overflow-hidden mb-6">
          <div className="bg-[#475E69] w-[65%] h-full hover:opacity-90 cursor-pointer transition-opacity"></div>
          <div className="bg-green-600 w-[20%] h-full hover:opacity-90 cursor-pointer transition-opacity"></div>
          <div className="bg-[#8CA2AB] w-[15%] h-full hover:opacity-90 cursor-pointer transition-opacity"></div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#475E69]"></span>
              <span className="font-bold text-sm text-gray-800">Stocks & ETFs</span>
            </div>
            <div className="text-lg font-extrabold mb-1">₹28,500 <span className="text-[10px] font-medium text-gray-400 ml-1">65% Allocation</span></div>
            <p className="text-xs text-gray-500 font-medium leading-relaxed group-hover:text-gray-800 transition-colors">Focus on Blue Chip and Tech sector heavyweights with strong cash flow.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
              <span className="font-bold text-sm text-gray-800">Digital Gold</span>
            </div>
            <div className="text-lg font-extrabold mb-1">₹28,500 <span className="text-[10px] font-medium text-gray-400 ml-1">20% Allocation</span></div>
            <p className="text-xs text-gray-500 font-medium leading-relaxed group-hover:text-gray-800 transition-colors">Hedge against currency fluctuations and inflationary pressure.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8CA2AB]"></span>
              <span className="font-bold text-sm text-gray-800">Systematic (SIP)</span>
            </div>
            <div className="text-lg font-extrabold mb-1">₹21,375 <span className="text-[10px] font-medium text-gray-400 ml-1">15% Allocation</span></div>
            <p className="text-xs text-gray-500 font-medium leading-relaxed group-hover:text-gray-800 transition-colors">Monthly recurring investments into diversified mutual funds.</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="h-6"></div>
    </div>
  );
}
