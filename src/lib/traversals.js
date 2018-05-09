'use strict';

// Time - O(N) where n is the number of nodes
// Space - O(H) where h is the height of the tree
// Traversal path Root -> Left -> Right
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  console.log(`Visiting a node with value ${rootNode.value}`);
  
  preOrderTraversal(rootNode.left);  
  preOrderTraversal(rootNode.right);
  return undefined;
};

// Time - O(H) where n is the number of nodes
// Space - O(H) where h is the height of the tree
// Traversal path Left -> Right -> Root
const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  console.log(`Visiting a node with value ${rootNode.value}`);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal };
