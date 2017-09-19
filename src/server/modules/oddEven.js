function isEvenOrOdd(num) {
  if(typeof num === "number" ) {
    return num % 2 === 0 ? 'even' : 'odd';
  } else {
    throw TypeError('expects a number');
  }
}

module.exports = isEvenOrOdd;
