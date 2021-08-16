module.exports = function toReadable (number) {
    const number0To19 = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    };


    const number20To90 = {
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    };

    if(number < 20) {
      return number0To19[number];
    }

    if(20 <= number && number < 100) {
      if (number % 10 === 0) {
        return number20To90[Math.floor(number / 10) * 10];
      } else {
        return `${number20To90[Math.floor(number / 10) * 10]} ${number0To19[number % 10]}`;
      }
    }

    if(100 <= number && number < 1000) {
      if (number % 100 === 0) {
        return `${number0To19[number / 100]} hundred`;
      } else if (number % 100 < 20) {
        return `${number0To19[Math.floor(number / 100)]} hundred ${number0To19[number % 100]}`;
      } else if ((number % 100) % 10 === 0) {
        return `${number0To19[Math.floor(number / 100)]} hundred ${number20To90[number - (Math.floor(number / 100) * 100)]}`;
      } else {
        return `${number0To19[Math.floor(number / 100)]} hundred ${number20To90[number - (Math.floor(number / 100) * 100) - ((number % 100) % 10)]} ${number0To19[(number % 100) % 10]}`;
      }
    }
  }
