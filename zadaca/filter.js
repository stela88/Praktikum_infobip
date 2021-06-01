function isEven(n) {
    const even = n.filter(num => num % 2 === 0)
    return even;
}

function isOdd(m) {
    const odd = m.filter(numb => numb % 2 != 0)
    return odd;
}

function isPositive(positive) {
    const plus = positive.filter(pos => pos > 0)
    return plus;
  }

function checkAdult(ages) {
    const adult = ages.filter(age => age >= 18)
    return adult;
}

function WordLenght(words) {
    const result = words.filter(word => word.length > 6);
    return result;
}

function isBigEnough(numbers) {
    const result = numbers.filter(value => value >= 10);
    return result;
}


function filterItems(arr, query) {
    return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

function maleDogs(dog){
    const sex = dog.filter((dogs) => dogs.gender === 'male')
    return sex;
}








module.exports = {isEven, isOdd, isPositive, checkAdult, WordLenght, isBigEnough, filterItems, maleDogs}


