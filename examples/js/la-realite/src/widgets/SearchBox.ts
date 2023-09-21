import { searchBox as searchBoxWidget } from 'instantsearch.js/es/widgets';

export const searchBox = searchBoxWidget({
  container: '[data-widget="searchbox"]',
  placeholder: 'Vidéos, catégories ou chaînes',
  showSubmit: false,
});
