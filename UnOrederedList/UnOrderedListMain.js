let UnOrderedListBussinessLogic = require('./UnOrderedListBussinessLogic.js');
let readline = require('readline-sync');
let unorderedlist = new UnOrderedListBussinessLogic();
let data = "";

//taking user input to perform operation
function choice(){
        console.log("Enter 1 : ReadFile  2 : WriteFile 3 : Exit");
            let input = readline.question("Enter your choice from above : ");
    switch (input) {
        
    case "1":
        unorderedlist.read();
        break;

    case "2":
        unorderedlist.write();
        break;
    
    case "3":
        flag = false;
        console.log("Exist");
        break;
    }
}
choice();
