class Value
{
	constructor()
	{
		console.log("I value Parent Coustomer");
	}
}

class Add extends Value
{
	constructor()
	{
		super();
		console.log("I am Add child constructor");
	}
}

let ad = new Add();



/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node SuperConstructor.js
I value Parent Coustomer
I am Add child constructor

*/