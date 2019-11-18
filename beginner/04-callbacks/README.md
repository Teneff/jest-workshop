# [Jest workshop](../../)

## [Beginner](../)

### Callbacks

> The module exports a function accepting multiple callbacks. Only the **odd** functions will should be called. And will return the result of the concatenated strings

### Usage

```js
import callbacks from './callbacks'

callbacks(
  () => 'hello',
  () => 'greetings',
  () => 'human',
  () => 'guest',
  () => '!!!',
  () => '???',
); // hello human !!!

```

### To test
 - if the `callbacks` have been called with **less** than 5 arguments
   - `Error` is thrown
 - if the `callbacks` have been called with **more** than 5 arguments 
   - nothing is thrown
 - the above snippet retuns
   - `hello human !!!`
   - the even callbacks have **NOT** been called



### Hints
  - use [jest.fn()][1] for to create callback
  - `expect()`[.not][not][.toHaveBeenCalled][tohavebeencalled] to ensure mock function have/have not been called
  - use `expect(() => fn())`[.toThrow()][tothrow]

[1]: https://jestjs.io/docs/en/jest-object#jestfnimplementation
[not]: https://jestjs.io/docs/en/expect#not
[tohavebeencalled]: https://jestjs.io/docs/en/expect#tohavebeencalled
[tothrow]: https://jestjs.io/docs/en/expect#tothrowerror