/*

1. Sum of Numbers
Description: Write a program to calculate the sum of numbers from 1 to n.
Input: n = 5

Output: 15

*/


function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


const n = 5;


console.log("Sum from 1 to", n, "is:", sumUpTo(n));



 /*
 
 output:
 
 D:\JAVA FULL-STACK_NOTES\Java Script>node SumNumber.js
 Sum from 1 to 5 is: 15
 
 */