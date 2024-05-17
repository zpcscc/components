import { Title } from '@zpcscc/components';
import { type FC } from 'react';

const App: FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    .ant-typography {
      color: #66ccff;
    }
  `;
  return <Title styled={styled}>{'这是标题'}</Title>;
};

export default App;
