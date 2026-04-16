import React from 'react';
import { History, Plus, MoreVertical, Paperclip, Camera, Mic, Smile } from 'lucide-react';

export default function Drafts() {
  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <div className="text-[9px] font-bold text-green-600 uppercase tracking-[0.2em] mb-3">Communication Hub • India Region</div>
        <h1 className="text-4xl font-extrabold text-[#0f1a24] leading-tight tracking-tight mb-4">WhatsApp<br/>Template<br/>Manager</h1>
        <p className="text-sm font-medium text-gray-500 leading-relaxed pr-6">
          Curate institutional communication with precision. Manage automated nudges and formal notices while maintaining your brand's editorial voice in the Indian market.
        </p>
      </div>

      <div className="flex gap-3 mt-2">
        <button className="flex-[0.4] bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-gray-300 transition-colors shadow-sm text-xs">
          <History size={14}/> View Audit Log
        </button>
        <button className="flex-[0.6] bg-[#3f5763] text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-[#2c3d46] transition-colors shadow-sm text-xs border border-[#2c3d46]">
          <Plus size={14}/> New Template
        </button>
      </div>

      <div className="bg-[#f3f5f6] rounded-2xl p-4 mt-2">
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 ml-1">Active Templates</h3>
        <div className="flex flex-col gap-3">
          <div className="card bg-white p-4 border-l-4 border-green-500 rounded-lg flex flex-col relative shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">
           <div className="bg-green-100 text-green-700 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider absolute top-4 left-4">Priority: Low</div>
           <MoreVertical size={16} className="text-gray-400 absolute top-4 right-4 cursor-pointer" />
           <h4 className="font-bold text-[#0f1a24] mt-6 mb-1 text-sm">Soft Nudge</h4>
           <p className="text-xs text-gray-500 truncate">"Namaste `{'{name}'}`, just a polite reminder regarding your upcoming..."</p>
          </div>
          
          <div className="card bg-white p-5 border-l-4 border-[#3f5763] rounded-lg flex flex-col relative shadow-md transform transition-all z-10 border-gray-200">
           <div className="bg-gray-100 text-gray-600 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider absolute top-5 left-5">Priority: Medium</div>
           <MoreVertical size={16} className="text-gray-400 absolute top-5 right-5 cursor-pointer" />
           <h4 className="font-bold text-[#0f1a24] mt-6 mb-2 text-[15px]">Formal Request</h4>
           <p className="text-xs text-gray-500 leading-relaxed mb-4">"Dear `{'{name}'}`, our records indicate that the ledger for `{'{month}'}` is..."</p>
           
           <div className="border border-gray-100 rounded-lg p-4 bg-[#fafcfa] text-[11px] relative mt-2 text-gray-600 font-medium leading-relaxed">
              Dear `{'{name}'}`,<br/><br/>Our records indicate that the ledger for `{'{month}'}` is currently outstanding for the amount of ₹`{'{amount}'}`.<br/><br/>To ensure uninterrupted service and avoid any potential late payment charges as per the agreement, we kindly request...
              <div className="absolute bottom-2 right-2 flex gap-2 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">
                <Smile size={12} className="text-gray-600"/><Paperclip size={12} className="text-gray-600"/>
              </div>
           </div>
           
           <div className="flex justify-between items-center mt-5 pt-5 border-t border-gray-100">
             <button className="text-red-500 text-xs font-bold leading-tight">Delete<br/>Draft</button>
             <button className="bg-[#3f5763] text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow-sm hover:bg-[#2c3d46]">Update<br/>Template</button>
           </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Mockup Preview */}
      <div className="mt-8 relative mx-auto w-[280px] bg-[#111B21] rounded-[36px] p-2 shadow-2xl border-4 border-gray-800">
         <div className="w-full h-full bg-[#EFEAE2] rounded-[28px] overflow-hidden flex flex-col relative">
            <div className="bg-[#008069] text-white px-4 py-3 flex items-center justify-between shadow-sm z-10">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center overflow-hidden"><span className="text-[10px] text-gray-700 font-bold">AM</span></div>
                 <div className="flex flex-col">
                   <span className="font-bold text-sm">Arjun Malhotra</span>
                   <span className="text-[10px] opacity-80">online</span>
                 </div>
               </div>
            </div>
            <div className="flex-1 p-4 bg-[#EFEAE2] relative" style={{backgroundImage: 'radial-gradient(circle at center, #E5DFD7 0%, #EFEAE2 100%)'}}>
               <div className="bg-[#D9FDD3] text-[#111B21] p-3 rounded-lg rounded-tr-none shadow-sm text-[11px] leading-relaxed mb-4 max-w-[90%] float-right">
                 Dear Arjun Malhotra,<br/><br/>Our records indicate that the ledger for October is currently outstanding for the amount of <b>₹1,24,000.00</b>.<br/><br/>To ensure uninterrupted service and avoid any potential late payment charges as per the agreement, we kindly request you to finalize this balance by Oct 28, 2023.<br/><br/>You can view your full itemized breakdown and GST invoice here: https://ledger.in/tx-IN-9921<br/><br/>Kind regards,<br/>The Ledger India Accounts Team
                 <div className="text-right text-[8px] text-gray-500 mt-1 flex justify-end gap-1 items-center">
                   11:15 AM <span className="text-blue-500">✓✓</span>
                 </div>
               </div>
            </div>
            <div className="p-2 pb-4 bg-[#F0F2F5] flex items-center gap-2 z-10 relative">
               <div className="flex-1 bg-white rounded-full h-10 flex items-center px-4 text-xs text-gray-400 gap-3">
                 <Smile size={18}/><span>Message</span><div className="ml-auto flex gap-3 text-gray-500"><Paperclip size={18}/><Camera size={18}/></div>
               </div>
               <div className="w-10 h-10 rounded-full bg-[#00A884] shadow-sm flex items-center justify-center text-white cursor-pointer"><Mic size={18}/></div>
            </div>
         </div>
         <div className="absolute -bottom-8 left-0 right-0 text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-4">Real-Time Localized Preview</div>
      </div>

      <div className="h-10"></div>
    </div>
  );
}
