import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All copy lives in src/content/<collection>/<lang>/*.md.
// Entry ids are "<lang>/<file>", e.g. "da/hero". Facts (addresses, phones, URLs, prices) live in src/data/site.ts.

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z.object({
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    // Photo slot: path under public/, e.g. /images/hero.jpg. Empty shows the placeholder.
    image: z.string().nullish().transform((v) => v || undefined),
    imageAlt: z.string().optional(),
    // Short labels used by individual sections.
    labels: z.record(z.string()).default({}),
    // Price rows (prices.md): id matches a key in brondbyPrices in src/data/site.ts.
    rows: z.array(z.object({ id: z.string(), service: z.string(), duration: z.string().optional() })).optional(),
  }),
});

const treatments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/treatments' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tone: z.enum(['siv', 'sand', 'bone']).default('bone'),
  }),
});

const clinics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clinics' }),
  schema: z.object({
    clinic: z.enum(['brondby', 'nykobing']),
    role: z.string(),
    intro: z.string().optional(),
    days: z.string().optional(),
    bookingLabel: z.string(),
    mapsLabel: z.string(),
    note: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    lead: z.string().optional(),
    image: z.string().nullish().transform((v) => v || undefined),
    imageAlt: z.string().optional(),
    labels: z.record(z.string()).default({}),
  }),
});

export const collections = { sections, treatments, clinics, pages };
