const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
array.map((el) => el * 2);

const array = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
array.map((el) => String(el));

const array = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
array.map((el) => typeof el);

const array = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
array.map((el) => el.toUpperCase());

const array = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
array.map((el) => {
  if (el % 2 === 0) return 'even';
  return 'odd';
});

const array = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
array.map((el) => Math.abs(el));

const array = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
array.map((el) => el.toFixed(2));

const array = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
array.map((el) => {
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthArray[el];
});

const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
array.map((el, index) => index + 1);

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: ["apple", "banana", "watermelon"]
array.map((el) => el.name);

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
// result: [14, 18, 32]
array.map((el) => el.age);

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
array.map((el) => el.name + ' ' + el.surname);

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
array.map((el) => {
  let inputAge = 2021 - +el.birth.slice(0, 4);
  // console.log(+(el.birth.slice(0,4)))
  el.age = inputAge;
  return el;
});

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
array.map((el) => {
  let birthSplit = el.birth.split('-');
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  birthSplit[1] = monthArray[Number(birthSplit[1]) - 1];
  birthSplit = [birthSplit[2], birthSplit[1], birthSplit[0]];
  birthSplit = birthSplit.join(' ');
  // console.log(birthSplit)
  return [`<tr><td>${el.name}</td><td>${birthSplit}</td></tr>`];
});
