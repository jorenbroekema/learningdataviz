function fibMemo(index, cache){
    cache = cache || [];

    if(cache[index]) return cache[index];
    else{
        if(index < 3) return 1;
        else{
            cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
        }
    }
    return cache[index];
}

// Bottom up version, just as fast as memoization O(n)
function fibBottomUp(index){
    if(index === 1 || index === 2) return 1;
    var cache = []; cache[1] = 1; cache[2] = 1;

    for (var i = 3; i <= index; i ++)
        cache[i] = cache[i-1] + cache[i-2];

    return cache[index];
}

console.log(fibMemo(1000));
console.log(fibBottomUp(1000));