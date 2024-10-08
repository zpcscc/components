import { InputNumber, Space } from '@zpcscc/components';
import { useState, type FC } from 'react';
import { ResultTextarea } from '../../components';

const App: FC = () => {
  const [value, setValue] = useState<string | number | null>(null);

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
  `;

  const onChange = (value: string | number | null) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <InputNumber value={value} placeholder={'请输入数字'} onChange={onChange} styled={styled} />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
