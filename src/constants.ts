export default {
  URLS: {
    characters: 'https://rickandmortyapi.com/api/character',
    locations: 'https://rickandmortyapi.com/api/location',
    episodes: 'https://rickandmortyapi.com/api/episode',
  },

  filters: [
    {
      filterLabel: 'Filter by Gender',
      filterName: 'gender',
      values: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'unknown', value: 'unknown' },
        { label: 'All', value: 'All' },
      ],
    },
    {
      filterLabel: 'Filter by Status',
      filterName: 'status',
      values: [
        { label: 'Alive', value: 'Alive' },
        { label: 'Dead', value: 'Dead' },
        { label: 'unknown', value: 'unknown' },
        { label: 'All', value: 'All' },
      ],
    },
    {
      filterLabel: 'Filter by Species',
      filterName: 'species',
      values: [
        { label: 'Human', value: 'Human' },
        { label: 'Mytholog', value: 'Mytholog' },
        { label: 'Alien', value: 'Alien' },
        { label: 'unknown', value: 'unknown' },
        { label: 'All', value: 'All' },
      ],
    },
  ],

  InputTypes: {
    radio: 'radio',
    checkbox: 'checkbox',
    Radio: 'radio',
    CheckBox: 'checkbox',
  },
};
