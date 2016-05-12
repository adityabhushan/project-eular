
var primefactors = [2,3,5,7,11,13,17,19], k=1;
for(var i = 2; i<= 20; i++){
	for(var j = 0; j< primefactors.length; j++){
		if(i% primefactors[j] == 0){
			k *= primefactors[j];
			console.log('primefactors of '+i+ 'are' + primefactors[j]);
			console.log(k);
		}

	}
}
console.log(k);


/*
Dont Panic
Write Input
Write the output
test Input*/