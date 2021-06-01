function multiply(arr) {
    const reducer = (sum, val) => sum * val;
    const initialValue = 1;
    return arr.reduce(reducer, initialValue);
}


function euros(arr){
    const reducer = ((total, amount) => total + amount);
    return arr.reduce(reducer); 
}

// function flaattened(array){
    
// const flattened = ((accumulator, item) => {
//     return array.reduce(flaattened, accumulator)
//   }, [])
// }

function duplicate(double){
let uniqueAgeGroup = (function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return duplicate.reduce(callback(accumulator, currentValue), initialValue);
}, []);


}
module.exports = {multiply, duplicate, euros}