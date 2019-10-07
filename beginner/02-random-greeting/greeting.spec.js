import greeting from './greeting';

describe('random greeting', () => {
  beforeAll(() => {
    jest.spyOn(Date.prototype, 'getHours');
  });

  describe.each([...Array(24).keys()])('at %d:00', (hours) => {
    beforeAll(() => {
      Date.prototype.getHours.mockReturnValue(hours);
    });

    describe('without given name', () => {
      it('should greet the guest', () => {
        expect(greeting()).toMatchSnapshot();
      });
    });

    describe('with given name', () => {
      it('should greet the user', () => {
        expect(greeting()).toMatchSnapshot();
      });
    });
  });
});
