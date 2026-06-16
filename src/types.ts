export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  role?: string;
  year?: string;
  stats?: { label: string; value: string }[];
  category?: string;
  monthlyUsers?: string;
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Beta' | 'Live' | 'Concept';
  tech: string[];
}

export interface BuildStep {
  number: string;
  title: string;
  description: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  logoType: string; // to identify which SVG to render
}
