/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){

  if(typeof numbers !== 'number') {

    throw new TypeError("Function requires a number as input");
  }

  if(isNaN(numbers)) {

    throw new TypeError("Function cannot take NaN as input");
  }

  if(numbers%1 !== 0) {

    throw new TypeError("Function requires a whole number as input")
  }

  numbers = Math.abs(numbers);

  var candidateNumber = 1;
  var rangeArray = [];

  for(var i = 1; i < numbers + 1; i++) { //NB starts at 1, not 0

    rangeArray.push(i);
  }

  for(var i = 0; i < rangeArray.length; i++) { //reduces factors of non-primes to primes, solution is product of residual primes

    if(rangeArray[i] != 1) {

      candidateNumber = candidateNumber * rangeArray[i];

      for(var j = rangeArray.length-1; j>=i; j--) {

        if(rangeArray[j]%rangeArray[i] === 0) {

          rangeArray[j] = rangeArray[j]/rangeArray[i];
        }
      }
    }
  }

  return candidateNumber;
};