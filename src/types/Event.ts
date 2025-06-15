import type { Sponsors } from "./Sponsors";

export interface Event {
  id: string;
  title: string;
  date: string;
  category: EventCategory;
  description: string;
  prioste?: string;
  imageUrl: string;
  gallery: string[];
  gallerySponsor?: Sponsors[];
  videoId?: string;
  videoAspectRatio?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  urlname: string;
}