import Link from 'next/link';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import Container from '../components/Container';
import PageLayout from '../components/PageLayout';

const Hero = () => (
  <div className="lg:relative">
    <Container>
      <div className="mx-auto pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              Say "yes" to the deal with confidence
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            We provide capital solutions to real estate investors, developers, and business owners.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/contact">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Request Funding
                </a>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="#steps">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 cursor-pointer">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

const features = [
  {
    name: 'Earnest Money Deposits',
    description: 'We empower investors by providing access to the funds you need to make an earnest money deposit.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Double Closing Funds',
    description: 'For investors who need to close on a property before selling it, we provide the funds to make that happen.',
    icon: LockClosedIcon,
  },
  {
    name: 'Loan Sponsorship',
    description: 'Qualifying investors can receive a loan sponsorship to help them qualify for a loan.',
    icon: CogIcon,
  },
  {
    name: 'Payroll Funding',
    description: 'Timing your cash flow is tricky business.  We provide the funds to keep your business humming.',
    icon: CogIcon,
  },
  {
    name: 'Proof of Funds',
    description: 'We provide proof of funds letters to help you secure the deal.',
    icon: RefreshIcon,
  },
  {
    name: 'Let\'s get creative',
    description: 'We pride ourselves on providing capital when when other lenders won\'t.',
    icon: RefreshIcon,
  },
]

const StepsFeature = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32" id='steps'>
    <Container>
      <div className="mx-auto text-center">
        <h2
          className="text-base font-semibold uppercase tracking-wider text-blue-600"
        >
          Available Solutions
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Say "yes" to the deal with confidence
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We provide the transactional funding you need to make the deal happen.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </div>
);

const audienceFeatures = [
  {
    name: 'Business Owners',
    description: 'You know that cash flow is the life-blood of your business.',
    icon: ScaleIcon,
  },
  {
    name: 'Real-estate Investors',
    description: 'Access to capital when opportunity comes knocking.',
    icon: LightningBoltIcon,
  },
  {
    name: 'SMB Investors',
    description: 'We work with buyers, and sellers to ensure a smooth transaction.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Who are you?',
    description: (
      <>
        We love to test our imagination.  <Link href='/contact'><a className='text-blue-600'>Let's talk</a></Link> and get creative.
      </>
    ),
    icon: MailIcon,
  },
]

const AudienceFeature = () => (
  <div className="py-32 bg-gray-50 overflow-hidden">
    <Container>
      <div className="relative mx-auto py-12">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              No matter your walk of life,
              <span className="text-blue-600">we can help</span>
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {audienceFeatures.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  </div>
);

const processFeatures = [
  {
    name: 'Send a funding request',
    description: 'Tell us about your capital needs, and your deal.',
  },
  {
    name: 'Strategy & Design',
    description: 'We work quickly to understand your needs, and provide a solution.',
  },
  {
    name: 'Lift Off',
    description: 'We provide an agreement, wire funds, and you can get to work.',
  },
  {
    name: 'Elevate',
    description: 'We love repeat relationships, we\'ll be a phone call away for your next deal.',
  },
];

const ProcessFeature = () => (
  <div className="py-32 bg-white">
    <Container>
      <div className="mx-auto text-left mb-12">
        <h2
          className="text-base font-semibold uppercase tracking-wider text-blue-600"
        >
          A Clear Path
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We go further together
        </p>
        <p className="mt-5 max-w-prose text-xl text-gray-500">
          A simple process for fast funding.
        </p>
      </div>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
        {processFeatures.map((feature, i) => (
          <div key={feature.name}>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                0{i+1}
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link href="/contact">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Request Funding
            </a>
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 hidden">
          <Link href="/process">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 cursor-pointer">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </Container>
  </div>
);

const CTA = () => (
  <div className="bg-blue-700">
    <Container>
      <div className="text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Don't let lack of funding prevent</span>
          <span className="block">your deal, we're here to help.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Tell us about your deal, and we'll tell you how we can help.
        </p>
        <Link href='/contact'>
          <a
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Contact Us
          </a>
        </Link>
      </div>
    </Container>
  </div>
);

const Index = () => (
  <>
    <PageLayout>
      <Hero />
      <StepsFeature />
      <AudienceFeature />
      <ProcessFeature />
      <CTA />
    </PageLayout>
  </>
);

export default Index;
