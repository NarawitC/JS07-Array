let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
str = str.toLowerCase();
str = str.split(' ').join('');
str = str.split('');
const obj = {};
str.map((el) => {
  if (el in obj) {
    obj[el] = obj[el] + 1;
  } else {
    obj[el] = 1;
  }
});
obj;
