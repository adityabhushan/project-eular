var a = [];
for (var i = 0; i< 150000; i++){
	a[i] = i+1;
}
for (var i = 2; i< a.length; i++){	
	for(var j = i+1; j < a.length; j++){
		if(a[j]%a[i] == 0){
			a.splice(j,1)
		}
	}
}
console.log(a[10002]);