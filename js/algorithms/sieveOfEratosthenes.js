// My version --> O(2n) + O(log n)
function sieveOfEratosthenes(num){
    var isPrime = [];
    var returnArr = [];

    for(var i = 0; i <= num; i++) isPrime[i] = true;

    for(var i = 0; i < isPrime.length; i++){
        if(i === 0 || i === 1) isPrime[i] = false;
        else{
            var multiple = 2;
            while(i*multiple < isPrime.length){
                isPrime[i*multiple] = false;
                multiple++;
            }
        }
        if(isPrime[i]) returnArr.push(i);
    }
    return returnArr;
}

// Lecture version --> O(3n) + O(log n)
function sieveOfEratosthenes2(n){
    var primes = [];

    for(var i = 0; i <= n; i++) primes[i] = true;
    primes[0] = false;
    primes[1] = false;

    for(var i = 2; i <= Math.sqrt(n); i++){
        for(var j = 2; j*i <= n; j++){
            primes[i * j] = false;
        }
    }

    var result = [];
    for(var i = 0; i < primes.length; i++){
        if(primes[i]) result.push(i);
    }

    return result;
}

console.log(sieveOfEratosthenes(200));
console.log(sieveOfEratosthenes2(200));
// My version has 1 fewer loop, no need to loop a third time for pushing the results, this can be done in the 2nd loop.
// My version doesn't have the Math.sqrt(n) limiter in the 2nd loop which is a useful optimization!