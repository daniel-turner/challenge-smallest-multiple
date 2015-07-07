/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){

  function isDivisibleThroughRange(numberToBeTested, maximumRangeNumber) {

    for( var i = 2; i <= maximumRangeNumber; i++) {

      if(numberToBeTested%i !== 0) {

        return false;
      }
    }

    return true;
  }

  if(typeof numbers !== 'number') {

    throw new TypeError("Function requires a number");
  }

  if(isNaN(numbers)) {

    throw new TypeError("Function cannot take NaN");
  }

  numbers = Math.abs(numbers);

  var candidateNumber = numbers;

  if(candidateNumber%2 !== 0) {

    candidateNumber++;
  }

  while(!isDivisibleThroughRange(candidateNumber, numbers)) {

    candidateNumber += 2;
  }

  return candidateNumber;
};