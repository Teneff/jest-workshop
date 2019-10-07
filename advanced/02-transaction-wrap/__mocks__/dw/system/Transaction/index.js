module.exports = {
  wrap: jest.fn((func) => {
    func();
  }),
};
