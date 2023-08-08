import { Input, Space } from '@dxsixpc/components';
import { ResultTextarea } from 'docs/react/common';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string>('这是输入框');

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    color: #66ccff;
  `;

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Input value={value} placeholder={'请输入内容'} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
