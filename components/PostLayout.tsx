import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from './Container';
import Header from './Header';
import PostTitle from './PostTitle';

type Props = {
  children?: any,
  customMeta?: any,
}

const PostLayout = ({ children, customMeta }: Props) => {
  const router = useRouter();

  // if (!router.isFallback && !customMeta?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <>
      <Head>
        <title>
          {customMeta.title}
        </title>
        {customMeta.ogImage && (
          <meta property="og:image" content={customMeta.ogImage.url} />
        )}
      </Head>

      <div className="min-h-screen">
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                {children}
              </article>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default PostLayout;
