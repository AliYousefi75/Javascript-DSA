

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
}