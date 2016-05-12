function palin(number){
	var checker = parseInt(number);
	var pal = 0;

	while(number > 0){
		mod = number % 10;
		pal = pal * 10 + mod;
		number = parseInt(number/10);
	}
	if(pal == checker)
		return true;
	else
		return false;
}

large = 0;
for(i = 999; i > 100; i--){
	for(j = 999; j > 100; j--){
		prod = i*j;
		if(palin(prod))
			if(prod > large)
				large = prod;
	}
}
console.log(large);