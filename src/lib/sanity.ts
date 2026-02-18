import { createClient } from '@sanity/client';

// Sanity.io Configuration
// To connect to Sanity CMS:
// 1. Create a project at https://www.sanity.io/manage
// 2. Get your project ID and dataset name
// 3. Add VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET to your environment

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster responses
});

// Check if Sanity is configured
export const isSanityConfigured = () => {
  return Boolean(projectId);
};

// Image URL builder helper
export const getSanityImageUrl = (ref: string) => {
  if (!projectId) return '';
  
  // Parse the Sanity image reference
  const [, assetId, dimensions, format] = ref.split('-');
  if (!assetId) return '';
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${dimensions}.${format}`;
};

// GROQ Queries for fetching content
export const queries = {
  heroImages: `*[_type == "heroImage" && active == true] | order(order asc) {
    _id,
    "src": image.asset->url,
    alt,
    order,
    active
  }`,
  
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    startingPrice,
    "image": image.asset->url,
    featured,
    features
  }`,
  
  galleryItems: `*[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    title,
    eventType,
    serviceType,
    "images": images[].asset->url,
    promoTag
  }`,
  
  promos: `*[_type == "promo" && active == true] | order(order asc) {
    _id,
    title,
    description,
    offerDetail,
    price,
    "image": image.asset->url,
    active,
    features,
    addOns,
    note
  }`,
  
  globalSettings: `*[_type == "globalSettings"][0] {
    whatsappNumber,
    email,
    phone,
    address,
    businessHours
  }`,
};

// Fetch functions - these will use static data if Sanity is not configured
export async function fetchHeroImages() {
  if (!isSanityConfigured()) {
    const { heroImages } = await import('./data');
    return heroImages;
  }
  return sanityClient.fetch(queries.heroImages);
}

export async function fetchServices() {
  if (!isSanityConfigured()) {
    const { services } = await import('./data');
    return services;
  }
  return sanityClient.fetch(queries.services);
}

export async function fetchGalleryItems() {
  if (!isSanityConfigured()) {
    const { galleryItems } = await import('./data');
    return galleryItems;
  }
  return sanityClient.fetch(queries.galleryItems);
}

export async function fetchPromos() {
  if (!isSanityConfigured()) {
    const { promos } = await import('./data');
    return promos;
  }
  return sanityClient.fetch(queries.promos);
}

export async function fetchGlobalSettings() {
  if (!isSanityConfigured()) {
    const { globalSettings } = await import('./data');
    return globalSettings;
  }
  return sanityClient.fetch(queries.globalSettings);
}
