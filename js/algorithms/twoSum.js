// My version, time complexity O(n log n) for sorting + O(n) + a bit more depending on duplicate pairs
function twoSum(numArray, sum){
    numArray.sort(function(a,b){return a-b;})
    var left = 0, right = numArray.length-1; //index pointers starting at the start and end of the list
    var pairsArr = [];
    while(left < right){
        if(numArray[left] + numArray[right] > sum) right--; //too high? the right pointer needs to go further down then
        else if(numArray[left] + numArray[right] < sum) left++; //too low? the left pointer needs to go further up then
        else if(numArray[left] + numArray[right] === sum){ // bingo!
            pairsArr.push([numArray[left],numArray[right]]);

            // Duplicate pairs should be included so check for them
            var leftOffset = 1, rightOffset = -1;
            while(numArray[left+leftOffset] === numArray[left]){
                pairsArr.push([numArray[left],numArray[right]]);
                leftOffset++;
            }
            while(numArray[right+rightOffset] === numArray[right]){
                pairsArr.push([numArray[left],numArray[right]]);
                rightOffset--;
            }

            right--;
            left++;
        }
    }
    return pairsArr;
}

// My version with hashtable obj, time complexity O(2n) + a bit more depending on cycling through duplicate pairs
function twoSum2(numArray, sum){
    var pairsArr = [];
    var numObj = {};
    numArray.forEach(function(num){
        if(!numObj[num]) numObj[num] = 0;
        numObj[num]++
    });

    Object.keys(numObj).forEach(function(key){
        if(numObj[sum-key]){
            for(var i = 0; i < numObj[sum-key]*numObj[key]; i++) { //for each pair that can be made
                pairsArr.push([key, sum-key]); //push the pair to pairsArr
            }
            numObj[sum-key] = null; //set to null to avoid pairing again.
        }
    });
    return pairsArr;
}

// Lecture version --> doesn't work correctly.
function twoSum3(numArray, sum){
    var pairs = [];
    var hashTable = [];

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) !== -1) {
            pairs.push([ currNum, counterpart ]);
        }
        hashTable.push(currNum);
    }
    return pairs;
}

console.log(twoSum([12,10,10,10,9,7,5,3,3,3,2,2,2,1], 12));
console.log(twoSum2([12,10,10,10,9,7,5,3,3,3,2,2,2,1], 12));
console.log(twoSum3([12,10,10,10,9,7,5,3,3,3,2,2,2,1], 12));

// My first version works best because only 1 loop through the list is required compared to two loops in hash object example (setting the hash table + cycling through it).