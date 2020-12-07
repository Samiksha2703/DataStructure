class QueueBussinessLogics {

    constructor(){
        this.items = [];
        this.count = 0;
        this.size = 0;
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
        this.size++;
        return this.items[this.count - 1]
    }

    dequeue(){
        if(this.size === 0){
            return "Underflow.";    
        }
        else {
            this.size--;
            let deleteItem = this.items.shift();
            console.log("Delete item : "+deleteItem);
        }
    }

    printQueue(){
        let str = "";
        for (let i = 0; i< this.items.length; i++){
            str += this.items[i] +" ";
        }
        console.log("Elements in Queue : ");
        console.log(str);
    }
}
let readline = require('readline-sync');
module.exports = QueueBussinessLogics;