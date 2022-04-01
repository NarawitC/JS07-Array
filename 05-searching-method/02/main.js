const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// for (index in alphabets) {
//   if (alphabets[index] === 'a') {
//     console.log(index);
//   }
// }

const arr =[]
alphabets.filter((el,index)=>{
  if (el=="a"){
    arr.push(index)
  }
})