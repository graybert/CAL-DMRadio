import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    speaker: z.string(),
    venue: z.string(),
    location: z.string().optional(),
    abstract: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
    upcoming: z.boolean().default(false),
  }),
});

export const collections = { news, talks };
