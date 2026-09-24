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

    set(key,value){
        const index = this._hash(key);

        // اگه خونه خالی بود، یه گره جدید بساز
        if(!this.buckets[index]){
            this.buckets[index] = new Node(key,value);
            this.count++;
            return;
        }

        // اگه خونه خالی نبود، توی لیست بگرد
        let current = this.buckets[index];

        while(current){
            // اگه کلید پیدا شد، مقدار رو به‌روزرسانی کن
            if(current.key === key){
                current.value = value;
                return;
            }
            // اگه به آخر لیست رسیدی، گره جدید اضافه کن
            if(!current.next){
                current.next = new Node(key,value);
                this.count++;
                return;
            }
            current = current.next;
        }
    }
}