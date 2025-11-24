/*

5. Palindrome Number
Description: Write a program to check if a number is a palindrome.
Input: n = 12321


Output: Palindrome

*/

let p=12321;
let temp=p;
let rev=0;

while(p!=0)
{
	let rem=p%10;
	rev=rev*10+rem;
	p=parseInt(p/10);
	
}

if(temp==rev)
{
	console.log("palindrome Number");
}
else{
	console.log("Not palindromeNumber")
}


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node palindromeNum.js
palindrome Number

*/