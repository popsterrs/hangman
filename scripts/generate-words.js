// https://raw.githubusercontent.com/schmich/spicy-proton/master/corpus/nouns.txt
const words = ["apple", "orange", "pear", "bannana", "pineapple", "plum", "grape", "blueberry", "avocado"]

/*function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            callback(rawFile.responseText , rawFile.status);
        }
        else{
           callback('',rawFile.status);
        }
    };
      rawFile.send(null);
}

var txtFile = "/vendor/words.txt"
readTextFile(console.log, txtFile)
*/
export default function generateWord() {
    return words[Math.floor(Math.random() * words.length)];
}
