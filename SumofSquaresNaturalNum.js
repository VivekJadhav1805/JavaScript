/*

20. Sum of Squares of First N Natural Numbers
Description: Write a program to calculate the sum of squares of the first n natural numbers.
Input: n = 3


Output: 14

*/

let no=3;
let sum=0;

for(let i=1; i<=no; i++)
{
	let square=i*i;
	sum=sum+square;
}

console.log(sum);


/*

output:


D:\JAVA FULL-STACK_NOTES\Java Script>node SumofSquaresNaturalNum.js
14

*/
