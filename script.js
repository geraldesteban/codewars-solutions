"use strict";
/* 
// Square(n) Sum
function squareSum(numbers) {
  return numbers.map(num => num ** 2).reduce((acc, num) => acc + num, 0);
}
 */

/* 
// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === "r") return `${name} plays banjo`;
  else return `${name} does not play banjo`;
}
 */

/* 
// List Filtering
function filter_list(l) {
  return l.filter(l => Number.isInteger(l));
}
 */

/* 
// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
 */

/* 
// Split Strings
function solution(str) {
  return str.split("").length % 2 == 0
    ? str.split(/(..)/g).filter(s => s)
    : str
        .concat("", "_")
        .split(/(..)/g)
        .filter(s => s);
}
 */

/* 
// Data Reverse
function dataReverse(data) {
  const chunkSize = 8;
  const chunks = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  const reversedChunks = chunks.reverse().flat();

  return reversedChunks;
}
 */

/* 
// Complementary DNA
function DNAStrand(dna) {
  const complement = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map(c => complement[c])
    .join("");
}
 */

/* 
// Squares of a Sorted Array leetcode
function squareArray(array) {
  return array.map(n => Math.abs(n) ** 2).sort((a, b) => a - b);
}
 */

/* 
// Find Maximum and Minimum Values of a List
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};
 */

/* 
// Two Sum
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}
 */

/* 
// Well of Ideas - Easy Version
function well(arr) {
  const count = arr.filter(w => w === "good").length;
  return count === 0 ? "Fail!" : count > 2 ? "I smell a series!" : "Publish!";
}
 */

/* 
// Printer Errors
function printerErrors(s) {
  return `${s.split("").filter(s => /[n-z]/.test(s)).length}/${s.length}`;
}
 */

/* 
// Alternate capitalization
function capitalize(s) {
  const e = [];
  const o = [];

  for (let i = 0; i < s.length; i++)
    i % 2 == 0 ? e.push(s[i].toUpperCase()) : e.push(s[i]);
  for (let j = 0; j < s.length; j++)
    j % 2 == 0 ? o.push(s[j]) : o.push(s[j].toUpperCase());

  return [e.join(""), o.join("")];
}
 */

/*
// Leap Years
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
*/

/* 
// Largest Elements
function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}
 */

/* 
// Sort the odd
function sortArray(array) {
  const odds = array.filter(n => n % 2).sort((a, b) => a - b);
  return array.map(n => (n % 2 ? odds.shift() : n));
}
 */

/*
// Calculate average
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, num) => acc + num, 0) / array.length;
}
*/

/* 
// If you can't sleep, just count sheep!!
var countSheep = function (num) {
  const arr = [];

  if (num !== 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(`${i} sheep...`);
    }
  } else {
    return "";
  }
  return arr.join("");
};
 */

/* 
// Grasshopper - Check for factor
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
 */

/* 
// Opposite number
function opposite(number) {
  return number === 0 ? 0 : -number;
}
 */

/* 
// Grasshopper - Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
 */

/* 
// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
 */

/* 
// Count the Digit
function nbDig(n, d) {
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += i ** 2;
  }
  return result.split(d).length - 1;
}
 */

/* 
// Find the stray number
function stray(numbers) {
  return numbers.reduce((acc, curr) => acc ^ curr);
}
 */

/* 
// Sum of a sequence
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) sum += i;
  return sum;
};
 */

/* 
// Remove the minimum
function removeSmallest(numbers) {
  return numbers.length > 0
    ? numbers.filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)))
    : [];
}
 */

/* 
// Get the Middle Character
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(mid - 1, mid + 1) : s.charAt(mid);
}
 */

/* 
// Char Code Calculation
function calc(x) {
  return x
    .split("")
    .map(c => c.charCodeAt())
    .join("")
    .split("")
    .map(n => +n - 1)
    .filter(n => +n === 6)
    .reduce((acc, cur) => acc + cur, 0);
}
 */

/* 
// Remove duplicate words
function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
}
 */

/* 
// Sum of positive
function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((acc, curr) => acc + curr, 0);
}
 */

/* 
// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  return !input || input.length === 0
    ? []
    : [
        input.filter(p => p > 0).length,
        input.filter(n => n < 0).reduce((acc, cur) => acc + cur, 0),
      ];
}
 */

/* 
// Maximum Length Difference
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let maxLenDiff = -1;

  a1.forEach(x => {
    a2.forEach(y => {
      const diff = Math.abs(x.length - y.length);
      maxLenDiff = Math.max(maxLenDiff, diff);
    });
  });

  return maxLenDiff;
}
 */

/* 
// Sum The Strings
function sumStr(a, b) {
  return String(+a + +b);
}
console.log(sumStr("34", "5"));
 */

/* 
// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}
console.log(twiceAsOld(36, 7));
 */

/* 
// Sum of differences in array
function sumOfDifferences(arr) {
  const arrSort = arr.sort((a, b) => b - a);
  let sum = [];
  if (arr.length === 0) 0;
  for (let i = 0; i < arrSort.length - 1; i++) {
    sum.push(arrSort[i] - arrSort[i + 1]);
  }
  return sum.reduce((acc, cur) => acc + cur, 0);
}
 */

/* 
// Multiplication table
const multiplicationTable = function (size) {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
};
console.log(multiplicationTable(3));
 */

/* 
// Remove anchor from URL
function removeUrlAnchor(url) {
  return url.split("#", 1).join();
} 
*/

/* 
// Sort and Star
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
 */
