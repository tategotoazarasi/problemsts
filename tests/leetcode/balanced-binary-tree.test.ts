import {TreeNode}   from "../../src/common";
import {isBalanced} from "../../src/leetcode/balanced-binary-tree";

describe('TEST: balanced-binary-tree', () => {
	test('Case 1', () => {
		let node3: TreeNode = new TreeNode(3);
		let node9: TreeNode = new TreeNode(9);
		let node20: TreeNode = new TreeNode(20);
		let node15: TreeNode = new TreeNode(15);
		let node7: TreeNode = new TreeNode(7);
		node20.left = node15;
		node20.right = node7;
		node3.left = node9;
		node3.right = node20;
		expect(isBalanced(node3)).toBe(true);
	});

	test('Case 2', () => {
		let node1: TreeNode = new TreeNode(1);
		let node2: TreeNode = new TreeNode(2);
		let node3: TreeNode = new TreeNode(3);
		let node4: TreeNode = new TreeNode(4);
		let node2r: TreeNode = new TreeNode(2);
		let node3r: TreeNode = new TreeNode(3);
		let node4r: TreeNode = new TreeNode(4);
		node3.left = node4;
		node3.right = node4r;
		node2.left = node3;
		node2.right = node3r;
		node1.left = node2;
		node1.right = node2r;
		expect(isBalanced(node1)).toBe(false);
	});

	test('Case 3', () => {
		expect(isBalanced(null)).toBe(true);
	});
})