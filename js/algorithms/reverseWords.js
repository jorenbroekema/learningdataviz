// My version. Time complexity O(n)
function reverseWords(string){
    var words = string.split(" ");
    for (var i = 0; i < words.length; i++){
        var newWord = [];
        for(var j = words[i].length - 1; j >= 0; j--){
            newWord.push(words[i][j]);
        }
        words[i] = newWord.join("");
    }
    return words.join(" ");
}

// Lecture version. Time complexity O(n)
function reverseWords2(string){
    var wordsArr = string.split(" ");
    var reversedWordsArr = [];
    wordsArr.forEach ( function(word){
        var reversedWord = "";
        for(var i = word.length - 1; i >= 0; i--){
            reversedWord+= word[i];
        }
        reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join(" ");
}

console.log(reverseWords("this is a string of words"));
console.log(reverseWords2("this is a string of words"));

// Both algorithms are essentially identical apart from syntax / var names
// and slightly different methods used for string manipulation