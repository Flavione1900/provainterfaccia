
import React, { useState } from 'react';
import { ChevronDown, Trash2 } from 'lucide-react';

// SVG for Edit icon (Management)
const EditIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <rect x="1" y="2" width="9" height="9" stroke="white" strokeWidth="1.2"/>
    <rect x="4" y="0.94" width="7.06" height="7.06" stroke="white" strokeWidth="1.2"/>
  </svg>
);

// SVG for Filter
const FilterIcon = () => (
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.4185 0H0.513004C0.0578571 0 -0.171808 0.404156 0.150688 0.640172L4.09926 3.53033V6.75C4.09926 6.87236 4.18084 6.98703 4.31783 7.05722L6.02585 7.93191C6.20585 8.02453 6.83211 7.92958 6.83211 7.62469V3.53033L10.7808 0.640172C11.1026 0.404625 10.8745 0 10.4185 0Z" fill="#333333"/>
  </svg>
);

export const ClientDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'detail' | 'policies'>('detail');

  return (
    <div className="w-full flex flex-col justify-start items-start gap-[24px] font-roboto py-6 transition-all duration-300">
      
      {/* Tab Menu - Proportional Width */}
      <div className="w-full h-[36px] bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.12)] rounded-[8px] flex items-center px-4 overflow-hidden">
         <div className="flex items-start gap-[32px]">
             {/* Detail Tab */}
             <div 
                className="flex flex-col justify-center items-center gap-[4px] cursor-pointer group"
                onClick={() => setActiveTab('detail')}
             >
                 <div className={`text-[12px] font-medium leading-none transition-colors ${activeTab === 'detail' ? 'text-[#4CC9C3]' : 'text-[#333333] group-hover:text-gray-500'}`}>Detail</div>
                 {activeTab === 'detail' && <div className="w-full h-[3px] bg-[#4CC9C3] rounded-[8px]"></div>}
             </div>
             
             {/* Policies Tab */}
             <div 
                className="flex flex-col justify-center items-center gap-[4px] cursor-pointer group"
                onClick={() => setActiveTab('policies')}
             >
                 <div className={`text-[12px] font-medium leading-none transition-colors ${activeTab === 'policies' ? 'text-[#4CC9C3]' : 'text-[#333333] group-hover:text-gray-500'}`}>Policies</div>
                 {activeTab === 'policies' && <div className="w-full h-[3px] bg-[#4CC9C3] rounded-[8px]"></div>}
             </div>
         </div>
      </div>

      {/* Content Area - Proportional to screen */}
      {activeTab === 'detail' ? (
          <div className="w-full flex flex-col gap-[24px]">
              {/* Cards with fluid grids */}
              {[
                { title: 'Personal information', fields: ['Legal Name', 'VAT number', 'Fiscal Code', 'Constitution date', 'Website'], hasButton: false },
                { title: 'Address', fields: ['Country', 'Province', 'City', 'POSTAL CODE', 'Address', 'At'], hasButton: true },
                { title: 'Main contact details', fields: ['E-mail', 'Cell phone'], hasButton: true }
              ].map((card, cardIdx) => (
                <div key={cardIdx} className="w-full bg-white shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] rounded-[16px] overflow-hidden flex flex-col transition-all">
                    <div className="w-full h-[36px] bg-[#F2F2F2] flex items-center justify-between px-3">
                        <div className="text-black text-[16px] font-bold">{card.title}</div>
                        <ChevronDown size={18} color="#1D1D1B" />
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {card.fields.map((field, fieldIdx) => (
                                <div key={fieldIdx} className="flex flex-col gap-1">
                                    <div className="text-[#333333] text-[12px] font-normal truncate">{field}</div>
                                    <div className="h-[36px] px-3 border border-[#BFBFBF] rounded-[4px] flex items-center bg-white">
                                        <span className="text-[#BFBFBF] text-[12px] truncate">{field}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {card.hasButton && (
                            <div className="w-full flex justify-end">
                                <div className="h-[36px] px-4 bg-[#0D9EAC] rounded-[8px] flex items-center gap-2 cursor-pointer hover:bg-[#0b8a96] transition-colors">
                                    <EditIcon />
                                    <span className="text-white text-[12px] font-normal tracking-[0.32px] whitespace-nowrap">Management</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
              ))}
          </div>
      ) : (
          /* POLICIES VIEW (Fluid Table) */
          <div className="w-full shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden rounded-[8px] bg-white border border-[#D8D8D8] overflow-x-auto transition-all">
                <div className="flex min-w-max w-full">
                    {[
                        { title: 'Policy ID', width: 'flex-1', data: ['1', '2'] },
                        { title: 'User ID', width: 'flex-1', data: ['1', '2'] },
                        { title: 'Policy number', width: 'w-[140px]', data: ['yest_100009', 'yest_100009'] },
                        { title: 'Start Date', width: 'flex-1', data: ['27/11/2025', '26/11/2025'] },
                        { title: 'Expiration Date', width: 'w-[140px]', data: ['27/11/2026', '26/11/2026'] },
                        { title: 'Status', width: 'flex-1', data: ['ACTIVE', 'ACTIVE'] },
                        { title: 'Nominative', width: 'flex-2', data: ['Luciano Rossi', 'Giulia Verdi'] },
                        { title: 'Company', width: 'flex-1', data: ['Company', 'Company'] },
                        { title: 'Product', width: 'flex-1', data: ['Prodotto', 'Prodotto'] },
                        { title: 'Proposal ID', width: 'flex-1', data: ['30147', '30852'] },
                        { title: 'Total Premium', width: 'w-[120px]', align: 'right', data: ['1.589,23€', '2.765,91€'] },
                        { title: 'Details', width: 'w-[87px]', type: 'info', data: [1, 2] },
                        { title: 'Cancel', width: 'w-[84px]', type: 'trash', borderLeft: true, data: [1, 2] },
                    ].map((col, colIdx) => (
                        <div key={colIdx} className={`${col.width} border-r border-[#D8D8D8] flex flex-col flex-shrink-0 ${col.borderLeft ? 'border-l border-[#CBCDD1]' : ''}`}>
                            <div className={`w-full h-[30px] px-3 bg-[#CBCDD1] flex ${col.align === 'right' ? 'justify-end' : 'justify-between'} items-center flex-shrink-0`}>
                                <div className="text-black text-[12px] font-medium truncate">{col.title}</div>
                                {!col.align && <FilterIcon />}
                            </div>
                            {col.data.map((val, rowIdx) => (
                                <div key={rowIdx} className={`w-full h-[30px] px-3 bg-white flex ${col.align === 'right' ? 'justify-end' : 'justify-start'} items-center`}>
                                    {col.type === 'info' ? (
                                        <div className="w-[14px] h-[14px] rounded-full border border-[#0D9EAC] cursor-pointer hover:bg-[#0D9EAC]/10"></div>
                                    ) : col.type === 'trash' ? (
                                        <div className="w-[12px] h-[12px] cursor-pointer hover:scale-110 transition-transform">
                                            <Trash2 size={12} color="#0D9EAC" />
                                        </div>
                                    ) : (
                                        <div className="text-black text-[12px] font-normal truncate">{val}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
          </div>
      )}
    </div>
  );
};
