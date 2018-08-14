var wordjs = require("./word.js")

var word = new Word();

var Game = function () {
    this.dash = [];
    for (var i = 0; i < word.wordBank.returnWord.length; i++) {
        this.dash.push("-"); 
    }
    this.returnDash = this.dash; 
}

module.exports = Game();