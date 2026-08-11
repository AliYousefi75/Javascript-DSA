
// // LINKED LIST //

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail =null;
//         this.length = 0;
//     }
// }

// //ساخت نود و اضافه کردن چند عنصر
// const list = new LinkedList();
// console.log(list);

// const firstNode = new Node(10);
// list.head = firstNode;
// list.tail = firstNode;
// list.length =1;

// const secondNode = new Node(20);
// list.tail.next = secondNode;
// list.tail = secondNode;
// list.length =2;

// const thirdNode = new Node(30);
// list.tail.next = thirdNode;
// list.tail = thirdNode;
// list.length=3;

// console.log(list)





// LINKED-LIST OPERATION //
class Node {
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addLast(value){
        const newNode = new Node(value);

        //اگر لیست خالی بود
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addFirst(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    indexOf(value){
        // از اول لیست شروع کن
        let current = this.head;
        let index =0;

        //تا وقتی به انتها نرسیدی
        while(current){
        //اگر مقدار گره برابر با مقدار مورد نظر بود
            if(current.value === value){
                return index;
            }
        //برو به گره بعدی
            current = current.next;
            index++;
        }
        return -1;
    }

    contains(value){
        // از اول لیست شروع کن
        let current = this.head;

        // تا وقتی به انتها نرسیدی
        while(current){
            if(current.value === value){
                return true;
            }
            // برو به گره بعدی
            current = current.next;
            // اگر کل لیست رو گشتی و پیدا نشد
        }
        return false;
    }

    removeFirst(){
        // اگر لیست خالی بود
        if(!this.head){
            return null;
        }

        //گره اول رو ذخیره کن (برای برگردوندن مقدارش)
        const removed = this.head;
        //اگر فقط یک گره در لیست بود
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        //اگر چند گره داشت
            this.head = this.head.next;
        }
        this.length--;
        //مقدار گره حذف شده رو برگردون
        return removed.value;
    }

    getPrevious(){
        // اگر لیست خالی یا فقط یک گره داشت
        if(!this.head || this.length === 1){
            return null;
        }
        // از اول شروع کن
        let current = this.head;
        // تا وقتی به گره قبل از آخر نرسیدی
        while(current.next !== this.tail){
            current = current.next;
        }
        // گره قبل از آخر رو برگردون
        return current;
    }

    removeLast(){
        // اگر لیست خالی بود
        if(!this.head){
            return null;
        }
        // اگر فقط یک گره داشت
        if(this.length === 1){
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        }

        // اگر چند گره داشت
        // برو به گره قبل از آخر
        //روش اول
        // let current = this.head;
        // while(current.next !== this.tail){
        //     current = current.next;
        // }
        //روش دوم
        const previous = this.getPrevious()

        // گره آخر رو ذخیره کن
        const removed = this.tail;
        // گره قبل از آخر رو به null وصل کن
        //روش اول
        // current.next = null;
        //روش دوم
        previous.next = null;
        // tail رو آپدیت کن به گره قبل از آخر
        //روش اول
        // this.tail = current;
        //روش دوم
        this.tail = previous;
        // طول رو کم کن
        this.length--;
         // مقدار حذف شده رو برگردون
        return removed.value;
    }

    size(){
        return this.length;
    }

    toArray(){
        // آرایه خالی بساز
        const result =[];

        // از اول لیست شروع کن
        let current = this.head;
        // تا وقتی به انتها نرسیدی
        while(current){
        // مقدار گره رو به آرایه اضافه کن (دستی!)
            result[result.length] = current.value;
        // برو به گره بعدی
            current = current.next;
        }
        // آرایه رو برگردون
        return result;
    }

    reverse(){
        // اگر لیست خالی یا یک گره داشت، کاری نکن
        if(!this.head || this.length ===1){
            return;
        }
        //سه تا اشاره‌گر تعریف کن
        let prev = null;
        let current = this.head;
        let next = null;
        //حلقه بزن تا به انتها برسی
        while(current){
            // گره بعدی رو ذخیره کن (قبل از اینکه مسیر رو عوض کنی)    
            next = current.next;
            // اشاره‌گر current رو به prev برگردون
            current.next = prev;
            // یک قدم جلو برو
            prev = current;
            current = next;
        }
        // head و tail رو عوض کن
        this.tail = this.head;
        this.head =prev;
    }

 

}

const myList = new LinkedList();
myList.addLast(10);
myList.addLast(20);
myList.addLast(30);
myList.addLast(40);
// myList.addFirst(5);
// console.log(myList.length);
// console.log(myList.head.value);
// console.log(myList.tail.value);
// console.log(myList);
// console.log(myList.indexOf(10));
// console.log(myList.contains(10));
// console.log(myList.removeFirst())
// console.log(myList.tail.value);
// myList.removeLast();
// console.log(myList.tail.value);
// console.log(myList.size());
// console.log(myList.toArray());
// let prev = myList.getPrevious();
// console.log(prev.value);
// console.log(myList.removeLast())
// console.log(myList.toArray());
// console.log(myList.removeLast())
// console.log(myList.toArray());
console.log(myList.toArray());
myList.reverse()
console.log(myList.toArray());


