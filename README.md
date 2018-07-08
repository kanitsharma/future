# yieldpromise

Yield promises in generator functions

## Getting started

```javascript
  npm i -s yieldpromise
```

### Usage

```javascript
const run = require("yieldpromise");
const fetch = require("node-fetch");

// Using as a standalone function
run(function* main() {
  const a = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const b = yield a.json();
  console.log(b);
});
```

#### Since run injects resolve and reject as parameters to the child generator function, it can be used inside promise chain

##### Example

```javascript
const run = require("yieldpromise");
const fetch = require("node-fetch");

// Using as a standalone function
run(function* main(resolve, reject) {
  const a = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const b = yield a.json();
  resolve(b);
})
  .then(x => x.userId)
  .then(console.log);
```
