function multiply(arr) {
    const reducer = (sum, val) => sum * val;
    const initialValue = 1;
    return arr.reduce(reducer, initialValue);
}

function subtraction(numbers) {
  const minus = ((total, num) => total - num )
  return numbers.reduce(minus);
}

function euros(arr){
    const reducer = ((total, amount) => total + amount);
    return arr.reduce(reducer); 
}

function flaattened(array){
    const merge = ((accumulator, item) =>accumulator.concat(item));
    return array.reduce(merge)
}



function removeDuplicate(ageGroup){
  let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []
  );
  return uniqueAgeGroup; 
}


// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

//   return accumulator;
// }, []);

module.exports = {multiply, subtraction,euros, flaattened, removeDuplicate}