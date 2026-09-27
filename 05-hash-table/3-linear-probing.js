
class LinearProbing{
    constructor(size = 7){
        this.size = size;
        this.key = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.count = 0;
    }

    _hash(key){
        return key % this.size
    }
}
