function hash(key,size){
    let total = 0;
    for(let i = 0; i < key; i++){
        total += key.charCodeAt(i);
    }
    return total % size
}

hash('ali', 10);