/*

19. Print Inverted Number Pattern
Description: Write a program to print an inverted number pattern.
Input: n = 5


Output:

5 4 3 2 1
4 3 2 1
3 2 1
2 1
1


*/

for(let i=1; i<=5; i++)
{
	var s="";
	for(let j=5; j>=1; j--)
	{
		if(j<=6-i)
			s+=" "+j;
	}
	console.log(s);
}



/*

D:\JAVA FULL-STACK_NOTES\Java Script>node InvertedNumberPattern.js
 5 4 3 2 1
 4 3 2 1
 3 2 1
 2 1
 1
 
 */