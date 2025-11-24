/*

9. Sum of Digits
Description: Write a program to calculate the sum of digits of a given number.
Input: n = 234


Output: 9

*/


let num=234;
let sum=0;
while(num!=0)
{
	let rem=num%10;
	sum=sum+rem;
	num=Math.trunc(num/10);
}

console.log(sum);


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node SumofDigits.js
9

*/