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

    get(key){
        const index = this._hash(key);
        let current = this.buckets[index];

        while(current){
            if(current.key === key){
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    delete(key){
        const index = this._hash(key);
        let current = this.buckets[index];
        let prev = null;

        while(current){
            if(current.key === key){
                // اگه اولین گره بود
                if(prev === null){
                    this.buckets[index] = current.next;
                }else{
                // اگه وسط یا آخر لیست بود    
                    prev.next = current.next;
                }
                this.count--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;// پیدا نشد
    }
}



const ht = new HashTable(10);

// ۱. اضافه کردن
ht.set("ali", 25);
ht.set("reza", 30);
ht.set("sara", 28);
ht.set("maryam", 22);

console.log(ht.get("ali"));    // 25
console.log(ht.get("reza"));   // 30
console.log(ht.get("sara"));   // 28

// ۲. به‌روزرسانی
ht.set("ali", 26);
console.log(ht.get("ali"));    // 26

// ۳. حذف
ht.delete("reza");
console.log(ht.get("reza"));   // undefined

// ۴. کالیژن (اگه دو تا کلید هش یکسان داشته باشن)
ht.set("lai", 99);  // "lai" هم هشش با "ali" یکیه (310)
console.log(ht.get("ali"));    // 26
console.log(ht.get("lai"));    // 99

// ۵. تعداد
console.log(ht.count);         // 4
