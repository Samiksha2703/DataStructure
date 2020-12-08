let ParanthesisBusinessLogic = require('./ParanthesisBusinessLogic.js');
let readline = require('readline-sync');
let paranthesis = new ParanthesisBusinessLogic();
let str = readline.question("Enter your input : \n");
console.log(paranthesis.isMatchingBrackets(str));
