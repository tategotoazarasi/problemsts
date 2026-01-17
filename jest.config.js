module.exports = {
	preset           : 'ts-jest',
	testEnvironment  : 'node',
	roots            : ['<rootDir>/tests'], // 测试文件放在 tests 目录
	collectCoverage  : true,      // 自动生成测试覆盖率报告
	coverageDirectory: "coverage",
};