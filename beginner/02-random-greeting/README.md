# [Jest workshop](../../)

## [Beginner](../)

### Random greeting

The module exports a function which retuns string besed on the current hour

### Usage
```js
import greeting from './greeting';

greeting('Human');
```

### To test
- if between 5:00 and 11:00 returns
  - `Good morning, [name]!`
  - `Good morning, Guest!`
- if between 13:00 and 17:00 returns
  - `Good afternoon, Guest!`
  - `Good afternoon, [name]!`
- if between 17:00 and 22:00 returns
  - `Good evening, [name]!`
  - `Good evening, Guest!`
- otherwise it always retuns
  - `Hello, [name]!`
  - `Hello, Guest!`


Hints:
  - use [jest.spyOn][spy] 

```js
  const spy = jest.spyOn(Date.prototype, 'getHours');
  spy.mockReturnValue(22);
```


  [spy]: https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname