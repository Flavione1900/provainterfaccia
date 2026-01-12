
import React from 'react';
import { ChevronDown } from 'lucide-react';

const COLORS = ['#0D9EAC', '#1B3353', '#EBE1E2', '#D4B483', '#2C675D', '#F3B15B', '#F15D4E', '#B9403B'];
const getColor = (index: number) => COLORS[index % COLORS.length];

interface ChartItem {
  label: string;
  value: string | number;
  formattedValue?: string;
}

const PREMIUMS_DATA: ChartItem[] = [
  { label: 'Car Protectio...', value: 649005.79, formattedValue: '649.005,79 €' },
  { label: 'Car Protectio...', value: 99894.85, formattedValue: '99.894,85 €' },
  { label: 'Car Protectio...', value: 29884.47, formattedValue: '29.884,47 €' },
  { label: 'GAP', value: 26628.00, formattedValue: '26.628 €' },
  { label: 'SALVA FRAN...', value: 1729.49, formattedValue: '1.729,49 €' },
  { label: 'CPI PLUS - cop...', value: 3423.78, formattedValue: '3.423,78 €' },
  { label: 'ASSISTENZA...', value: 1558.65, formattedValue: '1.558,65 €' },
  { label: 'CPI PLUS - pe...', value: 753.14, formattedValue: '753.14 €' },
];

const POLICIES_DURATION_DATA: ChartItem[] = [
  { label: '12 mesi', value: 3, formattedValue: '3' },
  { label: '24 mesi', value: 8, formattedValue: '8' },
  { label: '36 mesi', value: 75, formattedValue: '75' },
];

const DonutChart: React.FC<{ data: ChartItem[], size: number, thickness: number }> = ({ data, size, thickness }) => {
    const total = data.reduce((acc, item) => acc + (typeof item.value === 'number' ? item.value : 0), 0);
    let cumulativeValue = 0;
    const radius = (size - thickness) / 2;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {data.map((item, index) => {
                const value = typeof item.value === 'number' ? item.value : 0;
                const dashArray = (value / total) * circumference;
                const dashOffset = -1 * (cumulativeValue / total) * circumference;
                const color = getColor(index);
                cumulativeValue += value;
                const gap = data.length > 1 ? 2 : 0; 
                const adjustedDashArray = Math.max(0, dashArray - gap);
                return (
                    <circle key={index} cx={center} cy={center} r={radius} fill="none" stroke={color} strokeWidth={thickness}
                        strokeDasharray={`${adjustedDashArray} ${circumference - adjustedDashArray}`}
                        strokeDashoffset={dashOffset} transform={`rotate(-90 ${center} ${center})`} strokeLinecap="round" />
                );
            })}
        </svg>
    );
};

const ChartCard: React.FC<{ title: string; data: ChartItem[] }> = ({ title, data }) => {
    return (
        <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden w-full h-[259px] relative flex flex-col">
            <div className="w-full h-[36px] bg-[#F2F2F2] flex-shrink-0 relative">
                <div className="absolute left-[13px] top-[7px] text-black text-[16px] font-bold leading-[24px]">{title}</div>
                <div className="absolute right-[10px] top-[10px]"><ChevronDown size={18} color="#1D1D1B" /></div>
            </div>
            <div className="flex-1 flex items-center px-[13px] gap-[12px] sm:gap-[24px]">
                <div className="flex-shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex items-center justify-center">
                    <DonutChart data={data} size={100} thickness={12} />
                </div>
                <div className="flex-1 flex flex-col gap-[8px] overflow-y-auto max-h-[180px] pr-2 custom-scrollbar">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-[12px] min-w-0">
                                <div className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: getColor(index) }}></div>
                                <div className="text-[#333333] text-[12px] font-normal truncate">{item.label}</div>
                            </div>
                            <div className="text-[#333333] text-[12px] font-normal whitespace-nowrap ml-2">{item.formattedValue}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Reporting: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 font-roboto">
        {/* LEFT COLUMN: Summary Stats - Fluid 25% */}
        <div className="lg:col-span-3">
            <div className="bg-white rounded-[16px] shadow-[0px_0px_10px_2px_rgba(15,34,35,0.13)] overflow-hidden p-[12px] flex flex-col gap-[12px] w-full">
                <div className="w-full p-[12px] bg-[rgba(12,158,171,0.10)] rounded-[16px] outline outline-2 outline-[#0D9EAC] -outline-offset-2 flex items-center gap-[12px]">
                    <div className="w-[42px] h-[42px] bg-[#0D9EAC] rounded-full flex justify-center items-center flex-shrink-0">
                        <div className="w-[24px] h-[24px] relative">
                             <div className="absolute top-[11px] left-[17px] w-[2px] h-[2px] bg-white"></div>
                             <div className="absolute top-[3.25px] left-[1.25px] w-[21.5px] h-[17.5px] bg-white rounded-[2px]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                         <div className="text-black text-[16px] font-bold leading-tight">Total Premium</div>
                         <div className="text-black text-[20px] font-bold leading-tight mt-[6px]">813.149,60 €</div>
                         <div className="text-black text-[10px] font-normal leading-tight mt-[6px]">Value of total premium</div>
                    </div>
                </div>
                <div className="flex gap-[12px] w-full">
                    <div className="flex-1 p-[12px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-1">
                        <div className="text-black text-[16px] font-bold leading-tight">Commissions</div>
                        <div className="text-black text-[20px] font-bold leading-tight">700,00 €</div>
                    </div>
                    <div className="flex-1 p-[12px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-1">
                         <div className="text-black text-[16px] font-bold leading-tight">Policies</div>
                         <div className="text-black text-[20px] font-bold leading-tight">103</div>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN: Grid of Charts - Fluid 75% */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
             <ChartCard title="Premiums details" data={PREMIUMS_DATA} />
             <ChartCard title="Commissions details" data={PREMIUMS_DATA} />
             <ChartCard title="Active policies details" data={PREMIUMS_DATA} />
             <ChartCard title="Active Policy Details (Duration)" data={POLICIES_DURATION_DATA} />
        </div>
    </div>
  );
};
