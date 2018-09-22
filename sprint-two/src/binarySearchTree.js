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
        //keep track of the value of the root node
        //while there is a node
        //if there are duplicates return und
        if (value === this.value) {
            return undefined;
        } else if (value < this.value) { 
            //if value < root
            //if the root has no left
            if (this.left === null) {
                //the newNode becomes the new left
                this.left = inputNode;
                return this;
            } else {
                //if the root has a left, the root becomes the
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

    contains() {

    }
    
    depthFirstLog() {

    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
