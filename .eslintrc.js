// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@dxsixpc/configs/eslint-config/react'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    // 使用更具有描述性的名称。这里关闭
    'unicorn/prevent-abbreviations': 'off',
    // 不允许使用 array的reduce方法。这里关闭
    'unicorn/no-array-reduce': 'off',
    // 不允许使用 new Array()声明数组。这里关闭
    'unicorn/no-new-array': 'off',
    // 不允许使用 array的forEach。这里管理
    'unicorn/no-array-for-each': 'off',
    // 在属性上使用析构函数变量。这里关闭
    'unicorn/consistent-destructuring': 'off',
    // 名称校验，这里关闭
    'import/named': 'off',
    'unicorn/new-for-builtins': 'off',
  },
};
