class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addLast(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
    }

    addFirst(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
    }

    removeFirst(){
        if(!this.head){
            return null;
        }

        const removed = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removed.vlaue;
    }

    removeLast(){

        if(!this.head){
            return null;
        }

        let removed = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removed.value
    }

   


    
    



}


let doubly = new DoublyLinkedList();
doubly.addFirst(10);
doubly.addFirst(20);
doubly.addLast(30);
doubly.addLast(40);
console.log(doubly.length);
