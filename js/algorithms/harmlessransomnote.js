function harmlessRansomNote(noteText, magazineText){
    var wordsNote = noteText.split(" ");
    var wordsMagazine = magazineText.split(" ");

    for (var i = 0; i < wordsNote.length; i++){
        var matchFound = false;
        for (var j = 0; j < wordsMagazine.length; j++){
            if(wordsNote[i] === wordsMagazine[j]){
                wordsMagazine[j] = null;
                matchFound = true;
                break;
            }
        }
        if(!matchFound) return false;
    }
    return true;
}
// Time complexity: O(n^2) or O(n*m)

function harmlessRansomNote2(noteText, magazineText){
    var noteArr = noteText.split(" ");
    var magazineArr = magazineText.split(" ");
    var magazineObj = {};

    magazineArr.forEach(function(word){
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(function(word){
        if(magazineObj[word] > 0) magazineObj[word]--;
        else noteIsPossible = false;
    });

    return noteIsPossible;
}
// Time complexity: O(n) or O(n+m). This is better.

var note = "this is a secret note for you from a secret admirer";
var magazine = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you";
console.log(harmlessRansomNote(note, magazine));
console.log(harmlessRansomNote2(note, magazine));

