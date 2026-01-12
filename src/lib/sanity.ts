import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityCdnClient = createClient({
  projectId: 'm8nguuo2',
  dataset: 'production',
  useCdn: true,               // IMPORTANTE: true para lectura rápida y caché
  apiVersion: '2026-01-10',
});

// Configuración del constructor de URLs de imágenes
const builder = createImageUrlBuilder(sanityCdnClient);

// Helper para generar las URLs
export function urlFor(source: any) {
  return builder.image(source);
}