let readline = require('readline-sync');
class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedListOperations {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addfront(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let odlHead = this.head
            this.head = new Node(value)
            odlHead.prev = this.head
            this.head.next = odlHead
        }
    }

    addlast(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    search(value) {
        let flag = 0;
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                flag = 1;
                console.log("Entered element is found in linkedlist : " + value)    
            }
            currentNode = currentNode.next;
        }
        if (flag == 0 )
        console.log("Entered element is not found");
    }

    display() {
        let curr = this.head;
        let string = "";
        while (curr){
            string += curr.value + " ";
            curr = curr.next;
        }
        return string;
    }
}

module.exports = LinkedListOperations;


