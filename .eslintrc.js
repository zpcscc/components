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

    // 使用esm的格式，而不是commonjs。这里关闭。部分模块还是需要使用commonjs保证兼容性
    'unicorn/prefer-module': 'off',
    // 箭头函数移动到外部作用于。这里关闭。在react组件内，经常会使用到箭头函数
    'unicorn/consistent-function-scoping': 'off',
    // 不使用 null。这里关闭。实际上，与后台交互时，经常需要用到null。也更有语义化。
    'unicorn/no-null': 'off',
  },
};
