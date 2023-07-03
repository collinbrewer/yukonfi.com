import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import cn from 'classnames';
import logo from '../public/images/logo.png';
import Container from '../components/Container';

const sections: Array<any> = [
  // {
  //   name: 'The Basics',
  //   description: 'Get a better understanding of how to use your bank.',
  //   href: '/basics',
  //   icon: InboxIcon,
  // },
  // {
  //   name: 'Formulas',
  //   description: 'Learn the common playbooks used to throughout your IBC journey.',
  //   href: '/formulas',
  //   icon: AnnotationIcon,
  // },
  // {
  //   name: 'Tools & Calculators',
  //   description: "These are the tools we use ourselves, and with our clients.",
  //   href: '/tools',
  //   icon: ChatAlt2Icon,
  // },
  // {
  //   name: 'Resources',
  //   description: "Recommended resources for beating Arrival Syndrome.",
  //   href: '/resources',
  //   icon: QuestionMarkCircleIcon,
  // },
];

const aboutItems = [
  {
    name: 'The Mission',
    description: 'Our hope is to touch as many homes as we can.  Get to know us.',
    href: '/about',
  },
  {
    name: 'Our Process',
    description: 'We want to make your journey as clear as possible.  Let us tell you about it.',
    href: '/process',
  },
]

export default function Header() {
  return (
    <header>
      <Container>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center py-6 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
                    <span className="sr-only">YukonFi Capital Solutions</span>
                    YukonFi.
                  </h2>
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">

              {/*<Link href="/formulas" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Learn
              </Link>

              <Popover className="relative hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={cn(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      )}
                    >
                      <span>Learn</span>
                      <ChevronDownIcon
                        className={cn(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {sections.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                              >
                                <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-sky-600 to-blue-600 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>*/}

              {/*<Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>About</span>
                    <ChevronDownIcon
                      className={cn(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {aboutItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>*/}

              <Link href="/about">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
                  About Us
                </a>
              </Link>

              <Link href="/process">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
                  Our Process
                </a>
              </Link>

              <Link href="/contact">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
                  Contact
                </a>
              </Link>

              {/*<Link href="/search" className="text-base font-medium text-gray-500 hover:text-gray-900">
                <button type="button" className="hidden -my-1 ml-8 flex h-8 w-8 items-center justify-center rounded-lg focus-visible" data-focus-visible-added=""><span className="sr-only">Search components</span><svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-900 hover:fill-gray-900"><path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path></svg></button>
              </Link>*/}
            </Popover.Group>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/contact">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                  Request Funding
                </a>
              </Link>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-8"
                        width='40'
                        height='40'
                        src={logo}
                        alt="YukonFi Logo"
                        unoptimized
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {sections.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                        >
                          <div
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </div>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Home
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        About Us
                      </a>
                    </Link>
                    <Link href="/process">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Our Process
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Contact
                      </a>
                    </Link>
                    {/*<Link href="/search" className="hidden text-base font-medium text-gray-500 hover:text-gray-900">
                      Search
                    </Link>*/}
                  </div>
                  <div className="mt-6">
                    <Link href="/contact">
                      <a className="w-full flex items-center justify-center bg-gradient-to-r from-sky-600 to-blue-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-sky-700 hover:to-blue-700">
                        Request Funding
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Container>
    </header>
  );
};
