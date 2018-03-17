// O(n), both versions are identical
function getMean(arr){
    var total = 0;
    arr.forEach(function(num){
        total += num;
    });
    return total/arr.length;
}
// My version. Time complexity: O(n log n) for the sort + O(n/2)
function getMedian(arr){
    arr.sort(function(a,b){return a - b});
    var left = 0, right = arr.length;
    while(left < right){
        left++; right--;
        if(left === right) return arr[left];
    }
    return (arr[left] + arr[right])/2;
}

// Lecture version. Time complexity: O(n log n) for the sort + O(1) so this is much better
function getMedian2(arr){
    arr.sort(function(a,b){return a - b});
    var median;
    if(arr.length % 2 !== 0){
        median = arr[Math.floor(arr.length/2)];
    }else{
        median = (arr[arr.length/2] + arr[(arr.length/2)-1])/2;
    }
    return median;
}

// O(2n)
function getMode(arr){
    var numFrequency= {}; //init hash-table object
    arr.forEach(function(num){
        if(!numFrequency[num]) numFrequency[num] = 1;
        else numFrequency[num]++;
    });

    var mode = [];
    var highestFreq = 0;
    Object.keys(numFrequency).forEach(function(key){
        if(numFrequency[key] > highestFreq){
            mode = [key];
            highestFreq = numFrequency[key];
        }else if(numFrequency[key] === highestFreq) mode.push(key);
    });
    if(Object.keys(numFrequency).length === mode.length) return null; //if every number has the same frequency, no mode
    return mode;
}

// Lecture version. Identical to mine with different looping method. Same time complexity.
function getMode2(arr){
    var modeObj= {}; //init hash-table object
    arr.forEach(function(num){
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    var maxFrequency = 0;
    var modes = [];
    for (var num in modeObj){
        if(modeObj[num] > maxFrequency){
            modes = [num];
            maxFrequency = modeObj[num];
        }else if (modeObj[num] === maxFrequency) modes.push(num);
    }
    if(modes.length === Object.keys(modeObj).length) return null;
    return modes;
}

// O(3.5n) + O(n log n) >> my version.
// O(2.5n) + O(n log n) + O(1) >> lecture version.
function meanMedianMode(arr){
    return{
      'mean':getMean(arr),
      'median':getMedian(arr),
      'mode':getMode(arr)
    };
}

console.log(meanMedianMode([6,-3,2,7,-5,21,6,-9,13,7,8,1,0,-12,5,7]));
