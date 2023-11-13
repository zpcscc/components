import { Text } from '@zpcscc/components';
import type { FC } from 'react';

const App: FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    .ant-typography {
      color: #66ccff;
    }
  `;
  return <Text styled={styled}>{'这是文本展示'}</Text>;
};

export default App;
