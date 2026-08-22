

class CircularQueue{
    constructor(capacity=5){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }
}