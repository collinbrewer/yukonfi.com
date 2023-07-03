import algoliaClient from '../utils/algoliaClient';
import {
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
} from 'react-instantsearch-hooks-web';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import SearchHit from './SearchHit';

export default function Search() {
  return (
    <>
      <InstantSearch 
        searchClient={algoliaClient} 
        indexName='getcommas.com'>
        <SearchBox
          placeholder='Search'
          submitIconComponent={() => (
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
          classNames={{
            root: "mb-5 relative z-0 flex-1 flex items-center justify-center sm:inset-0",
            form: 'relative w-full',
            submit: 'pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center',
            input: 'block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
            resetIcon: 'hidden',
          }}
        />
        <Hits hitComponent={SearchHit} />
        <Pagination
          classNames={{
            root: 'flex items-center justify-center sm:px-0',
            list: 'relative z-0 inline-flex rounded-md shadow-sm -space-x-px',
            item: 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700',
          }}
        />
      </InstantSearch>
    </>
  );
}
