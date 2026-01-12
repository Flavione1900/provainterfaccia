
import React from 'react';
import { Product, ProposalStat, BenefitGroup, Client } from './types';

// Fix: Use React.createElement to avoid JSX syntax which causes errors in a .ts file.
export const FilterIcon = () => React.createElement('svg', {
  width: "11",
  height: "8",
  viewBox: "0 0 11 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: "flex-shrink-0"
}, React.createElement('path', {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.4185 0H0.513004C0.0578571 0 -0.171808 0.404156 0.150688 0.640172L4.09926 3.53033V6.75C4.09926 6.87236 4.18084 6.98703 4.31783 7.05722L6.02585 7.93191C6.20585 8.02453 6.83211 7.92958 6.83211 7.62469V3.53033L10.7808 0.640172C11.1026 0.404625 10.8745 0 10.4185 0Z",
  fill: "#333333"
}));

export const DASHBOARD_STATS: ProposalStat[] = [
  { count: 1784, label: 'Issued' },
  { count: 2187, label: 'Creation' },
  { count: 62, label: 'Calculated' },
  { count: 5, label: 'Proposal' },
  { count: 48, label: 'Assesment' },
  { count: 1, label: 'Renewal' },
  { count: 3345, label: 'Expired' },
  { count: 57, label: 'Issued' },
  { count: 8, label: 'Cancelled' },
  { count: 46, label: 'Approved' },
  { count: 12, label: 'To_Finalize' },
  { count: 1, label: 'Waiting_Clients' },
  { count: 29, label: 'Wire transfer' },
  { count: 3, label: 'Rejected' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    category: 'Bankinsurance - Protection',
    title: 'Polizza Yacht',
    description: "L'assicurazione Corpi Unità da Diporto è l'assicurazione per imbarcazioni che copre i danni materiali e diretti che possono colpire le imbarcazioni durante la navigazione e/o la giacenza in acqua o a terra",
    imageUrl: 'https://picsum.photos/id/211/400/250',
  },
  {
    id: '2',
    category: 'Bankinsurance - Protection',
    title: 'Infortuni',
    description: 'Protezione completa per il tuo yacht. Naviga senza pensieri con la nostra polizza su misura.',
    imageUrl: 'https://picsum.photos/id/338/400/250',
  },
  {
    id: '3',
    category: 'Bankinsurance - Protection',
    title: 'Cyber security',
    description: 'Copertura completa per danni. stai senza pensieri con la nostra assicurazione affidabile.',
    imageUrl: 'https://picsum.photos/id/2/400/250',
  },
  {
    id: '4',
    category: 'Bankinsurance - Protection',
    title: 'Incidenti',
    description: 'Assicurati contro gli infortuni. Proteggi te stesso e i tuoi cari da ogni rischio.',
    imageUrl: 'https://picsum.photos/id/183/400/250',
  },
  {
    id: '5',
    category: 'Bankinsurance - Protection',
    title: 'Danni',
    description: 'Copertura completa per danni. stai senza pensieri con la nostra assicurazione affidabile.',
    imageUrl: 'https://picsum.photos/id/1071/400/250',
  },
];

export const PROPOSAL_DETAILS: BenefitGroup[] = [
  {
    name: 'Responsabilità civile verso Terzi',
    amount: 470.66,
    items: [
      {
        description: 'Responsabilità per la sicurezza delle informazioni',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: "Responsabilità per l'attività multimediale e pubblicitaria",
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Costi, oneri e sanzioni PCI',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
    ],
  },
  {
    name: 'Danni Diretti',
    amount: 466.81,
    items: [
      {
        description: 'Servizi per la gestione di una violazione dei dati',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Costi di istruttoria',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Costi per recupero dati',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Spese per investigazione',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
       {
        description: 'Costi di preparazione',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Spese di rettifica dell\'hardware',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Danni relativi all\'interruzione della propria attività',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      },
      {
        description: 'Spegnimento volontario',
        limit: 'Massimale: 1.000.000,00 €',
        deductible: 'Franchigia: 750,00 €',
      }
    ],
  },
];

export const CLIENTS_DATA: Client[] = [
  { id: 1, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 2, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 15, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 16, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 17, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 20, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 21, status: 'inactive', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 40, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 41, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 45, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 46, status: 'active', warranty: 'Giuridica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 47, status: 'inactive', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 48, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 49, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 50, status: 'inactive', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 51, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 52, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 53, status: 'inactive', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 54, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
  { id: 55, status: 'active', warranty: 'Fisica', role: 'Assistant', name: 'Mario Rossi' },
];
