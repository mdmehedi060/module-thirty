const numbers = [4, 5, 6, 3];
// for(let i=0;i<numbers.length;i++){}
// while
for (const num of numbers) {
  // console.log(num);
}

const glass = { name: 'glass', collor: 'golden', price: 12, isCleaned: true };

for (const key in glass) {
  const value = glass[key]
  // console.log(key,value);
}


// optional
const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
  const value = glass[key];
  console.log(key,value);
}