const glass = { name: 'glass', collor: 'golden', price: 12, isCleaned: true };
// console.log(glass);
const keys = Object.keys(glass);

// [ 'name', 'collor', 'price', 'isCleaned' ]
// values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);

// enteries
const entries = Object.entries(glass);
// array of array.two dimensional array.
// [
//   [ 'name', 'glass' ],
//   [ 'collor', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]

// delate
// delete glass.isCleaned;

const { isCleaned, ...shortglass } = glass;

// freeze
// Object.freeze(glass)
// seal
Object.seal(glass);
glass.source = 'Bangladesh'
glass.price = 5000;
console.log(glass);