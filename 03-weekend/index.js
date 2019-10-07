export default () => (
  [0, 6].includes(new Date().getDay())
    ? 'weekend'
    : 'weekday'
);
