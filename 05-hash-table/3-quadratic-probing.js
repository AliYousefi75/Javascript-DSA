const DELETED =Symbol('DELETED');

class QuadraticProbing{
    constructor(size){
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.count = 0;
    }

    _hash(key){
        return key % this.size;
    }

    set(key,value){
        let index = this._hash(key);
        let i =0;

        // تا وقتی خونه پر باشه و کلید تکراری نباشه
        while(this.keys[index] !== null && this.keys[index] !== DELETED && this.keys[index] !== key){
            i++;
            index = (this._hash(key)+i*i)%this.size; // ← Quadratic Probin

            // اگه کل آرایه رو گشتیم
            if (i >= this.size) {
                return "Hash table is full!";
            }
        }

        if(this.keys[index] === key){
            this.values[index] === value;
            return; 
        }

        this.keys[index] = key;
        this.values[index] = value;
        this.count++;
    }

    get(key){
        let index = this._hash(key);
        let i =0;
        let startIndex = index;


        while(this.keys[index] !== null){

            if(this.keys[index] === key){
                return this.values[index]
            }

            i++;
            index = (this._hash(key) + i * i) % this.size;

            // اگه دور کامل زدیم
            if(i >= this.size){
                return undefined;
            }
        }
        return undefined; // پیدا نشد
    }

    delete(key){
        let index = this._hash(key);
        let i =0;

        // تا وقتی به خونه خالی (null) نرسیدیم
        while(this.keys[index] !== null){
            if(this.keys[index] === key){
                // پیدا شد → علامت‌گذاری کن
                this.keys[index] = DELETED;
                this.values[index] = null;
                this.count--;
            }
            i++;
            index = (this._hash(key) + i*i) % this.size;

            if(i >= this.size){
                return false;
            }
        }
        return false; //پیدا نشد
    }

}






const ht = new QuadraticProbing(7);
ht.set(22, "A");
ht.set(15, "B");
ht.set(8, "C");
ht.delete(8);

console.log(ht.get(22)); // "A"
console.log(ht.get(15)); // "B"
console.log(ht.get(8));  // "C"
console.log(ht.get(99)); // undefined