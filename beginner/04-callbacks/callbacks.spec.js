import callbacks from './callbacks';

describe('callbacks', () => {
  describe('with less than 5 arguments', () => {
    it('should throw an Error', () => {
      expect(() => callbacks()).toThrow(Error);
    });
  });

  describe('snippet', () => {
    let result;
    const even = jest.fn();
    beforeAll(() => {
      result = callbacks(
        () => 'hello',
        even,
        () => 'human',
        even,
        () => '!!!',
        even,
      );
    });

    it('should result "hello human !!!"', () => {
      expect(result).toEqual('hello human !!!');
    });

    it('should not call the even callbacks', () => {
      expect(even).not.toHaveBeenCalled();
    });
  });
});
