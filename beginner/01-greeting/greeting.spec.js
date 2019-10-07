import greeting from './greeting';

describe('greeting', () => {
  describe('without given name', () => {
    let result;
    beforeAll(() => {
      result = greeting();
    });

    it('should greet Guest', () => {
      expect(result).toEqual('Grettings, Guest!');
    });
  });

  describe('with given name', () => {
    let result;
    beforeAll(() => {
      result = greeting('Human');
    });

    it('should greet the given name', () => {
      expect(result).toEqual('Grettings, Human!');
    });
  });
});
