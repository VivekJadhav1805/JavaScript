class ArrowFunction
{
	setValue=(x,y)=>{
		this.x=x;
		this.y=y;
	}
	showArrowFunction=()=>{
		console.log("Addition is "+(this.x+this.y));
	}
}

let af = new ArrowFunction();
af.setValue(10,20);
af.showArrowFunction();


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node ArrowFunction.js
Addition is 30


*/
