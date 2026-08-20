import Queue from "./queue.js";
import Stack from "../03-stack/stack.js"


function reverseQueue(queue){

    let stack = new Stack();

    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }

    while(!stack.isEmpty()){
        queue.enqueue(stack.pop())
    }
    return queue;
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print()

reverseQueue(queue);

queue.print(); // 40 -> 30 -> 20 -> 10