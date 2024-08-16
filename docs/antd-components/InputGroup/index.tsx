import { InputGroup, Space } from '@zpcscc/components';
import { useState, type FC } from 'react';
import { ResultTextarea } from '../../components';

const App: FC = () => {
  const [value, setValue] = useState<string[]>([]);

  // css-in-js写法的自定义样式
  const styled = `
    .ant-input-group{
      width: 400px;
    }
  `;

  const onChange = (value: string[]) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <InputGroup
        value={value}
        onChange={onChange}
        level={3}
        placeholders={['请输入...', '请输入...']}
        styled={styled}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
