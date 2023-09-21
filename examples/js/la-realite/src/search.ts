import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { singleIndex } from 'instantsearch.js/es/lib/stateMappings';

import {
  articles,
  createAuthors,
  createClearFilters,
  createDates,
  configuration,
  searchBox,
  createSelectedTopics,
  stats,
  topics,
  seeResults,
} from './widgets';

const searchClient = algoliasearch(
  'JY11EW4K9B',
  'c8033a0c024e05ddc74c9f2e98bdce13'
);

const search = instantsearch({
  searchClient,
  indexName: 'yt-dlp',
  routing: {
    stateMapping: singleIndex('yt-dlp'),
  },
  insights: true,
});

const datesDesktop = createDates({
  container: '[data-widget="dates-desktop"]',
  header: 'Date',
});
const datesMobile = createDates({
  container: '[data-widget="dates-mobile"]',
  header: 'Date',
});
const selectedTopicsDesktop = createSelectedTopics({
  container: '[data-widget="selected-topics-desktop"]',
});
const selectedTopicsMobile = createSelectedTopics({
  container: '[data-widget="selected-topics-mobile"]',
});
const clearFiltersDesktop = createClearFilters({
  container: '[data-widget="clear-filters-desktop"]',
});
const clearFiltersMobile = createClearFilters({
  container: '[data-widget="clear-filters-mobile"]',
});
const authorsDesktop = createAuthors({
  container: '[data-widget="categories-desktop"]',
});
const authorsMobile = createAuthors({
  container: '[data-widget="categories-mobile"]',
});

search.addWidgets([
  articles,
  authorsDesktop,
  authorsMobile,
  clearFiltersMobile,
  clearFiltersDesktop,
  configuration,
  datesDesktop,
  datesMobile,
  searchBox,
  selectedTopicsMobile,
  selectedTopicsDesktop,
  stats,
  topics,
  seeResults,
]);

export default search;
