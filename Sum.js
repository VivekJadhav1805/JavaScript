let sum=(...arr)=>{
	let s=0;
	for(var i=0; i<arr.length; i++)
	{
		s=s+arr[i];
	}
	console.log(s);
}

sum(10,20,30,40,50);



/*

outrput:

D:\JAVA FULL-STACK_NOTES\Java Script>node Sum.js
150

*/