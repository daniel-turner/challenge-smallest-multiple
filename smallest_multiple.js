/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){

  function isDivisibleThroughRange(numberToBeTested, maximumRangeNumber) {

    for( var i = 3; i <= maximumRangeNumber; i++) {

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

  if(numbers < 3) {

    return numbers;
  }

  var candidateNumber = 1;

  var rangeArray = [];

  for(var i = 1; i < numbers; i++) {

    rangeArray.push(i);
  }

  for(var i = 0; i < rangeArray.length; i++) {

    if(rangeArray[i] != 1) {

      candidateNumber = candidateNumber * rangeArray[i];

      for(var j = rangeArray.length-1; j>=i; j--) {

        if(rangeArray[j]%rangeArray[i] === 0) {

          rangeArray[j] = rangeArray[j]/rangeArray[i];
        }
      }
    }
  }
  // var candidateNumber = numbers;

  // if(candidateNumber%2 !== 0) {

  //   candidateNumber++;
  // }

  // while(!isDivisibleThroughRange(candidateNumber, numbers)) {

  //   candidateNumber += 2;
  // }

  return candidateNumber;
};