// export default class Stack{
//     constructor(){
//         this.items = [];
//     }

//     push(element){
//         this.items.push(element);
//     }

//     pop(){
//         if(this.items.length === 0){
//             return 'stack is empty';
//         }
//         return this.items.pop();
//     }

//     peek(){
//         if(this.items.length === 0){
//             return 'stack is empty';
//         }
//         return this.items[this.items.length-1];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     size(){
//         return this.items.length;
//     }

//     print(){
//         console.log(this.items.join(' -> '));
//     }
// }



// const stack = new Stack();

// console.log(stack.isEmpty()); // true

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print(); // 10 -> 20 -> 30

// console.log(stack.peek()); // 30
// console.log(stack.pop());  // 30
// console.log(stack.pop());  // 20

// stack.print(); // 10

// console.log(stack.size()); // 1
// console.log(stack.isEmpty()); // false




// ------------Stack-------------//
class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(value){
        this.items[this.count] =value;
        this.count++
    }
}