var a = 3, b = 0, c = 0, d = 0;
// for (var i=a+1; i < 1000-a; i++){
// 	b = i;
// 	d = (a*a)+(b*b);
// 	a++;
// 	if((a+b+Math.sqrt(d)) == 1000 ){
// 		console.log ('result = '+a, b, Math.sqrt(d));
// 		break;
// 	}
// 	//console.log ('fail, result = '+a, b, Math.sqrt(d));;
// } 

for(var a=1; a<500;a++){
	for(b = 501-a; b > a; b--){
		c = 1000 - (a+b);
		if(c > (a+b) && (a*a)+(b*b) == (c*c))
			console.log ('result = '+a, b, c);
	}

}
