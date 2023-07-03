import { lstatSync, readFileSync, readdirSync } from 'fs';
import path from 'path';
import { filter, reject, sortBy } from 'lodash';
import { isPast } from 'date-fns';
import matter from 'gray-matter';
import {
  Post,
  PostMeta,
  PostPredicate,
  PostRecord,
  PostReference,
} from '../types/Post';

const CONTENT_ROOT = path.join(process.cwd(), '_content');

/**
 * Prebuilt predicate for filtering published post references
 */
export const isPublishedPost = (value: any, index: number) => (
  value
  && value.meta.date
  && isPast(value.meta.date)
);

/**
 * Returns the post filenames for the given category
 */
const getPostFilenamesForCategory = (category: string): string[] => {
  const filenames = readdirSync(path.join(CONTENT_ROOT, category));
  const postFilenames = filenames.filter((filename: string) => (
    path.extname(filename) === '.mdx'
    && !filename.startsWith('.')
  ));

  return postFilenames;
};

/**
 * Get array of categories
 */
const getCategories = (): string[] => {
  const filenames = readdirSync(CONTENT_ROOT);
  const categories = filenames.filter((filename) => (
    lstatSync(path.join(CONTENT_ROOT, filename)).isDirectory()
    && !filename.startsWith('.')
  ));

  return categories;
  // return filenames.map((filename) => `/${postType}/${filename}`);
};

/**
 * Returns an array of post references
 */
export const getPostReferences = () => {
  const categories = getCategories();
  const postReferences: PostReference[] = [];

  categories.forEach((category) => {
    const postFilenames = getPostFilenamesForCategory(category);

    postFilenames.forEach((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const postReference = {
        category,
        slug,
        filepath: path.join(category, filename),
        permalink: path.join(category, slug),
      };

      postReferences.push(postReference);
    });
  });

  return postReferences;
};

/**
 * Builds the source for the given permalink
 */
export const getPostSource = (postReference: PostReference): string => {
  const { filepath } = postReference;
  const postFilePath = path.join(CONTENT_ROOT, filepath);
  const source = readFileSync(postFilePath, 'utf8');

  return source;
};

export const getPostReferenceFromPermalink = (permalink: string): PostReference => {
  const [category, slug] = permalink.split('/');

  return {
    category,
    slug,
    permalink,
    filepath: `${path.join(category, slug)}.mdx`,
  };
};

export const getPostByReference = (reference: PostReference): Post => {
  const source = getPostSource(reference);
  const { data, content } = matter(source);

  return {
    content,
    reference,
    meta: data as PostMeta,
  };
};

export const getPostByPermalink = (permalink: string): Post => {
  const postReference = getPostReferenceFromPermalink(permalink);

  return getPostByReference(postReference);
};

/**
 * Builds an array of static paths appropriate for next's `getStaticPaths` function
 */
export const buildStaticPaths = () => {
  const posts = getPostReferences()
    .map(getPostByReference)
    .filter(isPublishedPost);
  const paths = posts.map(({ reference: { permalink } }) => ({
    params: {
      permalink: permalink.split('/'),
    },
  }));

  return paths;
};
