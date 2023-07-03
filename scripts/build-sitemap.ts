import path from 'path';
import { writeFileSync } from 'fs';
import {
  getPostReferences,
  getPostByReference,
  isPublishedPost,
} from '../utils/cms';
import { Post } from '../types/Post';
import glob from 'fast-glob';

const ignorePages = [
  '_*',
  '[*',
];

const getPermalinkFromRoute = (route: string) => {
  const { dir, name } = path.parse(route);

  return path
    .join(dir, name)
    .replace(/\/index$/, '');
};

const getPages = async () => {
  const pagesRoot = path.join(process.cwd(), 'pages');
  const pages = await glob(['**/*'], {
    cwd: pagesRoot,
    ignore: ignorePages,
  });

  return pages.map(getPermalinkFromRoute);
};

const buildSiteMap = (permalinks: string[]) => (
  `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${permalinks
       .map((permalink) => {
         return `
         <url>
             <loc>${`https://getcommas.com/${permalink}`}</loc>
         </url>`;
       })
       .join('')}
   </urlset>
 `
);

const generateSiteMap = async () => {
  const posts = getPostReferences()
    .map(getPostByReference)
    .filter(isPublishedPost)
    .map((post) => post.reference.permalink);
  const pages = await getPages();
  const sitemap = buildSiteMap([
    ...posts,
    ...pages,
  ]);

   // writes sitemap.xml to public directory
    const path = `${process.cwd()}/public/sitemap.xml`;

  writeFileSync(path, sitemap, "utf8");
};

generateSiteMap()
  .then(() => console.log('generated sitemap'))
  .catch(console.error);
