import { Space, Switch } from '@dxsixpc/components';
import { ResultTextarea } from 'docs/react/common';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<boolean>(true);

  // css-in-js写法的自定义样式
  const styled = `
    color: #66ccff;
  `;

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Switch value={value} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
