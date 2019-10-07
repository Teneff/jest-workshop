import nested from './nested';

describe('nested objects', () => {
  const object = nested(42);
  it('should have the following path', () => {
    expect(object).toHaveProperty('the.answer.to.the.ultimate.question.of.life.universe.and.everything', 42);
  });
});
