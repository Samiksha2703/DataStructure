let OrderedListBussinessLogic = require('./OrderedListBussinessLogic.js');
let readline = require('readline-sync');
let orderedlist = new OrderedListBussinessLogic();
let data = "";

//taking user input to perform operation 
function choice(){
        console.log("Enter 1 : ReadFile  2 : WriteFile 3 : Exit");
            let input = readline.question("Enter your choice from above : ");
    switch (input) {

    case "1":
        orderedlist.read();
        break;

    case "2":
        orderedlist.write();
        break;
    
    case "3":
        flag = false;
        console.log("Exist");
        break;
    }
}
choice();
