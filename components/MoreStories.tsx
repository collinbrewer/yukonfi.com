import PostPreview from './PostPreview';
import { Post } from '../types/Post';

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Formulas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            author={post.meta.author}
            coverImage={post.meta.coverImage}
            date={post.meta.date}
            excerpt={post.meta.excerpt}
            key={post.reference.permalink}
            permalink={post.reference.permalink}
            title={post.meta.title}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories

