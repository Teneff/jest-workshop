# [Jest][jest] workshop

## Topics

- [CLI](#cli)
- [Setup and Teardown](#setup-and-teardown)
- [Assertions](#assertions)
- [Mock functions](#mock-functions)
- [Debuggin with VSCode](#debuging-with-vscode)

## Tasks

- [Beginner](./beginner)

- [Advanced](./advanced)

## CLI

- `--help`
- `--verbose`
- `--coverage`
- `--onlyChanged, -o`
- `--watch`
- `--watchAll`
- interactive menu

## Setup and Teardown

- describe
- it / test
- beforeAll / afterAll
- beforeEach / afterEach
- async / await
- only / skip / xit

## Assertions

- .toEqual(`value`)
  - expect.arrayContaining(`array`)
  - expect.objectContaining(`object`)
  - expect.any(`constructor`)
- .toBe(`value`)
- .toContain(`item: Array | string`)
- .toThrow(`error?`)
- .toMatchSnapshot()
- .toHaveLength(`number`)
- .toHaveBeenCalled()
- .toHaveBeenCalledTimes(`number`)
- .toHaveBeenCalledWith(`arg1, arg2, ...`)
- .toBeGreaterThan(`number`) / .toBeGreaterThanOrEqual(`number`)
- .toBeLessThan(`number`) / .toBeLessThanOrEqual(`number`)
- .toHaveProperty(`keyPath: string | Array, value?`)
- .not
- .resolves
- .rejects
- async/await
- [Complete List][expect]

## Mock functions

- jest.fn(`implementation?`)
  - .mockImplementation()
  - .mockReturnValue()
  - .mockResolvedValue()
  - .mockRejectedValue()
- `__mocks__`
- jest.mock()
  - virtual: true
- jest.genMockFromModule(`moduleName`)
- jest.spyOn(`object, methodName`)

## Debuging with VSCode

- running the tests with VSCode debugger
- only the current folder
- only changed since last commit

[jest]: https://jestjs.io
[expect]: https://jestjs.io/docs/en/expect
