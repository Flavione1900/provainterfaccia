
import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { CLIENTS_DATA } from '../constants';
import { ViewState } from '../types';

interface ClientsProps {
    onNavigate?: (view: ViewState) => void;
}

const FilterIcon = () => (
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.4185 0H0.513004C0.0578571 0 -0.171808 0.404156 0.150688 0.640172L4.09926 3.53033V6.75C4.09926 6.87236 4.18084 6.98703 4.31783 7.05722L6.02585 7.93191C6.20585 8.02453 6.83211 7.92958 6.83211 7.62469V3.53033L10.7808 0.640172C11.1026 0.404625 10.8745 0 10.4185 0Z" fill="#333333"/>
  </svg>
);

export const Clients: React.FC<ClientsProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[24px] font-roboto py-6">
      
      {/* Search Policies Card */}
      <div className="w-full bg-white shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden rounded-[16px] flex flex-col transition-all duration-300">
          <div className="w-full h-[36px] bg-[#F2F2F2] flex items-center justify-between px-3">
              <div className="text-black text-[16px] font-bold">
                  Search Policies
              </div>
              <ChevronDown size={18} color="#1D1D1B" />
          </div>

          <div className="p-4 flex flex-col gap-4 w-full">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {['Id', 'Name/Surname', 'Name', 'VAT number/Fiscal Code'].map((label) => (
                    <div key={label} className="flex flex-col gap-1 flex-1">
                        <div className="text-[#333333] text-[12px] font-normal leading-[18px]">{label}</div>
                        <div className="h-[36px] px-3 bg-white rounded-[4px] outline outline-1 outline-[#BFBFBF] -outline-offset-1 flex items-center">
                            <input 
                              type="text" 
                              placeholder={label} 
                              className="w-full bg-transparent outline-none text-black text-[12px] placeholder-[#BFBFBF]"
                            />
                        </div>
                    </div>
                  ))}
              </div>

              <div className="w-full flex justify-end">
                  <div className="h-[36px] px-4 bg-[#0D9EAC] rounded-[8px] flex items-center gap-2 cursor-pointer hover:bg-[#0b8a96] transition-colors">
                      <Search size={14} className="text-white" />
                      <div className="text-white text-[12px] font-medium tracking-[0.32px]">Search</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Clients Table Container - Improved Fluidity */}
      <div className="w-full shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden rounded-[8px] bg-white border border-[#D8D8D8] overflow-x-auto transition-all duration-300">
           <div className="flex min-w-max w-full">
               {/* ID Column */}
               <div className="w-[87px] border-r border-[#D8D8D8] flex flex-col flex-shrink-0">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center flex-shrink-0">
                       <div className="text-black text-[12px] font-medium">ID</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center">
                           <div className="text-black text-[12px] font-normal">{client.id}</div>
                       </div>
                   ))}
               </div>

               {/* Prodotto Column */}
               <div className="w-[100px] border-r border-[#D8D8D8] flex flex-col flex-shrink-0">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center">
                       <div className="text-black text-[12px] font-medium">Prodotto</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center">
                           <div className={`w-[12px] h-[12px] rounded-full ${client.status === 'active' ? 'bg-[#119737]' : 'bg-[#DC2626]'}`}></div>
                       </div>
                   ))}
               </div>

               {/* Garanzia Column */}
               <div className="flex-1 min-w-[150px] border-r border-[#D8D8D8] flex flex-col">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center">
                       <div className="text-black text-[12px] font-medium">Garanzia</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center">
                           <div className="text-black text-[12px] font-normal truncate">{client.warranty}</div>
                       </div>
                   ))}
               </div>

               {/* Name/Surname Column */}
               <div className="flex-1 min-w-[200px] border-r border-[#D8D8D8] flex flex-col">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center">
                       <div className="text-black text-[12px] font-medium">Name/Surname</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center">
                           <div className="text-black text-[12px] font-normal truncate">{client.role}</div>
                       </div>
                   ))}
               </div>

               {/* Name Column */}
               <div className="flex-2 min-w-[250px] border-r border-[#D8D8D8] flex flex-col">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center">
                       <div className="text-black text-[12px] font-medium">Name</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center">
                           <div className="text-black text-[12px] font-normal truncate">{client.name}</div>
                       </div>
                   ))}
               </div>

               {/* Details Column */}
               <div className="w-[83px] border-l border-[#D8D8D8] flex flex-col flex-shrink-0">
                   <div className="w-full h-[30px] px-3 bg-[#CBCDD1] flex justify-between items-center">
                       <div className="text-black text-[12px] font-medium">Details</div>
                       <FilterIcon />
                   </div>
                   {CLIENTS_DATA.map((client, index) => (
                       <div key={index} className="w-full h-[30px] px-3 bg-white flex items-center justify-center">
                           <div 
                              className="w-[18px] h-[18px] relative overflow-hidden cursor-pointer flex items-center justify-center rounded-full border border-[#BFBFBF] hover:border-[#0D9EAC] transition-colors"
                              onClick={() => onNavigate && onNavigate('client-details')}
                           >
                               <span className="text-[10px] text-[#BFBFBF] hover:text-[#0D9EAC] font-serif font-bold italic">i</span>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
      </div>
    </div>
  );
};
