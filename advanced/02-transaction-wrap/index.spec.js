import RemoveAllHolds from '.';

const Transaction = require('dw/system/Transaction');

jest.mock('dw');
let productLineItems;
const omItemHoldGuidSetter = jest.fn();

beforeAll(() => {
  const getCustom = jest.fn(() => {
    const custom = {};
    Object.defineProperty(custom, 'omItemHoldGuid', {
      set: omItemHoldGuidSetter,
    });
    return custom;
  });

  productLineItems = (new Array(5)).fill().map(() => ({
    getCustom,
  }));
});

describe('RemoveAllHolds', () => {
  describe('given a list of productLineItems', () => {
    beforeAll(() => {
      RemoveAllHolds(productLineItems);
    });

    it('should set customs` omItemHoldGuid to null', () => {
      expect(omItemHoldGuidSetter).toHaveBeenCalledTimes(
        productLineItems.length,
      );
    });

    it('should set productLineItems` custom to null for each item', () => {
      expect(omItemHoldGuidSetter.mock.calls).toEqual(
        expect.arrayContaining([[null]]),
      );
    });
  });

  describe('if setting Transaction.wrap throws an Error', () => {
    beforeAll(() => {
      Transaction.wrap
        .mockImplementationOnce(() => {
          throw new Error('Unable to set property');
        })
        .mockImplementationOnce(() => {
          throw new Error('Unexpected error');
        });

      RemoveAllHolds(productLineItems);
    });

    it('should not set failed=true and error=String', () => {
      expect(productLineItems).toEqual([
        expect.objectContaining({
          failed: true,
          error: expect.any(String),
        }),
        expect.objectContaining({
          failed: true,
          error: expect.any(String),
        }),
        expect.not.objectContaining({
          failed: true,
        }),
        expect.not.objectContaining({
          failed: true,
        }),
        expect.not.objectContaining({
          failed: true,
        }),
      ]);
    });
  });
});
