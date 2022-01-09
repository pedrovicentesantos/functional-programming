const numbers = [1, 2, 3, 4, 5];

const double = number => number * 2;

const isEven = number => number % 2 === 0;

const add = (x, y) => x + y;

const asyncComputation = () => Promise.resolve(1);

console.log(numbers.map(double));
console.log(numbers.filter(isEven));
console.log(numbers.reduce(add, 0));

asyncComputation()
  .then(x => x + 2)
  .then(console.log);

const withLog = fn => (...args) => {
  console.log(`Arguments: [${args}]`);
  const result = fn(...args);
  console.log(`Result: ${result}`);
  return result;
};

const multiply = (x, y) => x * y;

const auditMultiply = withLog(multiply);
const auditMax = withLog(Math.max);

auditMultiply(2, 9);
auditMax(1, -1000, 212, -1, 0);
