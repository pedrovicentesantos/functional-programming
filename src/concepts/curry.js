const R = require('ramda');

const add = x => y => x + y;

const increment = add(1);

// console.log(add(3)(8));
// console.log(increment(123));

const add3 = R.curry((x, y, z) => x + y + z);

// console.log(add3(1)(2)(3));
// console.log(add3(1, 2)(3));
// console.log(add3(1, 2, 3));

// Custom curry
const curry = (fn, n) => {
  const arity = n || fn.length;
  return (...params) => (params.length >= arity
    ? fn(...params)
    : curry(
      (...rest) => fn(...params, ...rest),
      arity - params.length,
    ));
};

const customCurryAdd3 = curry((x, y, z) => x + y + z);
// console.log(customCurryAdd3(1)(2)(4));
// console.log(customCurryAdd3(1, 2)(4));
// console.log(customCurryAdd3(1, 2, 4));

module.exports = {
  curry,
};
