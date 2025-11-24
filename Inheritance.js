class Inheritance
{
	setValue(x,y)
	{
		this.x=x;
		this.y=y;
	}
}

class Add extends Inheritance
{
	gatAdd(){
		return this.x+this.y;
	}
}

class Mul extends Inheritance
{
	getMul(){
		return this.x*this.y;
	}
}

let ad = new Add();
ad.setValue(10,20);
let r = ad.gatAdd();
console.log("Addition is "+r);


let m = new Mul();
m.setValue(5,4);
let v = m.getMul();
console.log("Multiplication is "+v);



/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node Inheritance.js
Addition is 30
Multiplication is 20

*/