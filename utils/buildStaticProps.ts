import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { getPostByPermalink } from './cms';

/**
 * Builds static props appropriate for next's getStaticProps
 */
export const buildStaticProps = async (permalink: string) => {
  const { content, meta } = getPostByPermalink(permalink);
  const staticData = {
    ...meta,
    date: (meta.date as Date).toISOString(),
  };
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    },
    scope: staticData,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: staticData,
    },
  };
};

export default buildStaticProps;
