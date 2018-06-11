const run = require('../dist/main')
const fetch = require('node-fetch')

run(function * main () {
  const a = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
  const b = yield a.json()
  console.log(b)
})
