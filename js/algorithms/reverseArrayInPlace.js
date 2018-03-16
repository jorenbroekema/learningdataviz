//My version. Time complexity O(n/2)
function reverseArrayInPlace(arr){
    var leftIndex = 0;
    var rightIndex = arr.length-1;
    while(leftIndex < rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    return arr;
}

//Lecture version. Time complexity O(n/2). For loop until length/2 swap index with length-1-index.
function reverseArrayInPlace2(arr){
    for(var i = 0; i < arr.length / 2; i++){
        var tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
}

//No preference here, I think my version may be clearer in what it does from first impression but it is also more lines of code and 2 more variables used.
console.log(reverseArrayInPlace(["hello","world","what","a","great","planet"]));
console.log(reverseArrayInPlace2(["hello","world","what","a","great","planet"]));