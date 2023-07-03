import { PostMeta } from './Post';

export interface MetaProps
  extends Pick<PostMeta, 'date' | 'description' | 'coverImage' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
