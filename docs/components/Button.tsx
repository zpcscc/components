import { Button } from '@zpcscc/components';
import { message } from 'antd';
import { type FC } from 'react';

const App: FC = () => {
  const onClick = () => {
    message.success('点击了按钮');
  };

  return (
    <Button styled={{ width: '150px', span: { color: 'red' } }} onClick={onClick}>
      {'这是红色按钮'}
    </Button>
  );
};

export default App;
