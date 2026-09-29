const DELETED =Symbol('DELETED');

class QuadraticProbing{
    constructor(size){
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.vlaues = new Array(size).fill(null);
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
}