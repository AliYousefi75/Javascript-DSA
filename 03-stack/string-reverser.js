import Stack from "./stack.js";

function stringReverser(str){
    const stack  = new Stack();

    for(let char of str){
        stack.push(char);
    }

    let reversed ='';
    while(!stack.isEmpty()){
        reversed += stack.pop()
    }
    return reversed;

}

console.log(stringReverser("hello"));      // "olleh"
console.log(stringReverser("JavaScript")); // "tpircSavaJ"
console.log(stringReverser("12345"));      // "54321"
console.log(stringReverser(""));           // ""
console.log(stringReverser("a"));          // "a"