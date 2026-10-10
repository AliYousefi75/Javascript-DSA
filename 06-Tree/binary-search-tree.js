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

    //BST findMin Method
    // findMin(node = this.root){
    //     // اگه درخت خالی بود
    //     if(!node) return null;

    //     // تا وقتی فرزند چپ داری، برو چپ
    //     while(node.left){
    //         node = node.left;
    //     }

    //     // حالا node چپ‌ترین گره‌ست
    //     return node.value;
    // }

    // findMin(node = this.root){

    //     if(!node) return Infinity;

    //     let left = this.findMin(node.left);
    //     let right = this.findMin(node.left);

    //     return Math.min(Math.min(left,right),node.value)
    // }

    findMin(node = this.root){
        if(!node) return null;

        let min = node.value;

        //برو چپ
        const leftMin = this.findMin(node.left);
        if(leftMin !== null && leftMin < min){
            min = leftMin
        }

        const rightMin = this.findMin(node.right);
        if(rightMin !== null && rightMin < min){
            min = rightMin
        }

        return min;
    }

    // BST findMax Method
    // findMax(node = this.root){
    //     if(!node) return null;

    //     while(node.right){
    //         node = node.right;
    //     }

    //     return node.value;
    // }

    findMax(node = this.root){
        if(!node) return -Infinity;

        const leftMax = this.findMax(node.left);
        const rightMax = this.findMax(node.right);

        return Math.max(Math.max(leftMax,rightMax),node.value)
    }

    // isSameTree(node1,node2){
    //     // هر دو null
    //     if(!node1 && !node2) return true;

    //     // یکی null، یکی نه
    //     if(!node1 || !node2) return false;

    //     // مقدارها فرق دارن
    //     if(node1.value !== node2.value) return false;

    //     // چپ و راست هر دو باید یکسان باشن
    //     return this.isSameTree(node1.left,node2.left) && 
    //             this.isSameTree(node1.right,node2.right);

    // }

        isSameTree(node1,node2){
            if(!node1 && !node2) return true;

            if(node1 !== null && node2 !== null){
                return node1.value === node2.value 
                && this.isSameTree(node1.left,node2.left)
                && this.isSameTree(node1.right,node2.right);
            }
            return false
        }

        isBST(node= this.root, min=-Infinity , max=Infinity){
            if(node == null){
                return true
            }

            if(node.value <min || node.value>max){
                return false;
            }

            return this.isBST(node.left , min,node.value -1)
            && this.isBST(node.right , node.value +1,max)
        }

        printKDistance(k,node = this.root){
            if(!node) return;

            if(k === 0){
                console.log(node.value);
                return;
            }

            this.printKDistance(k-1,node.left);
            this.printKDistance(k-1,node.right);
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
console.log(bst.findMin())
console.log(bst.findMax())
let bst2 = new BinarySearchTree()
bst2.insert(10);
bst2.insert(5);
bst2.insert(15); 
bst2.insert(3);
bst2.insert(7);
bst2.insert(12);
bst2.insert(20);
console.log(bst.isSameTree(bst.root,bst2.root))
console.log(bst.isBST())
bst.printKDistance(1)