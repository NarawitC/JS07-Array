let array = [];
let input = prompt();

while (!isNaN(input) && input !== null) {
  array[array.length] = input;
  input = prompt();
}
