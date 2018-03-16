function isPalindrome(string){
    string = string.toLowerCase(); //case insensitive
    string = string.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,""); //remove punctuation of any kind
    string = string.replace(/\s/g, ""); //remove all whitespace

    var counter = 0;
    for(var i = string.length-1; i >= 0; i--){
        if(string[i] !== string[counter])return false;
        counter++;
    }
    return true;
}
// Time complexity O(n). This one uses regex replace to get rid of invalid characters

// Example 2, using split -> reverse -> join compare, also O(n) time complexity
function isPalindrome2(string){
    string = string.toLowerCase(); //case insensitive
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(function(char){ // for each character
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char); //get rid of the character if it's not in the list of eligible chars
    });

    return lettersArr.join('') === lettersArr.reverse().join(''); // return result of comparing the word with the reverse version of it
}

var text = "race car";
var text2= "abcdecba";
var text3= "Madam, I'm Adam";
console.log(isPalindrome(text3));