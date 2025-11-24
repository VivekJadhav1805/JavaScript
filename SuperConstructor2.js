class Value
{
	constructor(x)
	{
		console.log("I value Parent Coustomer: "+(x*x));
	}
}

class Add extends Value
{
	constructor()
	{
		super(10);
		console.log("I am Add child constructor");
	}
}

let ad = new Add();



/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node SuperConstructor2.js
I value Parent Coustomer: 100
I am Add child constructor


*/