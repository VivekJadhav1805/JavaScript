/*

3. Fibonacci Series
Description: Write a program to print the first n Fibonacci numbers.
Input: n = 5


Output: 0 1 1 2 3

*/

function fibonacci(n){
	let a=0,b=1;
	let result=[];
	for(let i=0; i<n; i++){
		result.push(a);
		let temp = a+b;
		a=b;
		b=temp;
	}
	console.log(result.join('  '));
}
let n =5;

console.log("Fibonacci Number", n ,"is:",fibonacci(n));



/*

D:\JAVA FULL-STACK_NOTES\Java Script>node FibonacciNum.js
0  1  1  2  3
Fibonacci Number 5 is: undefined

*/