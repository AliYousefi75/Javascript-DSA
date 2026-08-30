

class PriorityQueue {
    constructor(capacity = 5){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.count = 0;
    }

    add(value){
        if(this.isFull()){
            return 'Queue is full!'
        }
        if(this.isEmpty()){
            this.items[0] = value;
            this.count++;
            return this;
        }

        let insertIndex = this.count;
        for(let i = this.count-1; i>=0 && value<this.items[i];i--){
            this.items[i+1] = this.items[i];
            insertIndex = i;
        }
        this.items[insertIndex] =value;
        this.count++;
        return this;

    }

    remove(){
        if(this.isEmpty()){
            return 'Queue is empty!';
        }
        const removedItem = this.items[0];

        for(let i=0 ; i<this.count-1 ; i++){
            this.items[i] = this.items[i+1];
        }
        this.items[this.count -1] = undefined;
        this.count --;
        return removedItem;
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty(){
        return this.count===0;
    }

    isFull(){
        return this.count === this.capacity;
    }

    size(){
        return this.count;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty!");
            return;
        }

        let result = "";
        for(let i=0 ;i<this.count ;i++){
            result += this.items[i];
            if(i <this.count-1) result += ' -> ';
        }
        console.log(result);
    }

    
}


const pq = new PriorityQueue(5);


pq.add(10);
pq.add(30);
pq.add(20);
pq.add(50);
pq.add(40);

pq.print(); // 10 -> 20 -> 30 -> 40 -> 50


console.log(pq.remove()); // 10
pq.print(); // 20 -> 30 -> 40 -> 50


pq.add(25);
pq.print(); // 20 -> 25 -> 30 -> 40 -> 50


pq.remove(); // 20
pq.add(15);
pq.print(); // 15 -> 25 -> 30 -> 40 -> 50


pq.remove(); // 15
pq.add(35);
pq.print(); // 25 -> 30 -> 35 -> 40 -> 50