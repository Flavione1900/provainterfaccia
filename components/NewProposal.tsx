
import React from 'react';
import { PROPOSAL_DETAILS, FilterIcon } from '../constants';
import { ChevronDown } from 'lucide-react';

export const NewProposal: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 font-roboto">
      {/* Sidebar Area - Fluid 25% width */}
      <div className="lg:col-span-3">
        
        {/* Total Premium Card - Fully fluid within its column */}
        <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden h-[252px] w-full flex flex-col justify-between p-[12px]">
            {/* Main Content Group */}
            <div className="flex flex-col gap-[12px] w-full">
                
                {/* Total Premium Box */}
                <div className="w-full p-[12px] bg-[rgba(12,158,171,0.10)] rounded-[16px] outline outline-2 outline-[#0D9EAC] -outline-offset-2 flex items-center gap-[12px]">
                    <div className="w-[42px] h-[42px] bg-[#0D9EAC] rounded-full flex justify-center items-center flex-col gap-[10px] p-[6px] flex-shrink-0">
                        <div className="w-[24px] h-[24px] relative overflow-hidden">
                            <div className="absolute w-[2px] h-[2px] left-[17px] top-[11px] bg-white"></div>
                            <div className="absolute w-[21.5px] h-[17.5px] left-[1.25px] top-[3.25px] bg-white"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1">
                         <div className="flex flex-col">
                             <div className="text-black text-[16px] font-bold font-roboto leading-tight">Total Premium</div>
                             <div className="text-black text-[20px] font-bold font-roboto leading-tight">852,26 €</div>
                         </div>
                         <div className="text-black text-[10px] font-normal font-roboto leading-tight">Valore totale del premio tasse incluse</div>
                    </div>
                </div>

                {/* Net & Taxes */}
                <div className="flex gap-[12px] w-full">
                     <div className="flex-1 p-[12px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-1">
                         <div className="text-black text-[16px] font-bold font-roboto leading-tight">Net</div>
                         <div className="text-black text-[20px] font-bold font-roboto leading-tight">700,00 €</div>
                     </div>
                     <div className="flex-1 p-[12px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-1">
                         <div className="text-black text-[16px] font-bold font-roboto leading-tight">Taxes</div>
                         <div className="text-black text-[20px] font-bold font-roboto leading-tight">103</div>
                     </div>
                </div>
            </div>

            {/* Buttons Group */}
            <div className="flex justify-end items-start gap-[12px] w-full">
                 <div className="px-4 py-2 bg-[#FCFCFC] rounded-[8px] outline outline-1 outline-[#F2F2F2] -outline-offset-1 flex justify-center items-center gap-[6px] cursor-pointer hover:bg-gray-50 flex-1">
                     <div className="w-[12px] h-[12px] relative overflow-hidden">
                          <div className="absolute w-[10px] h-[4.5px] left-[1px] top-[4.5px] outline outline-[1.2px] outline-[#1B3353] -outline-offset-[0.6px]"></div>
                          <div className="absolute w-[6px] h-[4px] left-[3px] top-[7px] outline outline-[1.2px] outline-[#1B3353] -outline-offset-[0.6px]"></div>
                          <div className="absolute w-[6px] h-[3.5px] left-[3px] top-[1px] outline outline-[1.2px] outline-[#1B3353] -outline-offset-[0.6px]"></div>
                     </div>
                     <div className="text-[#1B3353] text-[12px] font-normal tracking-[0.32px] font-roboto">Print</div>
                 </div>
                 <div className="px-4 py-2 bg-[#0D9EAC] rounded-[8px] flex justify-center items-center gap-[6px] cursor-pointer hover:bg-[#0b8a96] flex-1">
                     <div className="text-white text-[12px] font-medium tracking-[0.32px] font-roboto">Select</div>
                 </div>
            </div>
        </div>
      </div>

      {/* Main Content Area - Fluid 75% width */}
      <div className="lg:col-span-9">
         <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden min-h-[588px] relative pb-4 w-full">
             <div className="absolute top-0 left-0 w-full h-[36px] bg-[#F2F2F2]"></div>
             <div className="relative flex justify-between items-center px-[13px] pt-[7px] mb-[20px]">
                 <h2 className="text-[16px] font-bold text-black leading-[24px]">New proposal</h2>
                 <div className="mt-1">
                     <ChevronDown size={18} color="black" />
                 </div>
             </div>

             <div className="mx-[13px] rounded-[8px] overflow-hidden shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] border border-gray-100">
                <div className="w-full text-black">
                    <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr_1fr] bg-[#CBCDD1]">
                        <div className="px-3 py-1.5 flex justify-between items-center"><span className="text-[12px] font-medium">Benefit</span><FilterIcon /></div>
                        <div className="px-3 py-1.5 flex justify-between items-center"><span className="text-[12px] font-medium">Dettaglio</span><FilterIcon /></div>
                        <div className="px-3 py-1.5 flex justify-between items-center"><span className="text-[12px] font-medium">Massimale - Franchigia</span><FilterIcon /></div>
                        <div className="px-3 py-1.5 flex justify-between items-center"><span className="text-[12px] font-medium">Gross amount</span><FilterIcon /></div>
                    </div>

                    {PROPOSAL_DETAILS.map((group, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr_1fr] bg-white">
                                <div className="px-3 py-1.5 flex items-center gap-[10px] h-[30px]">
                                    <div className="w-[8.25px] h-[9px] flex items-center justify-center">
                                        <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.24346 0.32607C5.85982 -0.34595 6.98043 0.0901247 6.98043 1.002L6.98043 6.43039C6.98043 6.98267 6.53271 7.43039 5.98043 7.43039L1.00163 7.43039C0.131394 7.43039 -0.323555 6.3958 0.264663 5.75446L5.24346 0.32607Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <span className="text-[12px] font-bold">{group.name}</span>
                                </div>
                                <div className="px-3 py-1.5 h-[30px]"></div>
                                <div className="px-3 py-1.5 h-[30px]"></div>
                                <div className="px-3 py-1.5 h-[30px] flex justify-end items-center">
                                    <span className="text-[12px] font-bold">{group.amount ? `${group.amount.toFixed(2).replace('.', ',')} €` : ''}</span>
                                </div>
                            </div>
                            {group.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="grid grid-cols-[1.2fr_1.5fr_1.5fr_1fr] bg-white hover:bg-gray-50">
                                    <div className="px-3 py-1.5"></div>
                                    <div className="px-3 py-1.5 text-[12px]">{item.description}</div>
                                    <div className="px-3 py-1.5 text-[12px]">{item.limit}<br/>{item.deductible}</div>
                                    <div className="px-3 py-1.5"></div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};
