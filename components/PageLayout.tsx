// import Alert from './alert'
import { useRouter } from 'next/router';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const PageLayout = ({ preview, children }: Props) => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout;

