import isWeeknd from '.';

const spy = jest.spyOn(Date.prototype, 'getDay');

describe('weekend', () => {
  describe('if the day returned is 0 or 6', () => {
    let result;
    beforeAll(() => {
      spy.mockReturnValue(0);
      result = isWeeknd();
    });

    it('should return weekend', () => {
      expect(result).toEqual('weekend');
    });
  });

  describe('if the day returned is between 1 and 5', () => {
    let result;
    beforeAll(() => {
      spy.mockReturnValue(3);
      result = isWeeknd();
    });

    it('should return weekday', () => {
      expect(result).toEqual('weekday');
    });
  });
});
