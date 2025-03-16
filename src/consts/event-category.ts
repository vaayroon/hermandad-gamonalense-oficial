import { type EventCategory } from "@/types/Event";

export const EventCategories: Record<string, EventCategory> = {
  All: {
    id: 'all',
    name: 'All Events'
  },
  Main: {
    id: 'main',
    name: 'Main Events'
  },
  Institutional: {
    id: 'institutional',
    name: 'Institutional Events'
  },
  Social: {
    id: 'social',
    name: 'Social Events'
  },
} as const;

export const EVENT_CATEGORIES: EventCategory[] = [
  EventCategories.All,
  EventCategories.Main,
  EventCategories.Institutional,
  EventCategories.Social
]

