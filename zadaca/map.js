function isEven(n) {
    const even = n.filter(num => num % 2 === 0)
    return even;
}

function map(fn, array) {
    if (length(array) === 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
  }
module.exports = {map}