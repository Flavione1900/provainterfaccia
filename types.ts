
export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProposalStat {
  count: number;
  label: string;
}

export interface BenefitItem {
  description: string;
  limit: string;
  deductible: string;
}

export interface BenefitGroup {
  name: string;
  amount: number | null;
  items: BenefitItem[];
}

export interface Client {
  id: number;
  status: 'active' | 'inactive'; // active = green, inactive = red
  warranty: string;
  role: string; // Maps to "Name/Surname" column in UI (e.g. Assistant)
  name: string; // Maps to "Name" column in UI (e.g. Mario Rossi)
}

export type ViewState = 'dashboard' | 'proposal' | 'clients' | 'client-details' | 'reporting';
