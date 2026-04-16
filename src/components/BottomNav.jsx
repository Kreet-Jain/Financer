import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, BookOpen, Banknote, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Overview', icon: LayoutDashboard },
  { path: '/insights', label: 'Insights', icon: TrendingUp },
  { path: '/ledger', label: 'Ledger', icon: BookOpen },
  { path: '/loans', label: 'Loans', icon: Banknote },
  { path: '/drafts', label: 'Drafts', icon: FileText },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      <div className="flex justify-between items-center max-w-[480px] mx-auto w-full px-2 py-3 pb-8">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full gap-1.5 transition-all duration-300 ${
                isActive ? 'text-[#22c55e] transform scale-105' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <React.Fragment>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-sm' : ''} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
              </React.Fragment>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
