# [Jest workshop](../../)

## [Beginner](../)

### Nested objects

The module exports a function which retuns nested objects

### Usage

```js
import nested from 'nested';

nested(42);
```

### To test

- if the retuned object has property path
  - `the.answer.to.the.ultimate.question.of.life.universe.and.everything`
  - if the value is the given number

### Hints
  - use .[toHaveProperty()][1]


[1]: https://jestjs.io/docs/en/expect#tohavepropertykeypath-value