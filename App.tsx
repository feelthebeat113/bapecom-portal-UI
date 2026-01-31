import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import HomeView from './components/HomeView';
import AdminView from './components/AdminView';
import KPIDashboardView from './components/KPIDashboardView';
import DesignerReportView from './components/DesignerReportView';
import ProjectBoardView from './components/ProjectBoardView';
import MyKPIView from './components/MyKPIView';
import DesignSubmissionView from './components/DesignSubmissionView';
import HistoryView from './components/HistoryView';

type ViewState = 
  | 'home' | 'admin' | 'kpi' | 'my_kpi' | 'designer_report' 
  | 'project_board' | 'design_search' | 'team_kpi' | 'hr_management' 
  | 'orders_manager' | 'syno_files' | 'submit_design' | 'history' | 'pending';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Render placeholder cho các tính năng chưa có component cụ thể
  const renderPlaceholder = (title: string) => (
    <div className="flex flex-col items-center justify-center h-full p-20 text-center animate-fade">
      <h2 className="text-8xl font-black tracking-tighter uppercase italic opacity-10">{title}.</h2>
      <p className="text-kinetic-orange font-black uppercase tracking-[0.5em] mt-4">Module Initializing // Access Restricted</p>
    </div>
  );

  const renderView = () => {
    switch(currentView) {
      case 'home': return <HomeView onNavigate={setCurrentView} />;
      case 'admin': return <AdminView />;
      case 'kpi': return <KPIDashboardView />;
      case 'my_kpi': return <MyKPIView />;
      case 'submit_design': return <DesignSubmissionView />;
      case 'history': return <HistoryView />;
      case 'project_board': return <ProjectBoardView />;
      case 'design_search': return renderPlaceholder('Search');
      case 'team_kpi': return renderPlaceholder('Team KPI');
      case 'hr_management': return renderPlaceholder('Personnel');
      case 'orders_manager': return renderPlaceholder('Orders');
      case 'syno_files': return renderPlaceholder('Files');
      case 'pending': return renderPlaceholder('Queue');
      default: return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className={`flex h-screen w-full transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopHeader theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
          <div className="min-h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;