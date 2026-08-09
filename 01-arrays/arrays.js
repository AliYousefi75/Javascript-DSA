// ARRAYS //
let numbers =[10,20,30,40,50];

//خواندن
numbers[2] //30 //O(1) 

//تغییر مقدار
numbers[0] = 5; //O(1) 

//اضافه کردن در انتها
numbers.push(60); //O(1)

//حذف از انتها
numbers.pop(); //O(1)

//اضافه کردن در ابتدا
numbers.unshift(1); //O(n)

//حذف از ابتدا
numbers.shift(); //O(n)


//----------تمرین پیمایش Traversal
let arr =[10,20,30,40,50];
for (let i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}


// تمرین: یک آرایه داینامیک پیاده سازی کن که قادر به درج حذف یافتن و چاپ عناصر باشه
class DinamicArray {
    constructor(){
        this.count =0;
        this.items = new Array(4);
    }

    print(){
        for(let i = 0; i < this.count; i++){
            console.log(this.items[i])
        }
    }

    indexOf(item){
        for(let i = 0; i < this.count; i++){
            if(this.items[i] == item){
                return i;
            }
        }
        return -1
    }

    insert(item){
        if(this.items.length === this.count){
            let newArray = new Array(this.count*2);
            for(let i = 0; i < this.count; i++){
                newArray[i] = this.items[i]
            }
            this.items = newArray;
        }
        this.items[this.count] = item;
        this.count++;
    }

    removeAt(index){
        if(index < 0 || index >= this.count){
            return `your index is not true`
        }
        for(let i = index; i < this.count-1; i++){
            this.items[i] = this.items[i+1];
        }
        this.count--;
        this.items[this.count] = undefined;
    }
}

let arr = new DinamicArray();

arr.insert(10);
arr.insert(20);
arr.insert(30);
arr.insert(40);

arr.print();

arr.insert(50);
arr.print();

console.log(arr.indexOf(30));

arr.removeAt(2);
arr.print()


