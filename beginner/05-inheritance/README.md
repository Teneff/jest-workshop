# [Jest workshop](../../)

## [Beginner](../)

### Inheritance

> The module exports ES5 class Circle

### Usage

```js
import Circle, { Shape } from './circle';

const x = 1;
const y = 10;
const radius = 5

const circle = new Circle(x, y, radius);

circle.area() // 78.53981633974483
circle.move(+2, -2);
```

### To test
  - if the `new Circle(1, 10, 5)` is an object with the following properties
    - `{ x: 1, y: 10, r: 5}`
  - `circle.move(2, -2)` modifies the object to `{ x: 3, y: 8 }`
  - circle is instance of
    - Circle
    - Shape
  - `area()` ≈ 78.54


### Hints
  - use `expect()`[.toEqual()][1]
  - use `expect()`[.toBeInstanceOf()][2]
  - use `expect()`[.toBeCloseTo()][3]

### TO DO

> After writing the tests rewrite the classes using ES6 

[1]: https://jestjs.io/docs/en/expect#toequalvalue
[2]: https://jestjs.io/docs/en/expect#tobeinstanceofclass
[3]: https://jestjs.io/docs/en/expect#tobeclosetonumber-numdigits