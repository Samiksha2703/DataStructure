let readline = require('readline-sync');
let LinkedListOperations = require('./LinkedListBussinessLogic.js');
let link = new LinkedListOperations();
function choice() {
        let value = "";
        let flag = true;
        while(flag == true){   
        console.log("1 : addfront");
        console.log("2 : addlast");
        console.log("3 : search");
        console.log("4 : display");
        let item = readline.question("Enter your choice from above : ");
        switch(item) {
            case "1":
                value = readline.question("Enter the number to add linkedlist at front: ");
                link.addfront(value);
            break;
    
            case "2":
                value = readline.question("Enter the number to add linkedlist at last: ");
                link.addlast(value);
            break;
    
            case "3":
                value = readline.question("Enter the number to search linkedlist: ");
                link.search(value);
            break;
    
            case "4":
                console.log(link.display());
            break;
    
            default:
                flag = false;
                console.log("Exit");
            break;
        }
    }
}
choice();
