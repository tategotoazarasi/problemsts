import {TreeNode} from "../common";

function getHeight(node: TreeNode): [number, boolean] {
	let h = 1;
	let lh = 0;
	let rh = 0;
	let rb = true;
	let lb = true;
	if (node.left != null) {
		[lh, lb] = getHeight(node.left);
		if (!lb) {
			return [0, false];
		}
	}
	if (node.right != null) {
		[rh, rb] = getHeight(node.right);
		if (!rb) {
			return [0, false];
		}
	}
	if (Math.abs(lh - rh) > 1) {
		return [0, false];
	}
	h += Math.max(lh, rh);
	return [h, true];
}

export function isBalanced(root: TreeNode | null): boolean {
	if (root == null) {
		return true;
	}
	let [h, b] = getHeight(root);
	return b;
}