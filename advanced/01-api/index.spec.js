import api from '.';

const locale = 'en_US';

describe('api', () => {
  describe('products', () => {
    let products;
    beforeAll(async () => {
      products = await api({ locale }).products();
    });

    it('should return 5 products', () => {
      expect(products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            country: 'US',
            language: 'en',
          }),
        ]),
      );

      expect(products).toHaveLength(5);
    });
  });

  describe('without locale', () => {
    let products;
    beforeAll(async () => {
      products = await api().products();
    });

    it('should return objects with default locale', () => {
      expect(products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            country: 'MK',
            language: 'bg',
          }),
        ]),
      );

      expect(products).toHaveLength(5);
    });
  });
});
