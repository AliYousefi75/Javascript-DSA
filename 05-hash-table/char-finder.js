function findFirstNonRepeatingCharacter(str){
    const charCount = new Map();

    // ۱. شمارش تکرار هر کاراکتر
    for(let char of str){
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // ۲. پیدا کردن اولین کاراکتر غیرتکراری
    for (let char of str) {
        if(charCount.get(char) === 1){
            return char;
        }
    }

    return null;
}

console.log(findFirstNonRepeatingCharacter("aabbcdde"));    // "c"
console.log(findFirstNonRepeatingCharacter("leetcode"));    // "l"