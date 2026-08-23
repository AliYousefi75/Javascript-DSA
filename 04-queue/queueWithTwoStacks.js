import Stack from "../03-stack/stack.js";

class QueueWithTwoStacks{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.size = 0;
    }

    enqueue(value){
        this.stack1.push(value);
        this.size++;
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
        this.size--;
        return this.stack2.pop()
    }
    
}
