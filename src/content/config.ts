import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  // Type-check frontmatter using a schema
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    images: z.array(z.string()).optional(),
  }),
})

export const collections = {
  "blog": blog,
  "projects": projects
};
