import Link from 'next/link';
import Avatar from './Avatar'
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import Author from '../types/Author';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  permalink: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  permalink,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} permalink={permalink} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={permalink}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
};

export default HeroPost

