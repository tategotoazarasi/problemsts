export function countBinarySubstrings(s: string): number {
	let cnt: number = 0;
	let c           = s[0];
	let list        = new Array<number>();
	for (const char of s) {
		if (char == c) {
			cnt++;
		} else {
			list.push(cnt);
			cnt = 1;
		}
		c = char;
	}
	list.push(cnt);
	let ans: number = 0;
	for (let i = 0; i < list.length - 1; i++) {
		ans += Math.min(list[i], list[i + 1]);
	}
	return ans;
}