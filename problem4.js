function palin(numb){
var number = numb.toString();
var len = number.length;
for(var i=0; i<=Math.floor(len); i++){
if(number[i] != number[number.length-1-i]){
return false;
}
}
return true;
}

function numCheck(){
var i,j,large=0;
for(i=999; i>=100; i--){
for(j = 999; j>=100; j--){
if(palin(i*j)){
if(i*j> large)
large = i*j
}
}
}
return large;
}

console.log(numCheck());
