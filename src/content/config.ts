import { z, defineCollection } from 'astro:content';

const tasteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(), // MANDATORY field to avoid InvalidContentEntryDataError
    location: z.string().optional(),
    rating: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const screenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(), // MANDATORY field
    status: z.string().optional(),
    genre: z.string().optional(),
    rating: z.string().optional(),
  }),
});

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(), // MANDATORY field
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'taste': tasteCollection,
  'screen': screenCollection,
  'thoughts': thoughtsCollection,
};
