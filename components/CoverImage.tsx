import cn from 'classnames';
import Link from 'next/link';

type Props = {
  title: string
  src: string
  permalink?: string
};

const CoverImage = ({ title, src, permalink }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': permalink,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {permalink ? (
        <Link href={permalink}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

