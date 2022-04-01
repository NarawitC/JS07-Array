let fruits = ['Apples', 'Pear', 'Orange'];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');
// what's in fruits?
console.log(fruits.length); // *
// 4 เพราะ array copy by refference