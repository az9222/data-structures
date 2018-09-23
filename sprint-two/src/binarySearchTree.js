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
        // if there is no root node, return false
        // save the current node into a variable CURRENT
        var currentNode = this.value;
        if (currentNode.value === value) {
            return true;
        }
        while (currentNode && currentNode.value !== value) {
            if (value < currentNode.value) {
                this.left = currentNode;
            } else if ( value > currentNode.value) {
                this.right = currentNode;
            } else {
                return true;
            } 
        }
        return false;
    }
    
    // depthFirstLog() {
    //     //set currentNode to this.node
    //     var currentNode = this.value;
    //     //while a currentNode exists
    //     while (currentNode) {
    //         //if value is less than currentnode value, apply the callback
    //         if (currentNode.value < )
    //         //if value is more than current node value, apply the callback
    //     }
    // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
