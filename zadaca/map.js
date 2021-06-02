function double(doubled) {
  number = doubled.map(n => n * 2)
   return number;
}

function havle(halved) {
  num = halved.map(n => n / 2)
   return num;
}

function size(lenghts) {
let sizeOf = lenghts.map(item => item.length);
return sizeOf; 
}

function getFullName(persons) {
function newName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}
return persons.map(newName);
}

function letter(name){
const map = Array.prototype.map
const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`;
})
return newName;
}

function animals(myUsers){
const usersByLikes = myUsers.map(item => {
  const container = {};
  container[item.name] = item.likes;
  container.age = item.name.length * 10;
  return container;
})
  return usersByLikes;
}

module.exports = {double, havle, size, getFullName, letter, animals}