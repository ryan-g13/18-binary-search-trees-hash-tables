'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

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
      return rootNode.value;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    return this._remove(this.root, value);
  }

  _remove(rootNode, value) {
    if (!rootNode) {
      return null;
    }
    if (value < rootNode.value) {
      this._remove(rootNode.left, value);
    } else if (value > rootNode.value) {
      this._remove(rootNode.right, value);
    } else {
      if (rootNode.left === null && rootNode.right === null) {
        rootNode.value = null;
        return this.root;
      }
      if (rootNode.left === null) {
        const temp = rootNode.right;
        rootNode.value = temp.value; 
        rootNode.right = temp.right; 
        rootNode.left = temp.left; 
        return this.root;
      } else if (rootNode.right === null) {
        const temp = rootNode.left;
        rootNode.value = temp.value; 
        rootNode.right = temp.right;
        rootNode.left = temp.left; 
        return this.root;
      }
      const temp = this.minValueNode(rootNode.right);
      rootNode.value = temp.value;
      this._remove(rootNode.right, temp.value);
    }
    return this.root;
  }

  minValueNode(node) { /*eslint-disable-line */
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

export default BinarySearchTree;
