let a=[10,5,4,8,2];

console.log(a);

let result = a.sort(function(a,b){
	return a-b
});

console.log(result);


/*

output:

D:\JAVA FULL-STACK_NOTES\Java Script>node sort1.js
[ 10, 5, 4, 8, 2 ]
[ 2, 4, 5, 8, 10 ]

*/