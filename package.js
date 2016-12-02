Package.describe({
  name: 'ssrwpo:meteor-koa',
  version: '0.1.0',
  summary: 'Koa next generation web framework with Meteor',
  git: 'https://github.com/ssr-server/meteor-koa',
  documentation: 'README.md'
});

const basePackages = ['ecmascript', 'webapp', 'meteor'];

Package.onUse((api) => {
  api.versionsFrom('1.4.2.3');
  basePackages.forEach(p => api.use(p, 'server'));
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.mainModule('meteor-koa.js', 'server');
});

Package.onTest(function(api) {
  basePackages.forEach(p => api.use(p));
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');
  api.use('ssrwpo:meteor-koa');
  api.mainModule('meteor-koa-tests.js', 'server');
});
