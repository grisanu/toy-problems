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
  let digitsSofar = 0;
  let str1Pointer = this.value.length - 1;
  let str2Pointer = str.length - 1;

  while (str1Pointer > -1 && str2Pointer > -1) {
    let value = [Number(this.value[str1Pointer]) + Number(str[str2Pointer])];

    if (value[0] >= 10) {
      value = [1, value-10];
    }

    if (results.length > digitsSofar) {
      value[1] = results[0] + value[1];
    }
    results.unshift(...value);
  }

  return results;
};

BigInt.prototype.multiply = function (str) {

};

var aa = new BigInt('12345');
console.log('expect => ', 12345+999, 'to be equal to', aa.add('999'));