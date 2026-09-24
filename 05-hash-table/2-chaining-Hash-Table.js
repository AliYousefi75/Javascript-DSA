class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable{
    constructor(size){
        this.size = size;
        this.buckets = new Array(size); // هر خونه لیست پیوندیه
        this.count = 0; // تعداد عناصر
    }

    _hash(key){
        let total =0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
}