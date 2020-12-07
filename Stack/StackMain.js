let readline = require('readline-sync');
let StackBussinessLogics = require('./StackBussinessLogics.js');
let stack = new StackBussinessLogics();
function choice() {
    let flag = true;
    while(flag == true){    
    console.log("1 : push");
    console.log("2 : pop");
    console.log("3 : display");
    let item = readline.question("Enter your choice from above : ");
    switch(item) {
        case "1":
             let stackcSize = readline.question("Enter the size of the stack : "); {
                 while (stackcSize !== 0) {
                     let element = readline.question("Enter the number to enter in the stack : ");
                     stack.push(element);
                     stackcSize--;
                 }
            }
            break;

            case "2":
                stack.pop();
            break;

            case "3":
                stack.display();
            break;

            default:
                flag = false;
                console.log("Exit");
             }
        }
    }
choice();
