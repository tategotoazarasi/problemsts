export function champagneTower(poured: number, query_row: number, query_glass: number): number {
	let glasses_fraction   = Array.from({length: 100}, () => new Array<number>(100).fill(0));
	glasses_fraction[0][0] = poured;
	for (let i = 0; i < 99; i++) {
		for (let j = 0; j <= i; j++) {
			let to_pour = glasses_fraction[i][j] - 1;
			if (to_pour > 0) {
				glasses_fraction[i + 1][j] += to_pour / 2;
				glasses_fraction[i + 1][j + 1] += to_pour / 2;
			}
		}
	}
	return Math.min(1, glasses_fraction[query_row][query_glass]);
}