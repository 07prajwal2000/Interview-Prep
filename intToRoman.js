/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let res = "";
  if (num >= 1000) {
    let digits = Math.floor(num / 1000);
    while (digits) {
      res += "M";
      digits--;
    }
    num = num % 1000;
  }
  if (num >= 900) {
    res += "CM"
    num = num % 900;
  }
  if (num >= 500) {
    res += "D";
    num = num % 500;
  }
  if (num >= 400) {
    res += "CD";
    num = num % 400;
  }
  if (num >= 100) {
    let digits = Math.floor(num / 100);
    while (digits) {
      res += "C";
      digits--;
    }
    num = num % 100;
  }
  if (num >= 90) {
    num = num % 90;
    res += "XC"
  }
  if (num >= 50) {
    num = num % 50;
    res += "L";
  }
  if (num >= 40) {
    num = num % 40;
    res += "XL";
  }
  if (num >= 30) {
    num = num % 30;
    res += "XXX";
  }
  if (num >= 10) {
    let digits = Math.floor(num / 10);
    while (digits) {
      res += "X";
      digits--;
    }
    num = num % 10;
  }
  if (num == 9) {
    res += "IX";
    num = 0;
  }
  if (num >= 5) {
    let digits = Math.floor(num / 5);
    while (digits) {
      res += "V";
      digits--;
    }
    num = num % 5;
  }
  if (num == 4) {
    res += "IV";
    num = 0;
  }
  while (num) {
    res += "I";
    num--;
  }
  return res;
};

var intToRoman1 = function (num) {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const thousands = ["", "M", "MM", "MMM"]

  return `${thousands[Math.floor(num / 1000)]}${hundreds[Math.floor((num / 100) % 10)]}${tens[Math.floor((num / 10) % 10)]}${ones[num % 10]}`
};

console.log(intToRoman1(58));