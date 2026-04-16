import React from 'react';
import { Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden shadow-sm">
          {/* Avatar Placeholder */}
          <User size={20} color="white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-gray-900">The Ledger</h1>
      </div>
      <button className="p-2 relative rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
        <Bell size={22} className="text-slate-700" />
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </header>
  );
}
