import conditionalCaller from '.';

const callback = jest.fn();

describe('conditional calls', () => {
  const table = [
    [true, true, true, true, 'hide'],
    [false, true, true, true, 'hide'],
    [false, false, true, true, 'show'],
    [false, false, false, true, 'show'],
    [false, false, false, false, 'show'],
    [true, true, false, false, 'hide'],
  ];

  describe.each(table)(
    'with %s %s %s %s',
    (savedAmf, amf, amf2, preferencesConsent2, expected) => {
      beforeEach(() => {
        callback.mockClear();
      });

      it(`should call the callback with "${expected}"`, () => {
        conditionalCaller(callback, savedAmf, amf, amf2, preferencesConsent2);
        expect(callback).toHaveBeenCalledWith(expected);
      });
    },
  );
});
