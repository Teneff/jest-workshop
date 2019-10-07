import server from 'server';
import Controller from '.';

jest.mock(
  'server',
  () => ({
    exports: jest.fn(() => ({})),
    middleware: {
      https: jest.fn(),
    },
    // ...mockMethods,
    get: jest.fn(),
    post: jest.fn(),
  }),
  {
    virtual: true,
  },
);

jest.mock('*/cartridge/scripts/middleware/csrf', () => jest.fn(), {
  virtual: true,
});
jest.mock('*/cartridge/scripts/middleware/userLoggedIn', () => jest.fn(), {
  virtual: true,
});
jest.mock('*/cartridge/scripts/middleware/consentTracking', () => jest.fn(), {
  virtual: true,
});

const res = {
  json: jest.fn(),
  render: jest.fn(),
};

describe('SFRA Controller', () => {
  describe.each([
    ['get'],
    ['post'],
  ])('metod %s', (method) => {
    // expect(server.get.mock.calls).toEqual('z');

    it.each(server[method].mock.calls)(
      'should be called with middleware.https',
      (...args) => {
        expect(args).toEqual(
          expect.arrayContaining([server.middleware.https]),
        );
      },
    );
  });

  describe('server.exports()', () => {
    it('should be called once', () => {
      expect(server.exports).toHaveBeenCalledTimes(1);
    });

    it('should be exported', () => {
      const [firstResult] = server.exports.mock.results;
      expect(firstResult.value).toBe(Controller);
    });
  });

  describe('GET Controller-Start', () => {
    const [controller] = server.get.mock.calls.find(([name]) => name === 'Start').slice(-1);
    const next = jest.fn();
    const req = {};

    beforeAll(() => {
      Object.values(res).map((mockFn) => mockFn.mockClear());
      controller(req, res, next);
    });

    it('should call res.json', () => {
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('GET Controller-Show', () => {
    const [controller] = server.get.mock.calls.find(([name]) => name === 'Show').slice(-1);
    const req = {};

    beforeAll(() => {
      Object.values(res).map((mockFn) => mockFn.mockClear());
      controller(req, res);
    });

    it('should render a template', () => {
      expect(res.render).toHaveBeenCalledWith(
        'account/accountDashboard',
        expect.objectContaining({
          account: 'accountModel',
          accountlanding: true,
          breadcrumbs: expect.any(Array),
          reportingURLs: expect.any(Array),
        }),
      );
    });
  });

  describe('GET Controller-LineItem', () => {
    const [controller] = server.get.mock.calls.find(([name]) => name === 'LineItem').slice(-1);
    const req = {};

    beforeAll(() => {
      controller(req, res);
    });

    it('should set json response', () => {
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.stringContaining('mock-identifier'),
        }),
      );
    });
  });

  describe('POST Controller-Show', () => {
    const [controller] = server.post.mock.calls.find(([name]) => name === 'Show').slice(-1);

    describe('requesting HTML', () => {
      const req = {
        headers: {
          Accept: 'text/*, text/html, text/html;level=1, */*',
        },
      };
      const next = jest.fn();

      beforeAll(() => {
        Object.values(res).map((mockFn) => mockFn.mockClear());
        controller(req, res, next);
      });

      it('should call res.render', () => {
        expect(res.render).toHaveBeenCalledWith(
          expect.any(String),
          expect.any(Object),
        );
      });

      it('should not call res.json', () => {
        expect(res.json).not.toHaveBeenCalled();
      });

      it('should call next only once', () => {
        expect(next).toHaveBeenCalledTimes(1);
      });
    });

    describe('requesting JSON', () => {
      const req = {
        headers: {
          Accept: 'text/plain; */*',
        },
      };
      const next = jest.fn();

      beforeAll(() => {
        Object.values(res).map((mockFn) => mockFn.mockClear());
        controller(req, res, next);
      });

      it('should call res.json', () => {
        expect(res.json).toHaveBeenCalledWith(
          expect.any(Object),
        );
      });

      it('should not call res.render', () => {
        expect(res.render).not.toHaveBeenCalled();
      });

      it('should call next only once', () => {
        expect(next).toHaveBeenCalledTimes(1);
      });
    });
  });
});
