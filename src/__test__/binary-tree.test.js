'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';
import { preOrderTraversal } from '../lib/traversals';

const bstFinal = new BinarySearchTree();
bstFinal.insert(new Node(10));
bstFinal.insert(new Node(5));
bstFinal.insert(new Node(15));
bstFinal.insert(new Node(12));
bstFinal.insert(new Node(18));
bstFinal.insert(new Node(16));
bstFinal.insert(new Node(19));

// console.log(bstFinal.find(10));
// console.log(bstFinal.find(16));
// console.log(bstFinal.find(100));

describe('Testing this.remove-- check console log for proofs', () => {
  test('#find and #remove', () => {
    console.log('BEFORE REMOVAL');
    preOrderTraversal(bstFinal.root);
    bstFinal.remove(18);
    console.log('REMOVING 18');
    preOrderTraversal(bstFinal.root);
    bstFinal.remove(15);
    console.log('REMOVING 15');
    preOrderTraversal(bstFinal.root);
    bstFinal.remove(10);
    console.log('REMOVING 10');
    preOrderTraversal(bstFinal.root);
  });
});
