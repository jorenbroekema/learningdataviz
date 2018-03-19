function mergeSort(arr){
    //if there is only 1 item (or less), we are done with the halving process, stop running the rest of the code
    if(arr.length < 2) return arr;

    var array1 = arr.slice(0,arr.length/2);
    var array2 = arr.slice(arr.length/2, arr.length);

    //Keep doing mergeSort (halving the array) until you have only 1 number left
    return merge(mergeSort(array1), mergeSort(array2));
}

//Take in two sorted arrays, and merge them in a sorted manner
function merge(array1, array2){
    var result = [];
    while(array1.length && array2.length){
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }
    if(array1.length) result = result.concat(array1);
    else result = result.concat(array2);
    return result;
}

console.log(mergeSort([15,2,7,1,12,19,16,18,14,5,7,9,21,6,8,3,4]));