import Link from 'next/link';

export default function FormulaCTA() {
  return (
    <div className="bg-indigo-700 mt-32 rounded-3xl">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Need help with this formula?</span>
          <span className="block">
            We're here for you.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          If this all <em>sounds</em> good, but you're a little confused on some of the terminology, or how it all comes together, we totally understand.  We're here to help, all you have to do is...
        </p>
        <Link href="/contact">
          <a
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Request Funding
          </a>
        </Link>
      </div>
    </div>
  )
}
