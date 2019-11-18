# [Jest workshop](../../)

## [Beginner](../)

### Greeting

> Module exports function accepting string and returning string

### Usage
```js
import greeting from './greeting';

greeting('Human');
```

### To test 

  - if **NOT** given a name returns
    - `Hello, Guest!`
  - if given a name returns
    - `Hello, [name]!`


### Hint 
  - use [expect().toEqual()][1]

[1]: https://jestjs.io/docs/en/expect#toequalvalue