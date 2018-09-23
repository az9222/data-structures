//make a new node Class
//left = null, right = null , value = value
class BinarySearchTree {
    //this.root goes in the constructor
    constructor(value) {
        this.value = value; //start root at value they give you
        this.left = null;
        this.right = null;
    }

    insert(value) {
        var inputNode = new BinarySearchTree(value);
        //if there are duplicates return und
        if (value === this.value) {
            return undefined;
        } else if (value < this.value) { 
            //if the root has no left
            if (this.left === null) {
                //the newNode becomes the new left
                this.left = inputNode;
                return this;
            } else {
                //if the root has a left, the inputu becomes a left
                this.left.insert(value)
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = inputNode;
                return this;
            } else {
                this.right.insert(value)
            }
        }     
    }

    contains(value) {
        //set variable to root
        let currentNode = this;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if ( value > currentNode.value) {
                currentNode = currentNode.right; 
            } 
        }
        return false;
    }
    
    depthFirstLog(cb) {
        //start at root which i will set this equal to currentNode and apply cb
        cb(this.value);
        //apply the cb currentNode.left
        if (this.left) {
            //apply depthFirstLog since the left is still a BST
            this.left.depthFirstLog(cb)
        }
        //app the cb to currentNode.right
        if (this.right) {
            this.right.depthFirstLog(cb);
        }
    }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
