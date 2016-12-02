import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'koa': '2.0.0-alpha.7',
}, 'ssrwpo:meteor-koa');

const Koa = require('koa');

export const koa = function () {
  const app = new Koa();
  if (!Meteor.isPackageTest) {
    WebApp.connectHandlers.use(Meteor.bindEnvironment(app.callback()));
  }
  
  return app;
};
