import Stack from './stack.js'


function precedence(op){
    if(op === '+' || op === '-')return 1;
    if(op === '*' || op === '/')return 2;
    if(op === '^')return 3;
    return 0;
}

function infixToPostfix(expression){
    const stack = new Stack;
    let result ='';

    for (let char of expression){
        if(/[a-zA-Z0-9]/.test(char)){
            result += char;
        }else if(char === '('){
            stack.push(char);
        }else if(char === ')'){
            while(!stack.isEmpty() && stack.peek()!== '('){
                result += stack.pop();
            }
            stack.pop()
        }else if(['+' , '-', '*', '/', '^'].includes(char)){
            while(!stack.isEmpty() && precedence(stack.peek()) >= precedence(char)){
                result += stack.pop();
            }
            stack.push(char);
        }
    }

    while(!stack.isEmpty()){

        result += stack.pop();
    }

    return result;
}

console.log(infixToPostfix("3+4"));           // "34+"
console.log(infixToPostfix("3+4*5"));         // "345*+"
console.log(infixToPostfix("(3+4)*5"));       // "34+5*"
console.log(infixToPostfix("3*4+5"));         // "34*5+"
console.log(infixToPostfix("3+4*5-6"));       // "345*+6-"
console.log(infixToPostfix("(3+4)*(5-6)"));   // "34+56-*"
console.log(infixToPostfix("a+b*c"));         // "abc*+"
