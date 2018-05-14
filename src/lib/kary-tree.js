'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)
  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      // Vinicio - this will be replaced with ANY OTHER OPERATION
      console.log(`Visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
  // TODO: Find(value) iterate through using a breadth first approach return first value, 
  // if not included return null
  // Time : O(H) -> O(lg n)
  // Space : O(H) -> O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    const queue = new Queue();
    queue.enqueue(rootNode);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value === value) {
        return currentNode;
      }
      console.log(`Visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  // TODO: toString(string) iterate over all nodes breadthfirst and 
  // concatenate into a string with new lines
  toString() {
    if (!this.root) {
      return null;
    }
    let ansString = '';
    return this._toString(this.root);
  }

  _toString(rootNode) {
    const queue = new Queue();
    queue.enqueue(rootNode);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      ansString += `${currentNode.value}/n`;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
  // TODO: toArray(array) depth first traversal push all elements into an array. 
  // utilize a stack and queue to 
  toArray(array) {
    
  }
}
