//make a new node Class
//left = null, right = null , value = value
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    //this.root goes in the constructor
    constructor() {
        this.root = null; //<- come back to this
    }

    insert(value) {
        var inputNode = new Node(value);
        //if there is no root
        if (this.root === null) {
            //new input value (new Node) becomes the root
            this.root = inputNode;
            //return this
            return this;
        }

        //while there is a root
        while (this.root) {
        //if value < root
        if (value < this.root.value) {
            //if the root has no left
            if (this.root.left === null) {
                //the newNode becomes the new left
                this.root.left = inputNode;
                return this;
            }
            //if the root has a left, the root becomes the
            this.root = this.root.left;
            } else if (value > this.root.value) {
               if (this.root.right === null) {
                   this.root.right = inputNode;
                   return this;
               }
               this.root = this.root.right;
            }
        }
    }
    
    //contains
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
