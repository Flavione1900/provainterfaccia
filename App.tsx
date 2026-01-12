
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { NewProposal } from './components/NewProposal';
import { Clients } from './components/Clients';
import { ClientDetails } from './components/ClientDetails';
import { Reporting } from './components/Reporting';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transition-all duration-300">
        {currentView === 'dashboard' ? (
          <Dashboard onNavigate={setCurrentView} />
        ) : currentView === 'clients' ? (
          <Clients onNavigate={setCurrentView} />
        ) : currentView === 'client-details' ? (
          <ClientDetails />
        ) : currentView === 'reporting' ? (
          <Reporting />
        ) : (
          <NewProposal />
        )}
      </main>
    </div>
  );
}

export default App;
