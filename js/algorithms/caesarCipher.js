// My version, time complexity O(n)
function caesarCipher(str, num){
    num = num % 26;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();
    str = str.split("");

    for(var i = 0; i < str.length; i++){
        if(str[i] !== " "){
            var currentIndex = alphabet.indexOf(str[i]);
            var newIndex = currentIndex + num;
            var newLetterIndex;
            if(newIndex < 0) newLetterIndex = alphabet.length + newIndex;
            else newLetterIndex = newIndex % alphabet.length;
            str[i] = alphabet[newLetterIndex];
        }
    }
    return str.join("");
}


// Time complexity O(n), lecture version
function caesarCipher2(str, num){
    num = num % 26;
    var lowerCaseStr = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var newString = "";

    for(var i = 0; i < lowerCaseStr.length; i++){
        var currentLetter = lowerCaseStr[i];
        if(currentLetter === " "){
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = (currentIndex + num);
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;

        if (str[i] === str[i].toUpperCase()) newString += alphabet[newIndex].toUpperCase();
        else newString += alphabet[newIndex];
    }
    return newString;
}

console.log(caesarCipher('zoo keeper', 55));
console.log(caesarCipher('ape chipmunk', -40));

console.log(caesarCipher2('zoo keeper', 55));
console.log(caesarCipher2('ape chipmunk', -40));

// I like my version a bit better.
// Shorter, less (unnecessary) variables because it's splits the input string, changes letters, then join and return it.
// Also fewer operations