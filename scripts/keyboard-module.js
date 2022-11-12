import guessLetter from "/scripts/index.js";

const keyboardKeyDefaultColour = "#818384";
const keyboardKeyAbsentColour = "#3A3A3C";
const keyboardKeyPresentColour = "#538D4E";

window.onload = function() {
    var keyboardModule = document.getElementById("keyboard-module");
    var keyboardRows = keyboardModule.children;

    for(var i=0; i<keyboardRows.length; i++){
        var row = keyboardRows[i];
        var rowKeys = row.children;

        for(var v=0; v<rowKeys.length; v++){
            var key = rowKeys[v];
            key.style.backgroundColor = keyboardKeyDefaultColour
            key.addEventListener("click", function(){
                pressKey(this.id)
            });
        }
    }
}

function pressKey (char) {
    var key = document.getElementById(char.toLowerCase());  
    if (!key) {
        return // no key for char 
    }

    var present = guessLetter(char);

    if (present) {
        letterPresent(char);
    }else {
        letterAbsent(char);
    }
}

window.addEventListener('keydown', function (e) {
   pressKey(e.key)
}, false);  

function letterPresent(char) {
    var key = document.getElementById(char.toLowerCase());  
    if (!key) {
        return // no key for char 
    }
    key.animate(
        [
            { transform: "scale(0.8)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 150,
        }
    );
    key.style.backgroundColor = keyboardKeyPresentColour;
}

function letterAbsent(char) {
    var key = document.getElementById(char.toLowerCase());  
    if (!key) {
        return // no key for char 
    }
    key.animate(
        [
            { transform: "scale(0.8)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 150,
        }
    );
    key.style.backgroundColor = keyboardKeyAbsentColour;
}

