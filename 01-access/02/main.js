const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *
// 3 Array is copy by reference
