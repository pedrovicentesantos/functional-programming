const R = require('ramda');
const pMap = require('p-map');

const concatAll = R.reduce(R.concat, []);

const concurrently = R.curry((concurrency, mapper, xs) => pMap(xs, mapper, { concurrency }));

const append = R.curry((xs, x) => xs.concat([x]));

const serially = R.curry((mapper, xs) => xs.reduce(
  (promise, x) => promise.then((acc) => mapper(x).then(append(acc))),
  Promise.resolve([]),
));

const delay = time => new Promise((resolve) => setTimeout(resolve, time));

const delayed = R.curry((time, value) => delay(time).then(R.always(value)));

const then = R.andThen;

module.exports = {
  concatAll,
  concurrently,
  append,
  serially,
  delayed,
  then,
};
