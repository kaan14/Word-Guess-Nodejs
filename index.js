/*The completed game should meet the following criteria:


The completed game should be able to receive user input using the inquirer or prompt npm packages. Your solution should have, at minimum, three files:


index.js: The file containing the logic for the course of the game, which depends on Word.js and:


Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses


Letter.js should not require any other files.
Word.js should only require Letter.js
HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console/*/





//install modules here

var inquirer = require("inquirer"); 
var fs = require("fs"); 
var letterjs = require("./letter.js"); 
var wordjs = require("./word.js"); 

var word = new Word(); 
var game = new Game(); 






   //create a function game() 
   function playGame(){
      
      inquirer.prompt(
         {
            type: "command",
            name: 
         }  
      ])
      
      this.start = function()
         if
      }
      
   }



