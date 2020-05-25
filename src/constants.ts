export default {
  URLS: {
    characters: 'https://rickandmortyapi.com/api/character',
    locations: 'https://rickandmortyapi.com/api/location',
    episodes: 'https://rickandmortyapi.com/api/episode',
  },

  filters: [
    {
      filterLabel: 'Filter by Gender',
      filterName: 'GenderFilter',
      values: ['Male', 'Female', 'unknown'],
    },
    {
      filterLabel: 'Filter by Status',
      filterName: 'StatusFilter',
      values: ['Alive', 'Dead', 'unknown'],
    },
    {
      filterLabel: 'Filter by Species',
      filterName: 'SpeciesFilter',
      values: ['Human', 'Mytholog', 'Alien', 'unknown'],
    },
  ],
};
