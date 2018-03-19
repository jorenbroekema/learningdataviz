// My version. O(n^2) as is normal
function bubbleSort(numArr){
    var done = false;
    while(!done){
        done = true;
        for(var i = 0; i < numArr.length-1; i++){
            if(numArr[i] > numArr[i+1]){
                var temp = numArr[i];
                numArr[i] = numArr[i+1];
                numArr[i+1] = temp;
                done = false;
            }
        }
    }
    return numArr;
}

//Lecture version. O(n^2) as is normal
function bubbleSort2(array){
    for(var i = array.length; i > 0; i--){
        for(var j = 0; j < i; j++){
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([8,2,5,3,5,8,-23,0,1,2,5,723,1]));
console.log(bubbleSort2([8,2,5,3,5,8,-23,0,1,2,5,723,1]));

//Lecture version is a bit better because requires a bit less looping
//because the first for loop decreases 1 in size for each bubble that gets put at the end of the array,
//making the sorting faster over time. This matters for large arrays!