const max = Math.max(16, 23, 45, 57, 66, 75, 88, 93);
const numbers = [16, 23, 45, 57, 66, 75, 88];
const arrayMath = Math.max(...numbers);

// console.log(arrayMath);

// use spread oparetor to copy

const nums = [4, 5, 87, 9];
const nums2 = nums;
const nums3 = [...nums];   // copy 
console.log(nums3);
nums.push(100);
console.log(nums3);
console.log(nums);

// advenced
const sonkha = [...nums, 9999]; // add extra element whiles copy
console.log(sonkha);
