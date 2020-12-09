let LinkedListOperations = require('../LinkedList/LinkedListBussinessLogic.js');
let readline = require('readline-sync');
let fs = require('fs');
let link = new LinkedListOperations();

//function to perform read and write function
class OrderedListBussinessLogic {

    //method to read file    
    read() {
        let readData = fs.readFileSync('./ReadFile.txt');
        let arrayRead = readData.toString().split(' ');
        console.log("File read successfully");
        console.log("The file contents :");
        let readOutput = arrayRead.join();
        console.log(readOutput);
        return readData;
    }

    //method to write file
    write() {
        let value = "";
        let Data = fs.readFileSync('./ReadFile.txt');
        let arrayWrite = Data.toString().split(' ');

        //adding read file data into linkedlist 
        for (let i = 0; i < arrayWrite.length; i++) {
            link.addlast(arrayWrite[i]);
        }

        //asking user to make extra changes in the read file
        let yesNo = readline.question("Do you want add some other data ?\nEnter 1 for yes and 0 for no : \n")
        if (yesNo == 1) {
            console.log("1 : addfront");
            console.log("2 : addlast");
            console.log("3 : search");
            console.log("4 : display");
            console.log("5 : exit");
            let item = readline.question("Enter your choice from above : ");
            switch (item) {
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
                    console.log("Exit");
                    break;
            }
        }

        //writing and displaying data with changes from user
        let output = link.display();
        // console.log(output);
        let writeArray = output.toString().split(' ');
        let sortArray = writeArray.sort();
        let readOutput = sortArray.join();
        let writeOutput = fs.writeFileSync('./ReadFile.txt', readOutput);
        console.log("File written successfully");
        console.log("The file contents :");
        console.log(readOutput);
    }
}
module.exports = OrderedListBussinessLogic;