// Sanity.io Schema Definitions for Azalea Affairs
// 
// To set up Sanity CMS:
// 1. Install Sanity CLI: npm install -g @sanity/cli
// 2. Create a new Sanity project: sanity init
// 3. Copy these schemas to your Sanity project's schemas folder
// 4. Deploy: sanity deploy
//
// These schemas define the content structure for the CMS

export const heroImage = {
  name: 'heroImage',
  title: 'Hero Images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this image',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
      order: 'order',
    },
    prepare({ media, title, order }: any) {
      return {
        title: `${order}. ${title}`,
        media,
      };
    },
  },
};

export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'startingPrice',
      title: 'Starting Price (£)',
      type: 'number',
      description: 'Starting price in GBP',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in this service',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
};

export const galleryItem = {
  name: 'galleryItem',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Birthday', value: 'Birthday' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Baby Shower', value: 'Baby Shower' },
          { title: 'Proposal', value: 'Proposal' },
          { title: 'Anniversary', value: 'Anniversary' },
          { title: 'Other', value: 'Other' },
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Event Planning', value: 'Event Planning' },
          { title: 'Event Decoration', value: 'Event Decoration' },
          { title: 'Rentals', value: 'Rentals' },
          { title: 'Full Service', value: 'Full Service' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'promoTag',
      title: 'Promo Tag',
      type: 'string',
      description: 'Optional promotional tag (e.g., "Featured", "Best Seller")',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      eventType: 'eventType',
    },
    prepare({ title, media, eventType }: any) {
      return {
        title,
        subtitle: eventType,
        media,
      };
    },
  },
};

export const promo = {
  name: 'promo',
  title: 'Promotions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Package Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'offerDetail',
      title: 'Offer Detail',
      type: 'string',
      description: 'Brief summary of what is included',
    },
    {
      name: 'price',
      title: 'Price (£)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'image',
      title: 'Promo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'addOns',
      title: 'Add-ons / Menu Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'note',
      title: 'Note / Terms',
      type: 'string',
      description: 'e.g., "Travel cost not included. T&Cs apply."',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this promo',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      media: 'image',
      active: 'active',
    },
    prepare({ title, price, media, active }: any) {
      return {
        title: `${title} - £${price}`,
        subtitle: active ? '✓ Active' : '✗ Inactive',
        media,
      };
    },
  },
};

export const globalSettings = {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Disable create/delete
  fields: [
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code (e.g., +447000000000)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
};

// Export all schemas
export const schemaTypes = [
  heroImage,
  service,
  galleryItem,
  promo,
  globalSettings,
];
