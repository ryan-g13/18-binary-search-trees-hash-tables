'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(H) -> O(lg n)
  // Space : O(H) -> O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    // Vinicio -  1 - do I have to go left?
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      // Vinicio - 2 - can I move to the right branch?
      rootNode.right = nodeToInsert;
    } else {
      // Moving to the right branch
      this._insert(rootNode.right, nodeToInsert);
    }
  }


  // Time : O(H) -> O(lg n)
  // Space : O(H) -> O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  // Write a remove(value) research docs in other languages 
  remove(root, value) {
    if (!this.root) {
      return null;
    }
    if (value < root.value) {
      root.left = this.remove(root.left, value);
    } else if (value > root.value) {
      root.right = this.remove(root.right, value);
    } else {
      if (root.left === null) {
        const temp = root.right;
        this.root = temp; // root of tree??
        // remove node here aka root ?delete children
        return root;
      } else if (root.right === null) {
        const temp = root.left;
        // same as above
        return temp;
      }
      const temp = this.minValueNode(root.right);
      root.value = temp.value;
      root.right = this.remove(root.right, temp.value);
    }
    return root;
  }

  // helper function to find the minimum value
  minValueNode(node) { /*eslint-disable-line */
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

export default BinarySearchTree;
