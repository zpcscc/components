import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'components';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '组件库',
    socialLinks: {
      github: `https://github.com/zpcscc/${name}`,
    },
    logo: 'https://zpcscc.top/img/logo.png',
  },
  favicons: ['https://zpcscc.top/img/favicon.ico'],
  alias: {
    src: resolve(__dirname, './src'),
    docs: resolve(__dirname, './docs'),
    [`@zpcscc/${name}`]: resolve(__dirname, './src'),
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
  extraBabelPlugins: ['@emotion/babel-plugin'],
  extraBabelPresets: [
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ],
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['src/**/*.tsx'],
  },
});
