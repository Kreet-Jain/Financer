import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import './index.css';

import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import Ledger from './pages/Ledger';
import Loans from './pages/Loans';
import Drafts from './pages/Drafts';

function App() {
  return (
    <div className="app-container" style={{maxWidth: '480px', margin: '0 auto', background: 'var(--bg-main)', minHeight: '100vh', position: 'relative', boxShadow: '0 0 50px rgba(0,0,0,0.1)'}}>
      <TopBar />
      
      <main className="w-full p-4 pb-28">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/drafts" element={<Drafts />} />
        </Routes>
      </main>
      
      <BottomNav />
    </div>
  );
}

export default App;
