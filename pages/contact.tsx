import { useState } from 'react'
import PageLayout from '../components/PageLayout';
import { InlineWidget } from 'react-calendly';


function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Let's Talk</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            <strong>We're happy you're ready to take action.</strong>
            <div>Schedule your discovery call below, we're looking forward to meeting you.</div>
          </p>
        </div>
        <div className="mt-12 border">
          <InlineWidget
            url='https://calendly.com/getcommas/30min?hide_event_type_details=1&hide_gdpr_banner=1'
          />
        </div>
      </div>
    </div>
  )
}

const Contact = () => (
  <PageLayout>
    <Example />
  </PageLayout>
);

export default Contact;

