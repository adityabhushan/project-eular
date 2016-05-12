var a = [], sumOfSquares = 0, squareOfSum = 0;
for(var i = 0; i < 100; i++){
	a[i] = i+1;
	sumOfSquares += (a[i]*a[i]);
	squareOfSum += a[i];
}
return console.log((squareOfSum*squareOfSum)-sumOfSquares);