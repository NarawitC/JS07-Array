const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
array.filter((el) => el > 10);

const array = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
array.filter((el) => el % 2 === 1);

const array = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
array.filter((el) => typeof el === 'number');

const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
array.filter((el) => el.length > 6);

const array = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
array.filter((el) => el > 0);

const array = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
array.filter((el) => el % 3 === 0);

const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
array.filter((el) => el.startsWith('E'));

const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
array.filter((el) => el.toUpperCase() === el);

const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
array.filter((el) => el.toLowerCase().includes('buri') === true);

const array = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 },
];
// อายุไม่น้อยกว่า 18
array.filter((el) => el.age >= 18);

const array = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' },
];
// id ไม่เท่ากับ 4
array.filter((el) => el.id !== 4);

const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' },
];
// เกิดเดือน 6
array.filter((el) => el.birth.includes('06', 5));
