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
}