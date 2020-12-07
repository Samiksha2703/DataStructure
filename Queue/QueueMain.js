let QueueBussinessLogics = require('./QueueBussinessLogics.js');    
let readline = require('readline-sync');
let queue = new QueueBussinessLogics();
let flag = true;
function choice(){
    while (flag == true){
        console.log("Enter 1 : Enqueue  2 : Dequeue  3 : PrintQueue");
            let input = readline.question("Enter your choice from above : ");
    
    switch (input) {
    case "1":
    let element = readline.question("Enter the number to add in the queue : ");
        queue.enqueue(element);
    break;

    case "2":
        queue.dequeue();
    break;
                
    case "3":
        queue.printQueue();
    break;
                        
    default:
        flag = false;
    console.log("Exit"); 
}    
}
}
choice();