import Stack from "./stack.js";

function isBalanced(expression){

    const stack  = new Stack();

    // تعریف جفت‌های باز و بسته
    const pairs = {
        '(':')',
        '{':'}',
        '[':']',
        '<':'>',
    };
    // تعیین اینکه کاراکتر باز هست یا بسته
    const openers = Object.keys(pairs);
    const closers = Object.values(pairs);

    for(let char of expression){
        if(openers.includes(char)){
            // اگر علامت باز بود → بذار تو استک
            stack.push(char);
        }else if(closers.includes(char)){
            if(stack.isEmpty()){
                return false; // استک خالی → علامت بسته‌ی اضافی
            }

            const lastOpener = stack.pop();
            if(pairs[lastOpener] !== char){
                return false;// جفتشون یکی نیست
            }
        }
    }
    // بعد از بررسی همه‌ی کاراکترها، استک باید خالی باشه
    return stack.isEmpty();
}

console.log('expression');
console.log(isBalanced("{[()]}"));        // true
console.log(isBalanced("({[]})"));        // true
console.log(isBalanced("({[})"));         // false
