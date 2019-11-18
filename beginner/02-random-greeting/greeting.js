export default function greeting(name = 'Guest') {
  const Greetings = [
    {
      phrase: `Good morning, ${name}!`,
      from: 5,
      to: 11,
    },
    {
      phrase: `Good afternoon, ${name}!`,
      from: 13,
      to: 17,
    },
    {
      phrase: `Good evening, ${name}!`,
      from: 17,
      to: 22,
    },
    {
      phrase: `Hello, ${name}!`,
      from: 0,
      to: 24,
    },
  ];
  const hours = new Date().getHours();
  const { phrase } = Greetings.find(
    ({ from, to }) => from <= hours && hours <= to,
  );
  return phrase;
}
