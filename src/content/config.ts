import {defineCollection, z} from 'astro:content';

const projects = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        thumb: z.string(),
        img: z.string(),
        readtime: z.number(),
        author: z.string(),
        tags: z.array(z.string()),
        URL: z.string().url(),
        repoURL: z.string().url(),
        date: z.string(),
    }),
})

const posts = defineCollection({
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        thumb: z.string(),
        img: z.string(),
        readtime: z.number(),
        author: z.string(),
        tags: z.array(z.string()),
        date: z.string(),
    }),
})


export const collections = { projects, posts };