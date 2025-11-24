/*

22. Print Triangle of Stars
Description: Write a program to print a triangle of stars.
Input: n = 4


Output:
*
**
***
****

*/

for(let i=1; i<=4; i++)
{
	let s="";
	for(let j=1; j<=4; j++)
	{
		if(j<=i)
			s+="*";
		else
			s+=" ";
	}
	console.log(s);
}



/*

D:\JAVA FULL-STACK_NOTES\Java Script>node TriangleofStars.js
*
**
***
****

*/