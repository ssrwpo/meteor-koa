Package.describe({
  name: 'ssrwpo:meteor-koa',
  version: '0.1.0',
  summary: 'Koa next generation web framework with Meteor',
  git: 'https://github.com/ssr-server/meteor-koa',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.use('tmeasday:check-npm-versions@0.3.1');

  api.use('webapp', 'server');
  api.use('meteor');

  api.mainModule('meteor-koa.js', 'server');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//
//   api.use('webapp', 'server');
//
//   api.use('practicalmeteor:mocha');
//   api.use('practicalmeteor:chai');
//
//   api.use('meteor-koa');
//   api.use('meteor-koa-testing');
//
//   api.mainModule('meteor-koa-tests.js', 'server');
// });
