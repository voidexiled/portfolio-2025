import { defineCollection, z } from "astro:content";

const projectStatus = z.enum([
  "active",
  "in-progress",
  "experimental",
  "unpublished",
  "archived",
]);

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      portfolioCopy: z.string().optional(),
      cvCopy: z.string().optional(),
      thumb: z.string(),
      hero: z.string().optional(),
      // Legacy fields retained until project content and consumers migrate.
      img: z.string().optional(),
      readtime: z.number().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()),
      URL: z.string().url().optional(),
      liveURL: z.string().url().optional(),
      repoURL: z.string().url().optional(),
      date: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().int().nonnegative().optional(),
      status: projectStatus.optional(),
    }),
});

const posts = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumb: z.string(),
      img: z.string(),
      readtime: z.number(),
      author: z.string(),
      tags: z.array(z.string()),
      date: z.string(),
    }),
});

export const collections = { projects, posts };
