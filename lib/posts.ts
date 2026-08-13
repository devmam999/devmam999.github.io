export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

/** Empty until you add posts. Static export cannot include `app/blog/[slug]` with no params. Recreate that route when this array is non-empty. */
export const posts: Post[] = [];
