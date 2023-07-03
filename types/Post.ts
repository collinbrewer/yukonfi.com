import Author from './Author';

export type PostPredicate = {
  status?: 'draft' | 'published',
};

export type PostReference = {
  category: string,
  filepath: string,
  permalink: string,
  slug: string,
};

export type PostMeta = {
  author: Author,
  category: string,
  coverImage: string,
  date: string | Date,
  description?: string,
  excerpt: string,
  ogImage: {
    url: string,
  },
  title: string,
};

export type PostRecord = {
  reference: PostReference,
  meta: PostMeta,
};

export type PostHit = PostRecord | {
  objectID: string,
};

export type Post = {
  reference: PostReference,
  meta: PostMeta,
  content: string,
}
