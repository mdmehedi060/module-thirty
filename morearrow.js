const diffarence = (x, y) => x - y;
const multiply = (first, seconed, thired) => first * seconed * thired;

const getAge = (person) => person.age;
const student = { name: 'Anaanta', age: 45 }
const age = getAge (student);
// console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([45, 75, 69, 56]);
// console.log(third);

// no perameter
const getPI = () => Math.PI;
// console.log(getPI());

// large arrow function if you get want to any thing returned from this function .then you have used the retirn key word.

const doMath = (x, y, z)=>{
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
}