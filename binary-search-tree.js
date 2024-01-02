class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while(currentNode) {
    if(val < currentNode.val) {
      if(!currentNode.left){
        currentNode.left = newNode;
        return this;
      }
      currentNode= currentNode.left;
    } else if (val>currentNode.val){
      if(!currentNode.right) {
        currentNode.right = newNode;
        return this;
      }
      currentNode=currentNode.right;
    } else {
      return this;
    }
  }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if(!currentNode) {
      this.root = new Node(val);
      return this;
    }
    if(val < currentNode.val){
      if(!currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
      } else if (val> currentNode.val) {
      if(!currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right)
    } else {
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current=this.root;
    while(current){
      if(current.val === val) {
        return current;
      } else if (current.val > val){
        current = current.left;
      }else {
        current = current.right;
      }
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(!current) {
      return undefined;
    }
    if(current.val === val) {
      return current;
    } else if(val < current.val){
      return this.insertRecursively(val, currentNode.left);
    } else {
      return this.findRecursively(val, current.right)
    }
    }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let vistedArray = [];

    const traverse = (node)=> {
      if(node) {
        vistedArray.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return vistedArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let vistedArray = [];

    const traverse = (node)=> {
      if(node) {
        traverse(node.left);
        vistedArray.push(node.val);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return vistedArray;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let vistedArray = [];

    const traverse = (node)=> {
      if(node) {
        traverse(node.left);
        traverse(node.right);
        vistedArray.push(node.val);
      }
    };
    traverse(this.root);
    return vistedArray;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let vistedArray = [];
    const queue = [];

    if(this.root) {
      queue.push(this.root);
      while (queue.length > 0) {
        const current = queue.shift();
        vistedArray.push(current.val);
        if(current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right)
        }
      }
    }
    return vistedArray;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
