class StackBussinessLogics {
    constructor() {
        this.items = [];
        this.top = -1;
        this.size = 0;
    }
    
    push(element) {
        this.top += 1;
        this.items[this.top] = element;
        this.size++;
        this.top - 1;
    }

    pop() {
        if (this.size === 0) {
            console.log("Stack is underflow.");
        }
        else {
            this.size--;
            let deleteItem = this.items[this.top];
            this.top -= 1;
            console.log("Delete Item is : "+deleteItem)
            return deleteItem;
        }
    }

    display() {
        let str = "";
        for (let i = 0; i < this.size; i++){
            str += this.items[i] + " ";
        }        
        console.log(str);
    }
}
let readline = require('readline-sync');
module.exports = StackBussinessLogics;