import { liteClient as algoliasearch } from 'algoliasearch/lite';

const appId = import.meta.env.VITE_ALGOLIA_APP_ID;
const searchKey = import.meta.env.VITE_ALGOLIA_SEARCH_KEY;

// Only initialize if keys are present
export const searchClient = (appId && searchKey) 
  ? algoliasearch(appId, searchKey) 
  : null;

/**
 * In a real MNC environment, the `<SearchModal>` would be wrapped in:
 * <InstantSearch searchClient={searchClient} indexName="veluno_content">
 *   <CustomSearchBox />
 *   <CustomHits />
 * </InstantSearch>
 */
