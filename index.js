//discribe the game rules. for example; console.log("to start, enter "node letter.js start" + "\n\n you have to guess the leeters of the displayed word
// if you run out of guess #s, then you loose, otherwise you win. Lets type "node letter.js start" ")
console.log("\nto start the game, enter node index.js start" + "\nyou have to guess the letters of the displayed word if you run out of guess #s, then you loose, otherwise you win. Lets type to start 'node index.js start' "); 

//install modules here

var inquirer = require("inquirer"); 
var fs = require("fs"); 
var letterjs = require("./letter.js"); 
var wordjs = require("./word.js"); 

var word = new Word(); 
var game = new Game(); 
var wordDash = game.returnDash; 
console.log(wordDash); 

//get CLI commend here, use "process.argv.slice(3).join(" ")" if needed.

var arg1 = process.argv.slice(2).join(" "); 

   //create a function game() 
   function playGame(){
      if( arg1 === "start" || "start game" && !gameOver){
      
         
         playGame(); 
      }
      
   }




