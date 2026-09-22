function firstRepeatingChar(str){
    let seen  = new Set();

    for(let char of str){
        if(seen.has(char)){
            return char;
        }
        seen.add(char);
    }
    return null;
}

console.log(firstRepeatingChar('aalii'))