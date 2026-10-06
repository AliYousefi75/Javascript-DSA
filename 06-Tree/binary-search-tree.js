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

    // traversePreorder(node){
    //     const result = [];

    //     function traverse(node){
    //         if(!node)return;

    //         result.push(node.value);
    //         traverse(node.left)
    //         traverse(node.right)
    //     }
    //     traverse(this.root);
    //     return result;
    // }

    traversePreorder(node = this.root){
        if(!node) return ;
        console.log(node.value)
        this.traversePreorder(node.left)
        this.traversePreorder(node.right)
    }

    traverseInorder(node = this.root, result = []){
        if(!node)  return result ;

        this.traverseInorder(node.left,result);
        result.push(node.value);
        this.traverseInorder(node.right,result);

        return result;
    }

    traversePostorder(node = this.root , result=[]){
        if(!node) return result;

        this.traversePostorder(node.left, result);
        this.traversePostorder(node.right,result);
        result.push(node.value);

        return result;
    }

    height(node = this.root){
        // درخت خالی
        if(!node) return -1;

        // ارتفاع چپ و راست
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        // بیشترین + ۱
        return 1 + Math.max(leftHeight,rightHeight)
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
bst.traversePreorder()
console.log(bst.traverseInorder())
console.log(bst.traversePostorder())
console.log(bst.height())