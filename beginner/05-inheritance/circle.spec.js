import Circle, { Shape } from './circle';

describe('Circle', () => {
  let circle;
  describe('constructor', () => {
    beforeAll(() => {
      circle = new Circle(1, 10, 5);
    });

    it('should equal the following object', () => {
      expect(circle).toEqual(
        expect.objectContaining({
          x: 1,
          y: 10,
          r: 5,
        }),
      );
    });

    it('should be a Circle', () => {
      expect(circle).toBeInstanceOf(Circle);
    });

    it('should also be a Shape', () => {
      expect(circle).toBeInstanceOf(Shape);
    });
  });

  describe('move', () => {
    beforeAll(() => {
      circle.move(2, -2);
    });

    it('should change the coordinates', () => {
      expect(circle).toEqual(
        expect.objectContaining({
          x: 3,
          y: 8,
        }),
      );
    });
  });

  describe('area', () => {
    let area;
    beforeAll(() => {
      area = circle.area();
    });

    it('should be close to 78.54', () => {
      expect(area).toBeCloseTo(78.54);
    });
  });
});
