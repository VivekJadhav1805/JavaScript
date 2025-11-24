/*

10. Count Digits
Description: Write a program to count the number of digits in a number n.
Input: n = 12345


Output: 5

*/

let n=12345;

let count=0;

while(n>0)
{
    count++;
    n=Math.floor(n/10);
    // n = (n - (n % 10)) / 10;
}
console.log(count);


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node CountDigits.js
5

*/