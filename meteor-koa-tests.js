// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-koa.js.
import { name as packageName } from "meteor/meteor-koa";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-koa - example', function (test) {
  test.equal(packageName, "meteor-koa");
});
