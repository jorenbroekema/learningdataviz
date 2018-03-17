//My version.
function binarySearch(numArray, key){
    numArray = numArray.sort(function(a,b){return a-b});
    var midIndex = Math.floor(numArray.length/2);
    var mid = numArray[midIndex];

    if(key === mid) return true;
    else if (numArray.length === 1) return false;
    else if(key > mid) return binarySearch(numArray.slice(midIndex), key);
    else if(key < mid) return binarySearch(numArray.slice(0,midIndex), key);
}

//Lecture version.
function binarySearch2(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 43));
console.log(binarySearch2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 43));

// Identical functions apart from formatting and slice instead of splice. I assumed non-sorted array hence mine sorts first.