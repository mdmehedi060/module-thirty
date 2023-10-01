// object destructuring
const actor = {
  name: 'Ananta',
  age: 30,
  phone: '01718869593',
  money: 112345657899,
}
// if right side is an object left side of distructauring will be object as well
// const { phone } = actor;
const { phone,age:boyes } = actor;



// const phone = actor.phone;
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(boyes);
// console.log(boyes);
// console.log(boyes);

//  array desturectring
const numbers = [45, 99];
const [first, seconed] = numbers;
const [x, y] = [12, 16];

// advenced
function doubleThem(a, b) {
  return [a*2,b*2];
}
const [prothom, dityou] = doubleThem(6, 9);
console.log(prothom,dityou);