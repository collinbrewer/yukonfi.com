import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '../types/Post';

const SearchHits = ({ hit }: {
  hit: Post,
}) => (
  <ul role="list" className="divide-y divide-gray-200">
    <li>
      <Link href={hit.reference.permalink} className="block hover:bg-gray-50">
        <a>
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-blue-600 truncate">
                {hit.meta.title}
              </div>
              <div className="ml-2 flex-shrink-0 flex">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {hit.reference.category}
                </span>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="sm:flex">
                <div className="mr-6 flex items-center text-sm text-gray-500">
                  {hit.meta.excerpt}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {format(new Date(hit.meta.date), 'MMMM d, yyyy')}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  </ul>
);

export default SearchHits;
