/*

2. Factorial of a Number
Description: Write a program to compute the factorial of a given number n.
Input: n = 4


Output: 24

*/

function factorialUPTO(n){
	let p=1;
	
	for(let i=1; i<=n; i++){
		p = p * i;
	}
	return p;
}


const n = 4;


console.log("Factorial number" , n , "is:", factorialUPTO(n));





/*

D:\JAVA FULL-STACK_NOTES\Java Script>node FactorialNumber.js
Factorial number 4 is: 24

*/