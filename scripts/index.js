import generateWord from "/scripts/generate-words.js";
import {drawMan} from "/scripts/draw-canvas.js";

var word = generateWord();
var guessedLetters = [];
var incorrectGuesses = 0;
var correctGuesses = 0;
var possibleGuesses = 6;

document.getElementById("lives").textContent = possibleGuesses - incorrectGuesses + " lives remaining";

function createWordLetterElements() {
    for (var i = 0; i < word.length; i++) {
        var element = document.createElement("button");
        element.classList.add("word-module-button");
        //element.textContent = word[i].toUpperCase();
        element.textContent = " "
        document.getElementById("word-module").appendChild(element); 
    }
}

function revealLetter(char) {
    var wordModule = document.getElementById("word-module");
    var letters = wordModule.children;

    for(var i=0; i<letters.length; i++){
        var letter = letters[i];
        
        if (word[i] === char) {
            correctGuesses++
            letter.textContent = word[i];
        }
    }
    
    if (correctGuesses === word.length) {
        document.getElementById("result").textContent = "you win!";
        document.getElementById("game-over").style.display = "inline"; 
    }
}

export default function guessLetter(char) {
    if (word.includes(char) && incorrectGuesses < possibleGuesses) {
        if (!guessedLetters.includes(char)) {
            guessedLetters.push(char);
            revealLetter(char)
        }
        return true;
    } else {
        var key = document.getElementById(char.toLowerCase());  
        if (key && !guessedLetters.includes(char)) {
            incorrectGuesses++
            drawMan(incorrectGuesses);
            guessedLetters.push(char);
            document.getElementById("lives").textContent = possibleGuesses - incorrectGuesses + " lives remaining";
            console.log(incorrectGuesses)
        }


        if (incorrectGuesses >= possibleGuesses) {
            document.getElementById("result").textContent = "you lose!";
            document.getElementById("game-over").style.display = "inline";  
            return false;
        }

        return false;
    }
}

createWordLetterElements();

document.getElementById("restart").addEventListener("click", function() {
    location.reload();
});
