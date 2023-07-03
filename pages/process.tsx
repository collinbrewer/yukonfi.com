import Link from 'next/link';
import Container from '../components/Container';
import PageLayout from '../components/PageLayout';

const Index = () => (
  <>
    <PageLayout>
      <Container>
        <div className="text-lg max-w-prose mx-auto mt-24 mb-12">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Get Comfortable
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Process
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Along every step of the way, it is our goal to provide a transparent, and well-defined process.  We're on this journey together, and together we'll go far.
          </p>
        </div>

        <div className="mt-6 mb-16 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mr-4">
              01
            </div>
            <h2 className="my-0">Send a funding request</h2>
          </div>
          <p>We believe in human-interaction and ongoing relationships, and it's important to us that we get to know you.  After you send a funding request, we start our journey together with a discovery call to discuss your deal.</p>
          <p>Once we've gotten to know eachother, and discussed your deal, our team will go the drawing board to draft up a strategy for your needs.</p>
        </div>

        <div className="mt-6 mb-16 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mr-4">
              02
            </div>
            <h2 className="my-0">Strategy & Design</h2>
          </div>
          <p>
            Once we know the details of your deal, we work quickly to evaluate your needs, and provide a solution.
          </p>
        </div>

        <div className="mt-6 mb-16 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mr-4">
              03
            </div>
            <h2 className="my-0">Lift Off</h2>
          </div>
          <p>
            At this point, we'll provide a funding agreement, wire funds, and you can get to work.
          </p>
        </div>

        <div className="mt-6 mb-16 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mr-4">
              04
            </div>
            <h2 className="my-0">Elevate</h2>
          </div>
          <p>
            Once we close on a project, we want to continue to support your capital needs.
          </p>
          <p>
            We're here to share what we've learned, and proivde the capital, and confidence to continue doing deals again, and again.
          </p>
        </div>

        <hr />

        <div className="mt-6 mb-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          <h2>What's Next?</h2>
          We feel we wouldn't be standing true to our core values if we didn't leave you with a parting action step, so here they are:
          <ol>
            <li>Make a decision on if we're right for you</li>
            <li>Take action, and <Link href='/contact'>schedule a call</Link></li>
          </ol>
        </div>

        <hr />

      </Container>
    </PageLayout>
  </>
);

export default Index;
