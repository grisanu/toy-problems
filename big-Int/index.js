'use strict';
/**
* Make a Big Int class that will take in String
* => will need an Add method
* => will need a Multiply method
*/

const BigInt = function (str) {
  this.value = str;
};

BigInt.prototype.add = function (str) {
  let results = [];
  let rest = [];
  let digitsSofar = 0;
  let str1Pointer = this.value.length - 1;
  let str2Pointer = str.length - 1;

  while (str1Pointer > -1 && str2Pointer > -1) {
    let value = [Number(this.value[str1Pointer]) + Number(str[str2Pointer])];

    if (value[0] >= 10) {
      value = [1, value-10];
    }

    if (results.length > digitsSofar) {
      results[0] = results[0] + value[1];
      value.pop();
    }

    results.unshift(...value);

    digitsSofar++;
    str1Pointer--;
    str2Pointer--;
  }

  if (str1Pointer === -1) {
    rest = this.value.slice(0, str1Pointer+1);
  } else {
    rest = str.slice(0, str2Pointer+1);
  }

  if (results.length > digitsSofar) {
    while (rest.length > 1) {
      digitsSofar++;
      results[0] = results[0] + rest[rest.length -1];

      if (results[0] >= 10) {
        results[0] = results[0] - 10;
        rest.pop();
        rest[rest.length -1] += 1;
      } else {
        rest.pop();
      }
    }

    if (results.length > digitsSofar) {
      results[0] += rest[0];
    } else {
      results.unshift(...rest);
    }

  } else {
    results.unshift(...rest);
  }

  return results;
};

BigInt.prototype.multiply = function (str) {

};

var aa = new BigInt('12345');
console.log('expect => ', 12345+999, 'to be equal to', aa.add('999'));