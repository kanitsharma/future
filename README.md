# future
Yield promises in generator functions

## Getting started

```javascript
  npm i -s yieldpromise
```

### test.js
```javascript
  const run = require('yieldpromise')
  const fetch = require('node-fetch')

  run(function * main () {
    const a = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
    const b = yield a.json()
    console.log(b)
  })
```