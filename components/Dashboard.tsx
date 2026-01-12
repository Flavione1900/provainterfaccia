
import React from 'react';
import { DASHBOARD_STATS, PRODUCTS } from '../constants';
import { ChevronRight, ChevronDown, Plus, MessageCircle } from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
      {/* Sidebar Area - Fluid 25% width on large screens */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* Profile & Stats Card Combined */}
        <div className="bg-white rounded-[16px] p-[12px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden w-full">
             {/* Profile Header */}
            <div className="mb-6">
                <h1 className="text-[24px] leading-tight">
                    <span className="font-normal text-black">Benvenuta,</span>{' '}
                    <span className="font-bold text-[#0D9EAC]">Maria Rossi</span>
                </h1>
                <p className="text-[12px] text-black mt-1 font-normal">Profilo aggiornato il 09/12/2025</p>
            </div>

            {/* Stats Items */}
            <div className="space-y-3">
                {/* Customers */}
                <div className="bg-[rgba(12,158,171,0.10)] border-[2px] border-[#0D9EAC] rounded-[16px] p-3 flex items-center gap-3 w-full">
                    <div className="w-[42px] h-[42px] bg-[#0D9EAC] rounded-full flex items-center justify-center flex-shrink-0">
                         <div className="relative w-6 h-6">
                            <div className="absolute w-[2px] h-[2px] bg-white left-[17px] top-[11px]"></div>
                            <div className="absolute w-[21.5px] h-[17.5px] bg-white border border-[#0D9EAC] left-[1.25px] top-[3.25px] rounded-[1px]"></div>
                         </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-[16px] font-bold text-black leading-tight">Customers</div>
                        <div className="text-[20px] font-bold text-black leading-tight">457</div>
                        <div className="text-[10px] text-black mt-0.5">360 Prospect ( 78 % of the total )</div>
                    </div>
                </div>

                {/* Annual Premium */}
                <div className="bg-[rgba(12,158,171,0.10)] border-[2px] border-[#0D9EAC] rounded-[16px] p-3 flex items-center gap-3 w-full">
                    <div className="w-[42px] h-[42px] bg-[#0D9EAC] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="relative w-6 h-6">
                            <div className="absolute inset-0 m-auto w-[20px] h-[16px] bg-white rounded-[2px]"></div>
                             <div className="absolute top-[8px] right-[4px] w-[4px] h-[4px] bg-[#0D9EAC] rounded-full"></div>
                         </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-[16px] font-bold text-black leading-tight">Annual Premium</div>
                        <div className="text-[20px] font-bold text-black leading-tight">38.535.958,23 €</div>
                        <div className="text-[10px] text-black mt-0.5">778.75 % Compared to the previous year</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Proposal Stats List */}
        <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden relative pb-[12px] w-full">
            {/* Gray Header Strip */}
            <div className="absolute top-0 left-0 w-full h-[36px] bg-[#F2F2F2]"></div>
            
            {/* Title */}
            <div className="absolute top-[7px] left-[12px] text-black text-[16px] font-bold leading-[24px]">
                Proposal
            </div>

            {/* List Items Container */}
            <div className="mt-[51px] px-[12px] flex flex-col gap-[12px]">
                {DASHBOARD_STATS.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center w-full cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                        <div className="flex items-center gap-4 flex-1">
                             <div className="text-left text-[#0D1C34] text-[16px] font-bold leading-normal min-w-[45px]">
                                {stat.count}
                             </div>
                             <div className="text-[#333333] text-[12px] font-bold leading-normal">
                                {stat.label}
                             </div>
                        </div>
                        <div className="w-[14px] h-[14px] flex items-center justify-center flex-shrink-0">
                            <ChevronRight size={14} color="#1B3353" strokeWidth={3} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Main Content Area - Fluid 75% width */}
      <div className="lg:col-span-9 space-y-6">
         <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden min-h-[729px] relative w-full">
            <div className="h-[36px] w-full bg-[#F2F2F2] absolute top-0 left-0"></div>
            <div className="relative pt-[10px] px-[12px] flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-bold text-black">Product Category: Bankinsurance - Protection</h2>
                <div className="w-[18px] h-[18px] mr-3">
                     <ChevronDown size={18} color="black" />
                </div>
            </div>

            <div className="px-[12px] pb-[12px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="bg-white rounded-[8px] p-[12px] pb-[12px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] flex flex-col justify-between h-[323px] w-full">
                        <div className="flex flex-col gap-[12px]">
                            <div className="h-[152px] w-full bg-[#C4C4C4] rounded-[8px] overflow-hidden">
                                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="text-[16px] font-bold text-[#333333] leading-6">{product.title}</h3>
                                <p className="text-[12px] font-normal text-[#333333] leading-[14px] line-clamp-3">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[12px] mt-auto">
                            <button 
                                onClick={() => onNavigate('proposal')}
                                className="bg-[#0D9EAC] rounded-[8px] px-[12px] py-[11px] flex items-center gap-[6px] hover:bg-[#0b8a96] transition-colors flex-1 justify-center"
                            >
                                <Plus size={12} color="white" strokeWidth={3} />
                                <span className="text-white text-[12px] font-medium tracking-[0.32px] whitespace-nowrap">Proposal</span>
                            </button>
                             <button 
                                className="bg-[#0D9EAC] rounded-[8px] px-[12px] py-[11px] flex items-center gap-[6px] hover:bg-[#0b8a96] transition-colors flex-1 justify-center"
                            >
                                <Plus size={12} color="white" strokeWidth={3} />
                                <span className="text-white text-[12px] font-medium tracking-[0.32px] whitespace-nowrap">Anonymous Proposal</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};
