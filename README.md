# `ssr-wpo:meteor-koa`
[Koa](http://koajs.com/) next generation web framework with Meteor

## Table of contents
- [Installation](#installation)
- [Api](#api)
- [Example](#example)
- [Additional koa packages](#additional)
- [Testing](#testing)

## <a name='installation'>Installation</a>
```bash
$ meteor npm i -S koa@next
$ meteor add ssrwpo:meteor-koa
```

## <a name='api'>Api</a>
See [koa api](https://github.com/koajs/koa/tree/v2.x) for more details.

## <a name='example'>Example</a>
`meteor-koa` is only available on server side. (`Meteor.isServer`)

```javascript
import { koa } from 'meteor/ssr-wpo:meteor-koa';

const app = koa();

app.use((ctx) => {
  ctx.body = 'Hello World';
});
```

## <a name='additional'>Additional koa packages</a>
Koa has many additional packages listed [here](https://github.com/koajs/koa/wiki).

You can use them with `meteor-koa`, just simply add them with `npm` in your meteor project:
```bash
$ meteor npm install <koa-plugins>
```

## <a name='testing'>Testing</a>
```bash
$ meteor test-packages ./ --driver-package practicalmeteor:mocha
```
### With [spacejam](https://www.npmjs.com/package/spacejam)
```bash
$ spacejam-mocha ./
```
