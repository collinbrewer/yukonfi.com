import Link from 'next/link'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import Author from '../types/Author'

type Props = {
  author: Author
  coverImage: string
  date: string | Date
  excerpt: string
  permalink: string,
  title: string
}

const PostPreview = ({
  author,
  coverImage,
  date,
  excerpt,
  permalink,
  title,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage permalink={permalink} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={permalink}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date as string} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}

export default PostPreview;
