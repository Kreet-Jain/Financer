import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function Loans() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="animate-fade-in flex flex-col items-center max-w-[400px] mx-auto text-center mt-4">
      <h1 className="text-[32px] font-extrabold text-[#061224] tracking-tight mb-3">New Lent Entry</h1>
      <p className="text-[13px] font-medium text-gray-500 mb-8 leading-relaxed px-4">
        Document a new asset allocation or personal loan with precision.
      </p>

      <div className="w-full bg-white rounded-[24px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-left">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-2.5">Recipient Name</label>
            <input type="text" placeholder="Legal entity or individual name" className="w-full bg-[#f8f9fa] border-none rounded-xl p-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#e2e8f0] transition-all font-medium placeholder-gray-400" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-2.5">Principal Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-800 text-[15px]">₹</span>
              <input type="number" placeholder="0.00" className="w-full bg-[#f8f9fa] border-none rounded-xl py-4 pl-9 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#e2e8f0] transition-all font-semibold placeholder-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-2.5">Grace Period (Days)</label>
            <input type="number" defaultValue={180} className="w-full bg-[#f8f9fa] border-none rounded-xl p-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#e2e8f0] transition-all font-semibold" />
          </div>

          <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center justify-between mt-2">
            <div className="flex gap-4 items-center">
              <div className="bg-[#e4ece9] p-2 rounded-lg">
                <TrendingUp size={20} className="text-[#0a523a]"/>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#061224]">Automatic Interest<br/>Accrual</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1 leading-tight">Compound based on<br/>market base rate</span>
              </div>
            </div>
            <div onClick={() => setToggle(!toggle)} className={`w-[50px] h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors border ${toggle ? 'bg-[#0a3123] border-[#0a3123]' : 'bg-gray-200 border-gray-300'}`}>
               <div className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${toggle ? 'translate-x-[22px]' : 'translate-x-[2px]'}`}></div>
            </div>
          </div>

          <button className="w-full bg-[#031525] text-white py-[18px] rounded-xl font-bold hover:bg-[#152538] transition-colors mt-6 text-[15px] shadow-lg shadow-gray-200 cursor-pointer">
            Save Entry
          </button>
          
          <div className="text-center mt-4 text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">Authorized Financial Log V2.4</div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
}
