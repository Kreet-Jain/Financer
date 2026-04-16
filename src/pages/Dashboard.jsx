import React from 'react';
import { TrendingUp, Zap, AlertCircle, Download, Phone } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[#0f1a24] leading-tight tracking-tight">Financial<br/>Architecture</h1>
        <p className="text-sm font-medium text-gray-500 mt-2">August 2024 Appraisal Summary</p>
      </div>

      <div className="card border border-green-100 flex flex-col gap-4 relative overflow-hidden bg-[#fafcfa]">
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <TrendingUp size={12}/> +4.2% YTD
        </div>
        <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">Net Worth Appraisal</div>
        <div className="text-4xl font-extrabold text-[#0f1a24] tracking-tight">₹28,42,500</div>
        <p className="text-xs text-gray-500 font-medium">Consolidated Assets minus Toxic Liabilities</p>
        
        <div className="flex gap-4 mt-2 mb-2">
          <div className="flex-1">
            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Liquid Capital</div>
            <div className="text-sm font-bold">₹4,12,000</div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Fixed Equity</div>
            <div className="text-sm font-bold">₹19,50,000</div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Marketable</div>
            <div className="text-sm font-bold">₹4,80,500</div>
          </div>
        </div>
      </div>

      <div className="card bg-[#384e58] text-white flex flex-col gap-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-md"><Zap size={16} className="text-white"/></div>
            <span className="font-bold">Wealth Catalyst</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
            <span>Efficiency Status</span>
            <span className="text-xl text-white">94%</span>
          </div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className="bg-green-400 h-full w-[94%] rounded-full"></div>
          </div>
        </div>
        <p className="text-xs text-white/80 leading-relaxed font-medium">
          Your asset allocation is currently optimized for long-term compound growth with a focus on risk-parity. All triggers are dormant.
        </p>
        <button className="bg-white text-[#384e58] font-bold py-3 rounded-lg text-sm transition-all hover:bg-gray-100 mt-2">
          Review Optimization Map
        </button>
      </div>

      <div className="card flex flex-col gap-4 border border-gray-100 bg-white">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Current Surplus</div>
            <div className="text-2xl font-extrabold text-[#0f1a24]">₹18,450 <span className="text-xs font-medium text-gray-400">/ month</span></div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 mt-2 border-t border-gray-100 pt-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-600 font-medium text-xs">Inflow (Income)</span>
            </div>
            <span className="font-bold text-sm">₹32,000</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-gray-600 font-medium text-xs">Outflow (Expenses)</span>
            </div>
            <span className="font-bold text-sm">₹13,550</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 italic mt-2">The current surplus is being redirected to "Tactical Acquisition" fund.</p>
      </div>
      
      <div className="card bg-red-50 border border-red-100 flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Toxic Debt Status</div>
          <AlertCircle size={16} className="text-red-400" />
        </div>
        <div className="text-2xl font-extrabold text-[#0f1a24]">₹12,400.00</div>
        <div className="text-xs text-red-500 font-medium">High-Interest Liability Exposure</div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-[#3f5763] text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-[#2c3d46] transition-colors shadow-sm text-sm">
          <Download size={16}/> Download Report
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-gray-300 transition-colors shadow-sm text-sm">
          <Phone size={16}/> Advisor Contact
        </button>
      </div>
      <div className="h-6"></div>
    </div>
  );
}
