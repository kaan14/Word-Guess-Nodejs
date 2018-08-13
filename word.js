// contructor will contain letter bank
var letter = require("./letter");

var WordBank = function () {

    this.wordBank = ["string", "taste", "shelf", "fool", "excite", "rail", "release", "enjoy", "trade", "dorks", "girl", "sticks",
        "pretend", "relieved", "pickle", "volleyball", "plate", "puncture", "panoramic", "name", "motionless", "wail", "sad", "knowledge"];

    this.randomNumber = Math.floor(Math.random() * wordBank.length);


    //create a for look that checks letter.IswordResquested === true and sends a word
    if (letter.IsWordRequested) {
        // for (var i = 0; i < 1; i++){
        letter.LetterFunction(this.wordBank[this.randomNumber]);
        letter.IsWordRequested == false;
        // }

    }
}





module.exports = WordBank;

