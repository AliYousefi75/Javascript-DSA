
// class Queue{
//     constructor(){
//         this.items =[];
//     }

//     enqueue(value){
//         this.items.push(value);// اضافه به انتها
//     }

//     dequeue(){
//         if(this.isEmpty()) return 'Queue is empty!';
//         return this.items.shift()// حذف از ابتدا
//     }

//     peek(){
//         if(this.isEmpty()) return 'Queue is empty!';
//         return this.items[0];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     size(){
//         return this.items.length;
//     }

//     print(){
//         console.log(this.items.join(' -> '));
//     }
// }

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.size());
// queue.print();


class Queue {
    constructor(){
        this.items =[];         // آرایه برای ذخیره عناصر
        this.count=0;           // تعداد عناصر (و ایندکس بعدی برای اضافه کردن)
        this.frontIndex =0;     // ایندکس اولین عنصر (برای حذف)
    }

    // 1. اضافه کردن به انتهای صف
    enqueue(value){
        this.items[this.count] = value;
        this.count++;
    }

    // 2. حذف از ابتدای صف
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty!';
        }
        const removed = this.items[this.frontIndex];
        this.items[this.frontIndex] = undefined;
        this.frontIndex++;
        return removed;
    }

    // 3. دیدن اولین عنصر (بدون حذف)
    peek(){
        if(this.isEmpty()){
            return 'Queue is empty!';
        }
        return this.items[this.frontIndex];
    }

    // 4. بررسی خالی بودن
    isEmpty(){
        return this.count === this.frontIndex;
    }

    // 5. تعداد عناصر
    size(){
        return this.count - this.frontIndex
    }


}