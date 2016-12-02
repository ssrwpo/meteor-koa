import Koa from 'koa';

import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

export const koa = function () {
  const app = new Koa();
  if (!Meteor.isPackageTest) {
    WebApp.connectHandlers.use(Meteor.bindEnvironment(app.callback()));
  }
  return app;
};
