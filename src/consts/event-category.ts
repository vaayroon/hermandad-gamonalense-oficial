import { type EventCategory } from "@/types/Event";

export const EventCategories: Record<string, EventCategory> = {
  All: {
    id: 'all',
    name: 'Todos los Eventos',
    urlname: 'all'
  },
  Main: {
    id: 'main',
    name: 'Eventos Principales',
    urlname: 'main'
  },
  Institutional: {
    id: 'institutional',
    name: 'Eventos Institucionales',
    urlname: 'institutional'
  },
  Social: {
    id: 'social',
    name: 'Eventos Sociales',
    urlname: 'social'
  },
} as const;

export const EVENT_CATEGORIES: EventCategory[] = [
  EventCategories.All,
  EventCategories.Main,
  EventCategories.Institutional,
  EventCategories.Social
]

