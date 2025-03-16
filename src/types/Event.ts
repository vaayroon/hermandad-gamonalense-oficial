export interface Event {
  id: number;
  title: string;
  date: string;
  category: EventCategory;
  description: string;
  prioste?: string;
  imageUrl: string;
  gallery: string[];
}

export interface EventCategory {
  id: string;
  name: string;
}