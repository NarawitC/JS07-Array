let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

function getAverageAge(arr) {
  let count = arr.length;
  let result = arr.reduce((sum, el) => {
    sum += el.age;
    return sum;
  }, 0);
  return +(result / count).toFixed(2);
}
