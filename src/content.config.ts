import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
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
