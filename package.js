Package.describe({
  name: 'meteor-koa',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Koa next generation web framework for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ssr-server/meteor-koa',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  koa: '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');

  api.use('webapp', 'server');
  api.use('meteor');

  api.mainModule('meteor-koa.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-koa');
  api.mainModule('meteor-koa-tests.js');
});