"use strict";
/* 
// Square(n) Sum
function squareSum(numbers) {
  return numbers.map(num => num ** 2).reduce((acc, num) => acc + num, 0);
}
console.log(squareSum([1, 2, 2]));
//

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === "r") return `${name} plays banjo`;
  else return `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("Roy"));

// List Filtering
function filter_list(l) {
  return l.filter(l => Number.isInteger(l));
}
console.log(filter_list([1, 2, "a", "b"]));

// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Split Strings
function solution(str) {
  return str.split("").length % 2 == 0
    ? str.split(/(..)/g).filter(s => s)
    : str
        .concat("", "_")
        .split(/(..)/g)
        .filter(s => s);
}
console.log(solution("abc"));

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
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);

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
console.log(DNAStrand("ATTGC"));

// Squares of a Sorted Array leetcode
function squareArray(array) {
  return array.map(n => Math.abs(n) ** 2).sort((a, b) => a - b);
}
console.log(squareArray([-4, -1, 0, 3, 10]));

// Find Maximum and Minimum Values of a List
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
 */

// Two Sum
/* 
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}
console.log(twoSum([2, 3, 7, 4, 9], 12));
 */

// Well of Ideas - Easy Version
/* 
function well(arr) {
  const count = arr.filter(w => w === "good").length;
  return count === 0 ? "Fail!" : count > 2 ? "I smell a series!" : "Publish!";
}
console.log(well(["good", "bad", "good"]));
 */

// Printer Errors
/* 
function printerErrors(s) {
  return `${s.split("").filter(s => /[n-z]/.test(s)).length}/${s.length}`;
}
console.log(printerErrors("aaabbbbhaijjjm"));
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
console.log(capitalize("codewars"));
 */

/*
// Leap Years
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(isLeapYear(2100));
*/

/* 
// Largest Elements
function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}
console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));
 */

/* 
// Sort the odd
function sortArray(array) {
  const odds = array.filter(n => n % 2).sort((a, b) => a - b);
  return array.map(n => (n % 2 ? odds.shift() : n));
}
console.log(sortArray([5, 8, 6, 3, 4]));
 */

/*
// Calculate average
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, num) => acc + num, 0) / array.length;
}
console.log(findAverage([9, 9, 9]));
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
console.log(countSheep(3));
 */

/* 
// Grasshopper - Check for factor
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
console.log(checkForFactor(6, 3));
 */

/* 
// Opposite number
function opposite(number) {
  return number === 0 ? 0 : -number;
}
console.log(opposite(0));
 */

/* 
// Grasshopper - Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet("Daniel", "Daniel"));
 */

/* 
// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(8));
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
console.log(nbDig(10, 1));
 */

/* 
// Find the stray number
function stray(numbers) {
  return numbers.reduce((acc, curr) => acc ^ curr);
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
 */

/* 
// Sum of a sequence
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) sum += i;
  return sum;
};
console.log(sequenceSum(2, 6, 2));
 */

/* 
// Remove the minimum
function removeSmallest(numbers) {
  return numbers.length > 0
    ? numbers.filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)))
    : [];
}
console.log(removeSmallest([5, 3, 2, 1, 4]));
 */
