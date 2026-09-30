const DELETED = new Symbol('DELETED');

class DoubleHashing {
    constructor(size = 7){
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.count = 0;
    }
}