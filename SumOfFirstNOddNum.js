/*

17. Sum of First N Odd Numbers
Description: Write a program to calculate the sum of the first n odd numbers.
Input: n = 4


Output: 16

*/

let num=4;
let sum=0;
let count=0;
let i=1;

while(count<num)
{
		sum=sum+i;
		i=i+2;
		count=count+1;
}

console.log(sum);


/*

output:


D:\JAVA FULL-STACK_NOTES\Java Script>node SumOfFirstNOddNum.js
16

*/