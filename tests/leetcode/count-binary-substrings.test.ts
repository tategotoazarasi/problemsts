import {countBinarySubstrings} from "../../src/leetcode/count-binary-substrings";

describe('TEST: 计数二进制子串', () => {
	// 测试函数式写法
	test('Case 1', () => {
		expect(countBinarySubstrings("00110011")).toBe(6);
	});

	test('Case 2', () => {
		expect(countBinarySubstrings("10101")).toBe(4);
	});
});
