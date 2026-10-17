class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // ← جدید! ارتفاع هر گره
    }
}

class AVLTree{
    constructor(){
        this.root = null;
    }
}