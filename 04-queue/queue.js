
class Queue{
    constructor(){
        this.items =[];
    }

    enqueue(value){
        this.items.push(value);// اضافه به انتها
    }

    dequeue(){
        if(this.isEmpty()) return 'Queue is empty!';
        return this.items.shift()// حذف از ابتدا
    }

    peek(){
        if(this.isEmpty()) return 'Queue is empty!';
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join(' -> '));
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
queue.print();