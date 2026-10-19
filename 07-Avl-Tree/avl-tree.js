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
    // recursive insert method
    // insert(value){
    //     this.root = this._insert(this.root , value);
    // }

    // _insert(node,value){
    //     // اگه به برگ رسیدیم، گره جدید بساز
    //     if(!node){
    //         return new Node(value);
    //     }

    //     if(value<node.value){
    //         node.left = this._insert(node.left,value);
    //     }

    //     if(value>node.value){
    //         node.right = this._insert(node.right,value);
    //     }else{
    //         return node;
    //     }

    //     return node
    // }



    getHeight(node){
        if(!node)return 0;
        return node.height
    }
 
    getBalance(node){
        if(!node)return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node){
        node.height = 1+Math.max(this.getHeight(node.left),this.getHeight(node.right));
    }

    rotateRight(y){
        const x = y.left;
        const T2 = x.right;

        //چرخش
        x.right = y;
        y.left = T2;

        //آپدیت ارتفاع
        this.updateHeight(y);
        this.updateHeight(x);
        return x;// ریشه‌ی جدید
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        // چرخش
        y.left = x;
        x.right = T2;

        // آپدیت ارتفاع
        this.updateHeight(x);
        this.updateHeight(y);

        return y; // ریشه‌ی جدید
    }

    insert(value) {
    this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        // ۱. درج مثل BST معمولی
        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node; // تکراری قبول نمیشه
        }

        // ۲. آپدیت ارتفاع
        this.updateHeight(node);

        // ۳. بررسی توازن
        const balance = this.getBalance(node);

        // LL: چپ-چپ → چرخش راست
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // RR: راست-راست → چرخش چپ
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // LR: چپ-راست → چرخش چپ-راست
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // RL: راست-چپ → چرخش راست-چپ
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }


}