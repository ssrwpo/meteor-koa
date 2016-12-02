import { WebApp } from 'meteor/webapp';

import { assert } from 'meteor/practicalmeteor:chai';

import { koa } from 'meteor/meteor-koa';
import { createRequest } from 'meteor/meteor-koa-testing';

const app = koa();

app.use((ctx) => {
  ctx.body = 'Hello World';
});

const request = createRequest(app.listen());

describe('meteor koa - Hello World', function () {
  it('should say "Hello World"', function (done) {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});
