interface Option {
  text: string;
  value: string;
}

const GENRES: Option[] = [
  {
    text: 'All genres',
    value: '',
  },
  {
    text: 'Action',
    value: 'Action',
  },
  {
    text: 'Animation',
    value: 'Animation',
  },
  {
    text: 'Comedy',
    value: 'Comedy',
  },
  {
    text: 'Adventure',
    value: 'Adventure',
  },
  {
    text: 'Fantasy',
    value: 'Fantasy',
  },
];

export default GENRES;
