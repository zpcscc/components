import {
  RadioGroup,
  Space,
  type OptionsConfigType,
  type RadioGroupProps
} from '@zpcscc/components';
import { useState, type FC } from 'react';
import { ResultTextarea } from '../../components';

const App: FC = () => {
  const [value, setValue] = useState<RadioGroupProps['value']>('');

  // css-in-js写法的自定义样式
  const styled = `
    .ant-radio-group{
      width: 400px;
    }
  `;

  const onChange = (value: RadioGroupProps['value']) => {
    setValue(value);
  };

  const optionsConfig: OptionsConfigType<'Radio'> = {
    type: 'Radio',
    defaultValue: '选项1',
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' }
    ]
  };

  return (
    <Space size={100} align='end'>
      <RadioGroup
        value={value}
        onChange={onChange}
        styled={styled}
        // 组件选项配置
        optionsConfig={optionsConfig}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
