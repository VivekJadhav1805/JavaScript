class Add
{
	setValue(x,y)
	{
		this.x=x;
		this.y=y;
	}
	showAdd()
	{
		console.log("Addition is:"+(this.x+this.y));
	}
}

let ad = new Add();
ad.setValue(10,20);
ad.showAdd();



/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node Add.js
Addition is:30

*/