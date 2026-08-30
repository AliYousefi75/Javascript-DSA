

class PriorityQueue {
    constructor(capacity = 5){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.count = 0;
    }

    add(value){
        // if(this.isFull()){
        //     return 'Queue is full!'
        // }
        // if(this.isEmpty()){
        //     this.items[0] = value;
        //     this.count++;
        //     return this;
        // }

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
        // if(this.isEmpty()){
        //     return 'Queue is empty!';
        // }
        const removedItem = this.items[0];

        for(let i=0 ; i<this.count-1 ; i++){
            this.items[i] = this.items[i+1];
        }
        this.items[this.count -1] = undefined;
        this.count --;
        return removedItem;
    }

    
}


const pq = new PriorityQueue(5);
pq.add(5)
pq.add(8)
pq.add(2)
pq.add(1)
pq.add(10)
console.log(pq.remove())
console.log(pq.add())