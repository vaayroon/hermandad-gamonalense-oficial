export interface Event {
  id: number;
  title: string;
  date: string;
  category: 'principal' | 'institucional' | 'social';
  description: string;
  prioste?: string;
  imageUrl: string;
  gallery: string[];
}

export interface Category {
  id: string;
  name: string;
}