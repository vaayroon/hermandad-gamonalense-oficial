import { type EventCategory } from "@/types/Event";

export const EventCategories: Record<string, EventCategory> = {
  All: {
    id: 'all',
    name: 'All Events',
    urlname: 'all'
  },
  Main: {
    id: 'main',
    name: 'Main Events',
    urlname: 'main'
  },
  Institutional: {
    id: 'institutional',
    name: 'Institutional Events',
    urlname: 'institutional'
  },
  Social: {
    id: 'social',
    name: 'Social Events',
    urlname: 'social'
  },
} as const;

export const EVENT_CATEGORIES: EventCategory[] = [
  EventCategories.All,
  EventCategories.Main,
  EventCategories.Institutional,
  EventCategories.Social
]

