var sum=2, a = [];
a[0] = 1; a[1] = 2;
for(i = 2; ; i++){
a[i] = a[i-1] + a[i-2]; 
if(a[i] % 2 == 0)
sum += a[i];
console.log('position = '+(i+1));
console.log('value =' +a[i]);
console.log('total =' +sum);

if(a[i] >= 4000000)
break;
}


