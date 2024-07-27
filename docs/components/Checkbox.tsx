import { Checkbox, Input, Space } from '@zpcscc/components';
import { useState, type FC } from 'react';
import ResultTextarea from './ResultTextarea';

const App: FC = () => {
  const [value, setValue] = useState<boolean>(true);

  // css-in-js写法的自定义样式
  const styled = `
    width: 500px;
  `;

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <Space size={100} align='end'>
      <Checkbox
        value={value}
        onChange={onChange}
        // 前缀后缀支持文本与React.node
        prefix={<Input placeholder='这是前缀输入框' />}
        suffix={'这是后缀文本内容'}
        styled={styled}
        // 对内部的space组件进行配置
        spaceOptions={{ size: 5 }}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
