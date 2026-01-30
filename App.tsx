import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AdminView from './components/AdminView';
import KPIDashboardView from './components/KPIDashboardView';
import DodgeprintAnalyticsView from './components/DodgeprintAnalyticsView';
import DesignerReportView from './components/DesignerReportView';
import ProjectBoardView from './components/ProjectBoardView';
import MyKPIView from './components/MyKPIView';

type ViewState = 'home' | 'admin' | 'kpi' | 'my_kpi' | 'dodgeprint' | 'designer_report' | 'project_board';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3"></div>
      </div>

      <Navbar 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />

      <main className="relative z-10 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
        {currentView === 'home' && <HomeView onNavigate={(view) => setCurrentView(view)} />}
        {currentView === 'admin' && <AdminView />}
        {currentView === 'kpi' && <KPIDashboardView />}
        {currentView === 'my_kpi' && <MyKPIView />}
        {currentView === 'dodgeprint' && <DodgeprintAnalyticsView />}
        {currentView === 'designer_report' && <DesignerReportView />}
        {currentView === 'project_board' && <ProjectBoardView />}
      </main>

      {/* Footer */}
      {currentView !== 'project_board' && (
        <footer className="relative z-10 py-6 text-center text-slate-600 text-sm">
          <p>&copy; 2024 BAPECOM Internal Systems. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

export default App;