import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY as string,
);

export default algoliaClient;
