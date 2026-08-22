

class CircularQueue{
    constructor(capacity=5){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    enqueue(value){
        if(this.isFull()){
            return "Queue is full!";
        }
        this.items[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        this.count++;

    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        const removed = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.count--;
        return removed;
    }

    peek(){
        if(this.isEmpty()){
            return("Queue is empty!");
        }
        return this.items[this.front];
    }

    isEmpty(){
        return this.count === 0;
    }

    isFull(){
        return this.count === this.items.length;
    }

    size(){
        return this.count;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is empty!');
            return;
        }
        let result = '';
        let index = this.front;
        for(let i =0;i<this.count;i++){
            result += this.items[index];
            if(i<this.count-1)result += ' -> ';
            index = (index + 1) % this.items.length;
        }
        console.log(result);
    }

    printArray(){
        console.log(this.items)
    }
}


// تست
const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue()
queue.dequeue()
queue.enqueue(60)
queue.dequeue()
queue.printArray(); 
console.log(queue.isFull()); 