export default (...args) => {
  if (args.length < 5) {
    throw new Error('must provide at least 5 callbacks');
  }
  return args
    .filter((_, i) => !(i % 2))
    .map((f) => f())
    .join(' ');
};
