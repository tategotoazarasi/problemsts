import {sum} from "../../src/leetcode/two-sum";

describe('TEST: Add Two Integers', () => {
	// 测试函数式写法
	test('Case 1', () => {
		expect(sum(12, 5)).toBe(17);
	});

	test('Case 2', () => {
		expect(sum(-10, 4)).toBe(-6);
	});
});