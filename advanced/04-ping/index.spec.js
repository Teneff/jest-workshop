import Ping from '.';

global.fetch = jest.fn();

jest.useFakeTimers();

describe('ping', () => {
  const ping = new Ping();
  describe('after 30 seconds', () => {
    beforeAll(() => {
      fetch.mockClear();
      jest.advanceTimersByTime(30000);
    });

    it('should have called fetch 10 times', () => {
      expect(fetch).toHaveBeenCalledTimes(10);
    });
  });

  describe('after calling stop', () => {
    beforeAll(() => {
      fetch.mockClear();
      ping.stop();
      jest.advanceTimersByTime(30000);
    });

    it('should not call fetch anymore', () => {
      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
