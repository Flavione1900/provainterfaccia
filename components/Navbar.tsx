
import React from 'react';
import { ViewState } from '../types';
import { Upload, Plus, Search, Calendar } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const getButtonClass = (viewName: string, isActive: boolean) => {
    const base = "h-[36px] px-[12px] rounded-[8px] flex justify-center items-center gap-[10px] text-white text-[12px] font-medium font-roboto cursor-pointer transition-all border border-transparent whitespace-nowrap";
    if (isActive) {
      return "h-[36px] px-[12px] rounded-[8px] flex justify-center items-center gap-[10px] text-white text-[12px] font-medium font-roboto cursor-pointer bg-[rgba(255,255,255,0.30)] outline outline-1 outline-[#C4C4C4] -outline-offset-1 whitespace-nowrap";
    }
    return base + " hover:bg-white/10";
  };

  const getPageTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'clients': return 'Clients';
      case 'client-details': return 'Mario Rossi';
      case 'proposal': return 'New proposal';
      case 'reporting': return 'Reporting';
      default: return 'Portal';
    }
  };

  const isDashboard = currentView === 'dashboard';

  // Back Arrow SVG
  const BackArrow = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 flex-shrink-0">
      <path d="M5 9L1 5L5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <nav className="w-full bg-[#0D1C34] shadow-lg sticky top-0 z-50 transition-all duration-300 font-roboto overflow-hidden">
      <div className="w-full px-6 md:px-8 xl:px-12 mx-auto">
        
        {/* TOP TIER: Logo and Main Navigation */}
        <div className="h-[60px] flex items-center justify-center relative">
            <div className="cursor-pointer absolute left-0 flex items-center h-full" onClick={() => onNavigate('dashboard')}>
                <svg width="37" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#F8FAFC"/>
                    <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" fill="#DC2626"/>
                </svg>
            </div>

            <div className="hidden md:flex justify-center items-center gap-[8px] lg:gap-[12px] overflow-x-auto no-scrollbar py-2">
                <div onClick={() => onNavigate('dashboard')} className={getButtonClass('dashboard', currentView === 'dashboard')}>Dashboard</div>
                <div onClick={() => onNavigate('clients')} className={getButtonClass('clients', currentView === 'clients' || currentView === 'client-details')}>Clients</div>
                <div onClick={() => onNavigate('proposal')} className={getButtonClass('proposal', currentView === 'proposal')}>My Proposals</div>
                <div className={getButtonClass('policies', false)}>My Policies</div>
                <div className={getButtonClass('claims', false)}>Claims</div>
                <div className={getButtonClass('cancellations', false)}>Cancellations</div>
                <div className={getButtonClass('network', false)}>Sales Network</div>
                <div onClick={() => onNavigate('reporting')} className={getButtonClass('reporting', currentView === 'reporting')}>Reporting</div>
            </div>
        </div>

        {/* LINE SEPARATOR */}
        {!isDashboard && <div className="w-full h-[1px] opacity-30 bg-[#D8D8D8]"></div>}

        {/* SECOND TIER: Uniform Sub-header */}
        {!isDashboard && (
            <div className="h-[56px] flex justify-between items-center py-2 relative">
                
                {/* LEFT: Consistent Breadcrumb + Title */}
                <div className="flex flex-col justify-center items-start z-10">
                    <div className="flex items-center text-[11px] leading-none mb-0.5 cursor-pointer hover:opacity-80" onClick={() => onNavigate(currentView === 'client-details' ? 'clients' : 'dashboard')}>
                        <BackArrow />
                        <span className="text-white font-normal mr-1">Torna a </span>
                        <span className="text-white font-bold">{currentView === 'client-details' ? 'Clients' : 'Dashboard'}</span>
                    </div>
                    <div className="text-white text-[24px] font-bold leading-tight">
                        {getPageTitle()}
                    </div>
                </div>

                {/* MIDDLE/RIGHT: Filters and actions (Optimized for Reporting) */}
                <div className="flex items-center gap-4 flex-1 justify-end">
                    {currentView === 'reporting' && (
                         <div className="flex items-center gap-3 relative mr-2">
                            <div className="relative w-[110px] h-[28px] border border-white rounded-[6px] flex items-center px-2 cursor-pointer bg-[#0D1C34]">
                                <div className="absolute -top-[8px] left-[8px] bg-[#0D1C34] px-1 text-[9px] font-bold text-white">Start date</div>
                                <Calendar size={12} className="text-white ml-auto" />
                            </div>
                            <div className="relative w-[110px] h-[28px] border border-white rounded-[6px] flex items-center px-2 cursor-pointer bg-[#0D1C34]">
                                <div className="absolute -top-[8px] left-[8px] bg-[#0D1C34] px-1 text-[9px] font-bold text-white">End date</div>
                                <Calendar size={12} className="text-white ml-auto" />
                            </div>
                         </div>
                    )}

                    <div className="flex items-center gap-[10px] z-10">
                        {currentView === 'reporting' ? (
                            <>
                                <div className="h-[32px] w-[32px] bg-[#0D9EAC] rounded-[6px] border border-white flex items-center justify-center cursor-pointer hover:bg-[#0b8a96] transition-colors shadow-sm">
                                    <Search size={16} className="text-white" />
                                </div>
                                <div className="h-[32px] px-3 bg-[#0D9EAC] rounded-[6px] border border-white flex items-center justify-center gap-2 cursor-pointer hover:bg-[#0b8a96] transition-colors shadow-sm">
                                    <Upload size={14} className="text-white" />
                                    <span className="text-white text-[12px] font-bold">Export Excel</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="h-[32px] px-4 bg-[#0D9EAC] rounded-[8px] border border-white flex items-center gap-[6px] cursor-pointer hover:bg-[#0b8a96] transition-colors">
                                    <Upload size={14} className="text-white" />
                                    <div className="text-white text-[12px] font-medium whitespace-nowrap">Export Excel</div>
                                </div>
                                <div className="h-[32px] px-4 bg-[#0D9EAC] rounded-[8px] border border-white flex items-center gap-[6px] cursor-pointer hover:bg-[#0b8a96] transition-colors">
                                    <Plus size={14} className="text-white" />
                                    <div className="text-white text-[12px] font-medium whitespace-nowrap">Insert Client</div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )}

      </div>
    </nav>
  );
};
