'use strict';

// Testing requirements are minimum 2 tests per method: normal and edge case.
import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';
import { preOrderTraversal } from '../lib/traversals';

const bstFinal = new BinarySearchTree();
bstFinal.insert(new Node(10));
bstFinal.insert(new Node(15));
bstFinal.insert(new Node(8));
bstFinal.insert(new Node(16));

// console.log(bstFinal.find(10));
// console.log(bstFinal.find(16));
// console.log(bstFinal.find(100));

describe('This is a testing suite to test the functionality of the binarySearchTree constructor and methods', () => {
  test('', () => {
    // expect();
  });
});
