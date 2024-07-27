import { Button, Space } from '@zpcscc/components';
import { message } from 'antd';
import { type FC } from 'react';

const App: FC = () => {
  // css-in-js写法的自定义样式
  const styled = `
    width: 100px;
    span {
      color: #66ccff;
    }
  `;

  const onClick = () => {
    message.success('点击了按钮');
  };

  return (
    <Space>
      <Button styled={styled} onClick={onClick}>
        {'这是按钮1'}
      </Button>
      <Button styled={styled} onClick={onClick}>
        {'这是按钮2'}
      </Button>
    </Space>
  );
};

export default App;
