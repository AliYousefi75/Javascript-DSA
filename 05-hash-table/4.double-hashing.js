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
}