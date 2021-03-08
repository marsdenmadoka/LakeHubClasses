
//pure function
 function bar(x,y){
	var z;
	
	function foo(x){
	y++;
	z=x*y;
	}
	foo(x)
	return[y,z];
 }



console.log(bar(20,5))
