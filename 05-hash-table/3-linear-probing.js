
class LinearProbing{
    constructor(size = 7){
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.count = 0;
    }

    _hash(key){
        return key % this.size
    }

    set(key,value){
        let index = this._hash(key);

        // تا وقتی خونه پر باشه و کلید تکراری نباشه
        while(this.keys[index] !== null && this.keys[index] !== key){
            index = (index+1) % this.size;
        }

        // اگه کلید تکراری بود، مقدار رو به‌روزرسانی کن
        if(this.keys[index] === key){
            this.values[index] = value;
            return;
        }

        // اگه خونه خالی بود، اضافه کن
        this.keys[index] = key;
        this.values[index] = value;
        this.count++;
    }
}


const ht = new LinearProbing(7);
ht.set(22, "A");
ht.set(15, "B");
ht.set(8, "C");
ht.set(1, "D");
ht.set(29, "E");

console.log(ht.keys);
console.log(ht.values);