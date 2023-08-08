import { Select, Space, type OptionType } from '@dxsixpc/components';
import { ResultTextarea } from 'docs/react/common';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string>();

  // css-in-js写法的自定义样式
  const styled = `
    width: 300px;
    color: #66ccff;
  `;

  const onChange = (value: string) => {
    setValue(value);
  };

  const options: OptionType[] = [
    { label: '选项1', value: '选项1' },
    { label: '选项2', value: '选项2' },
    { label: '选项3', value: '选项3' },
  ];

  return (
    <Space size={100} align='end'>
      <Select
        value={value}
        placeholder={'请选择'}
        options={options}
        onChange={onChange}
        size={'large'}
        styled={styled}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
