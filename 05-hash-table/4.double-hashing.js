const DELETED = new Symbol('DELETED');

class DoubleHashing {
    constructor(size = 7){
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.count = 0;
    }

    h1(key){
        return key % this.size;
    }

    h2(key){
        return 1 + (key % (this.size - 1));
    }

    set(key,value){
        let index = this.h1(key);
        let i =0;

        // تا وقتی خونه پر باشه و کلید تکراری نباشه
        while(this.keys[index] !== null && this.keys[index] !== DELETED && this.keys[index] !== key){
           i++;
           index = (this.h1(key) + i * this.h2(key)) % this.size; 

           // اگه کل آرایه رو گشتیم
           if(i >= this.size){
            return 'Hash table is full!';
           }
        }

        if(this.keys[index] === key){
            this.values[index] = value;
            return;
        }

        // اگه خونه خالی یا DELETED بود، اضافه کن
        this.keys[index] = key;
        this.values[index] = value;
        this.count ++;
    }

    get(key){
        let index = this.h1(key);
        let i =0;

        while(this.keys[index] !== null){
            if(this.keys[index] === key){
                return this.values[index];
            }

            i++;
            index = (this.h1(key) + i * this.h2(key)) % this.size;

            if(i >= this.size){
                return undefined;
            }
        }

        return undefined; //پیدا نشد
    }
}