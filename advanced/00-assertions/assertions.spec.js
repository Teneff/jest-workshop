describe('Jest Assertions', () => {
  describe('.toEqual', () => {
    it('can compare Strings', () => {
      const str = 'hello';
      expect(str).toEqual('hello');
    });

    it('can be used to compare numbers', () => {
      const num = 515;
      expect(num).toEqual(515);
    });

    it('can be used to deeply compare objects', () => {
      const obj = {
        hello: {
          world: {
            my: {
              name: {
                is: 'Stefan',
              },
            },
          },
        },
      };

      expect(obj).toEqual({
        hello: {
          world: {
            my: {
              name: {
                is: 'Stefan',
              },
            },
          },
        },
      });
    });

    it('can be used to depply comapre arrays', () => {
      const arr = [[[[[1, 2]]]]];
      expect(arr).toEqual([[[[[1, 2]]]]]);
    });
  });

  describe('.toBe', () => {
    describe('used for primitive values', () => {
      it('can be used to compare numbers', () => {
        const num = 3;
        expect(num).toBe(3);
      });

      it('can be used to compare stings', () => {
        const str = 'hello';
        expect(str).toEqual('hello');
      });

      it('can be used to check object instances', () => {
        const obj = {
          hello: 'world',
        };

        expect(obj).toBe(obj);
      });
    });
  });

  describe('.toContain', () => {
    it('can be used to check array containment', () => {
      const arr = [1, 4, 4, 5, 6];

      expect(arr).toContain(4);
    });

    it('can be used to check strings contents', () => {
      const str = 'Hello World!';

      expect(str).toContain('Hello');
    });
  });

  describe('.toThrow', () => {
    describe('with string', () => {
      function f() {
        // eslint-disable-next-line no-throw-literal
        throw 'error string';
      }

      it('can be used to check if a function throws', () => {
        expect(() => f()).toThrow();
      });

      it('can be used to check the string thrown', () => {
        expect(() => f()).toThrow('error string');
      });

      it('can be used to check string thrown with regex', () => {
        expect(() => f()).toThrow(/error \w+/);
      });
    });

    describe('with errors', () => {
      class CustomError extends Error {}

      function f() {
        throw new CustomError('Unexpected error');
      }

      it('can be used to expect the unexpected', () => {
        expect(() => f()).toThrow(CustomError);
      });

      it('can be used to match the message', () => {
        expect(() => f()).toThrow(CustomError, 'unexpected error');
      });
    });
  });

  describe('.toMatchSnapshot', () => {
    it('can be used to automatically craete snapshots and match the result', () => {
      const obj = {
        hello: {
          world: {
            here: {
              is: {
                a: {
                  number: 1123,
                },
              },
            },
          },
        },
      };

      expect(obj).toMatchSnapshot();
    });
  });

  describe('.toMatchInlineSnapshot', () => {
    it('can be used to automatically craete snapshots and match the result', () => {
      const obj = {
        hello: {
          world: {
            here: {
              is: {
                a: {
                  number: 1123,
                },
              },
            },
          },
        },
      };

      expect(obj).toMatchInlineSnapshot(`
        Object {
          "hello": Object {
            "world": Object {
              "here": Object {
                "is": Object {
                  "a": Object {
                    "number": 1123,
                  },
                },
              },
            },
          },
        }
      `);
    });
  });

  describe('.toHaveLength', () => {
    it('should be used to check length of a string', () => {
      expect('hello').toHaveLength(5);
    });

    it('should be used to check length of an Array', () => {
      expect([1, 2, 3, 4, 5]).toHaveLength(5);
    });
  });

  describe('.toHaveBeenCalled()', () => {
    const callback = jest.fn();

    it('should be used to check if function have been called', () => {
      callback();
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('.toHaveBeenCalledTimes()', () => {
    const fn = jest.fn();

    it('should been used to assert number of calls', () => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        fn();
      }

      expect(fn).toHaveBeenCalledTimes(5);
    });
  });

  describe('.toHaveBeenCalledWith()', () => {
    const fn = jest.fn();

    it('should be used to assert arguments', () => {
      fn(1, 3);
      expect(fn).toHaveBeenCalledWith(1, 3);
    });
  });

  describe('.toBeGreaterThan()', () => {
    it('should be used to check numbers', () => {
      const num = 10;
      expect(num).toBeGreaterThan(5);
    });
  });

  describe('.toBeLessThan', () => {
    it('should be used to check numbers', () => {
      const num = 5;
      expect(num).toBeLessThan(10);
    });
  });

  describe('.toHaveProperty', () => {
    const obj = {
      hello: {
        world: {
          here: {
            is: {
              a: {
                number: 10,
              },
            },
          },
        },
      },
    };

    expect(obj).toHaveProperty('hello.world.here.is.a.number', 10);
  });

  describe('.not', () => {
    describe('can be used to describe the opposite', () => {
      it('should be used with toContain', () => {
        expect('hello world').not.toContain('test');
      });

      it('should be used with toHaveBeenCalled', () => {
        const fn = jest.fn();
        expect(fn).not.toHaveBeenCalled();
      });
    });
  });
});
