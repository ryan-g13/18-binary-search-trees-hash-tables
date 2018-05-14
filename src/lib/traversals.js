'use strict';


const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  console.log(`Visiting a node with value ${rootNode.value}`);
  
  preOrderTraversal(rootNode.left);  
  preOrderTraversal(rootNode.right);
  return undefined;
};

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
