var primes  = [];

function prime(num) {
    var sqrt = Math.sqrt(num);
    var length = primes.length
    for (var i = 0; i < length; i++) {
        pnum = primes[i]
        if (num % pnum === 0) return false
        if (pnum > sqrt) break;
    }
    return true;
}

var start = (new Date()).getTime(), end;
var ceil = 100;
for(var k = 2; k <= ceil; k++) {
    if (prime(k)) {
       primes.push(k)
       console.log(primes);
    }
}

total = primes.reduce(function(accum, pr) {return accum + pr})
end = (new Date()).getTime() -start;
// console.log(total);
console.log(end>=1000?(end/1000) +"s" : end +"ms");

//console.log(primes);
console.log(total);