/*

23. Print Inverted Star Pattern
Description: Write a program to print an inverted star pattern.
Input: n = 4


Output:
****
***
**
*

*/

for(let i=1; i<=4; i++)
{
	let s="";
	for(let j=1; j<=4; j++)
	{
		if(j<=5-i)
			s+="*";
		else
			s+=" ";
	}
	console.log(s);
}


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node InvertedStarPattern.js
****
***
**
*

*/