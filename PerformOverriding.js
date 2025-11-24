class Value{
	show(){
		console.log("I am pareant Show");
	}
}

class Add extends Value{
	show(){
		console.log("I am child Show");
	}
}

let ad = new Add();
ad.show();  // call overriding method




/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node PerformOverriding.js
I am child Show

*/

 