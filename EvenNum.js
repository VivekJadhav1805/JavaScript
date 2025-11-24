/*

11. Even Numbers
Description: Write a program to print all even numbers between 1 and n.
Input: n = 10


Output: 2 4 6 8 10


*/

let num=10;

for(let i=1; i<num;i++)
{
	if(i%2==0)
	{
		console.log(i);
	}
}


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node EvenNum.js
2
4
6
8

*/