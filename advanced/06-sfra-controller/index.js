/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const server = require('server');

const csrfProtection = require('*/cartridge/scripts/middleware/csrf');
const userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
const consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
  'Start',
  server.middleware.https,
  userLoggedIn.validateLoggedIn,
  consentTracking.consent,
  function (req, res, next) {
    res.json({});
    next();
  },
);

server.get(
  'Show',
  csrfProtection,
  userLoggedIn.validateLoggedIn,
  server.middleware.https,
  consentTracking.consent,
  function (req, res) {
    res.render('account/accountDashboard', {
      account: 'accountModel',
      accountlanding: true,
      breadcrumbs: [
        {
          htmlValue: 'global.home',
          url: 'http://example.com/home',
        },
      ],
      reportingURLs: [],
    });
  },
);

server.post(
  'Show',
  userLoggedIn.validateLoggedIn,
  server.middleware.https,
  function (req, res, next) {
    const { headers: { Accept } } = req;

    const data = {
      id: 'mock-object-001',
    };

    if (
      Accept.split(',')
        .map((x) => x.trim())
        .includes('text/html')
    ) {
      res.render('template', data);
      return next();
    }

    res.json(data);
    return next();
  },
);

server.get(
  'LineItem',
  userLoggedIn.validateLoggedIn,
  server.middleware.https,
  function (req, res) {
    res.json({
      id: 'mock-identifier-01',
    });
  },
);

module.exports = server.exports();
