let styles = ['Jazz', 'Blues'];

styles[styles.length] = 'Rock-n-Roll';
styles[1] = 'Classic';
delete styles[0];
console.log(styles.length);
// =3
// styles=[ <1 empty item>, 'Classic', 'Rock-n-Roll' ]
