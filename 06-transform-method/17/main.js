let str = '31 45 12 67 34 86 23 37 19 41';
str = str.split(' ');
let sum = 0;

str.forEach((el) => {
  if (Number(el) < 40) {
    sum += +el;
  }
});
sum;
