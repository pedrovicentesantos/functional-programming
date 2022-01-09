const { curry } = require('./curry');

// Composition
// h - f .g
// h(x) = f (g(x))
// f = f1 . f2 . (...) . fx
// pseudo código:  f(x) = f1(f2(...fx(x)...))
// pseudo código: const f = compose(f1, f2, ..., fx)
// Executa da última função para primeira

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

// Custom pipe
// h = f |> g
// h(x) = g(f(x))
// f = f1 |> f2 |> (...) |> fN
// pseudo código: f(x) = fN(...f2(f1(x)...))
// Igual ao compose mas executa da esquerda para direita (da primeira para ultima)
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

// Array manipulation
const map = curry((mapper, xs) => xs.map(mapper));

const filter = curry((predicate, xs) => xs.filter(predicate));

const reduce = curry((reducer, initial, xs) => xs.reduce(reducer, initial));

const add = curry((x, y) => x + y);

// Domain
const User = (age, admin) => ({
  age,
  admin,
});

const users = [
  User(30, true),
  User(20, false),
  User(40, true),
];

const isAdmin = user => user.admin;

const getAge = user => user.age;

const sum = reduce(add, 0);

const log = curry((tag, val) => {
  console.log(tag, val);
  return val;
});

// Sum of ages of admins
const sumAllPipe = pipe(
  filter(isAdmin),
  log('admin users'),
  map(getAge),
  log('Ages'),
  sum,
);

const sumAllCompose = compose(
  sum,
  log('Ages'),
  map(getAge),
  log('admin users'),
  filter(isAdmin),
);

console.log('Composition');
console.log(sumAllCompose(users));

console.log('Pipe');
console.log(sumAllPipe(users));

// Using array methods
const sumAdminAges = arr => arr
  .filter(user => user.admin)
  .map(user => user.age)
  .reduce((previous, current) => previous + current, 0);

// Using anonymous functions
const sumAdminAgesAnonymous = arr => arr
  .filter(isAdmin)
  .map(getAge)
  .reduce(add, 0);

console.log(sumAdminAges(users));
console.log(sumAdminAgesAnonymous(users));
