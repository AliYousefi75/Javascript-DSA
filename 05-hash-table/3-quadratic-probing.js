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
}