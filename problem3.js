var number = process.argv[2], factor = 2, largest = 0, sqroot = parseInt(Math.sqrt(number));
/*
function nextprime(factor){
for (i = 2; i < factor; i++){
if(factor % i == 0)
return nextprime(factor + 1)
}
return factor;
}

while(factor < sqroot){
if(number%factor == 0){
number = number/factor;
if(factor > largest)
largest = factor;
}
console.log('number is = ' +number);
console.log('factor is =' +factor);
factor = nextprime(factor + 1);
}
console.log(largest);
*/

while(number > 1){
if((number % factor) == 0){
number /= factor;
factor--;
}factor++;
console.log('factor =' +factor);
}
console.log('largest factor =' +factor)


