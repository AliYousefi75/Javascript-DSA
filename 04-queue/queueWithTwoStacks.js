import Stack from "../03-stack/stack.js";

class QueueWithTwoStacks{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.count = 0;
    }

    enqueue(value){
        this.stack1.push(value);
        this.count++;
        return this;
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty!'
        }

        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop())
            }
        }
        this.count--;
        return this.stack2.pop()
    }

    peek(){
        if(this.isEmpty()){
            return 'Queue is empty!';
        }

        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.peek()
    }

    isEmpty(){
        return this.count ===0;
    }

    size(){
        return this.count;
    }

}


const queue = new QueueWithTwoStacks();
console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.size())
