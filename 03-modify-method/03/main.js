let animals = ['Dog', 'Cat', 'Rat'];
animals.splice(animals.length, 0, 'Fish');
animals.splice(0, 0, 'Horse');
animals.splice(animals.length, 0, 'Giraffe', 'Snake');
animals.splice(0, 1);
animals.splice(animals.length - 1, 1);
animals.splice(0, 1);

animals;
// [ 'Cat', 'Rat', 'Fish', 'Giraffe' ]
