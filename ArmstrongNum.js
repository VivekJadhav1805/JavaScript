/*

6. Armstrong Number
Description: Write a program to check if a number is an Armstrong number.
Input: n = 153


Output: Armstrong

*/

let num=153;
let count=0;
let temp=num;
let sum=0;

while(num!=0)
{
	num=Math.trunc(num/10);
	count++;
}

let orgNum=temp;
while(temp!=0)
{
	let rem=temp%10;
	let Armstrong=1
	let i=1;
	
	while(i<=count)
	{
		Armstrong=Armstrong*rem;
		i++;	
	}
	sum=sum+Armstrong;
	temp=Math.trunc(temp/10);
	
}
if(orgNum==sum)
	console.log("Armstrong");
	else
		console.log("not Armstrong");
	
	
/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node ArmstrongNum.js
Armstrong

*/
	