const run = require("../dist/main");
const fetch = require("node-fetch");

const a = run(function* main(resolve) {
  const a = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const b = yield a.json();
  resolve(b);
}).then(console.log);
