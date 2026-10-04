class Node{
    constructor(value){
        this.value = value;
        this.left = null;   // فرزند چپ
        this.right = null;  // فرزند راست
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;   // ریشه درخت
        this.count =0;      // تعداد گره‌ها
    }

    insert(value){

        const newNode = new Node(value);

        // اگه درخت خالی بود
        if(!this.root){
            this.root = newNode;
            this.count++;
            return this;
        }

        // از ریشه شروع کن
        let current = this.root;
        while(true){
            // اگه مقدار تکراری بود
            if(value === current.value){
                return undefined;// تکراری قبول نمیشه
            }

            // اگه کوچکتر بود → برو چپ
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    this.count++;
                    return this;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    this.count++;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value){

        // اگه درخت خالی بود
        if(!this.root){
            return null;
        }

        // از ریشه شروع کن
        let current = this.root;

        while(current){
            //پیدا شد
            if(value === current.value){
                return current;
            }

            // برو چپ
            if(value<current.value){
                current = current.left;
            }
            // برو راست
            else{
                current = current.right;
            }
        }
        return null;
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);
console.log(bst.root);