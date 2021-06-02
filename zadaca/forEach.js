// function double(input) { 
//     const number = input.forEach(num => num * 2)
//     return number; 
// }

//   function item(item, index, arr) {
//     arr[index] = 'Hello ' + item;
//     let students = students.forEach(hello)
//     return students;
// }


var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}



module.exports = {myFunction}