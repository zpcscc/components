import {
  Options,
  SimpleCodeEditor,
  Space,
  Text,
  type OptionsConfigType,
} from '@dxsixpc/components';
import { dataToString } from '@dxsixpc/utils';
import { useState, type FC } from 'react';

const App: FC = () => {
  const optionsConfig: OptionsConfigType = {
    type: 'Checkbox',
    defaultValue: ['选项1'],
    options: [
      { label: '选项1', value: '选项1' },
      { label: '选项2', value: '选项2' },
      { label: '选项3', value: '选项3' },
    ],
  };
  const [value, setValue] = useState<OptionsConfigType>(optionsConfig);

  // css-in-js写法的自定义样式
  const styled = `
    .ant-checkbox-group{
      width: 400px;
    }
  `;

  const onChange = (value: OptionsConfigType) => {
    setValue(value);
  };

  const resultTextareaStyled = `
    width: 440px;
    height: 400px;
  `;

  return (
    <Space size={100} align='end'>
      <Options
        value={value}
        onChange={onChange}
        styled={styled}
        optionsConfig={optionsConfig}
        inputOptions={{ size: 'middle' }}
      />
      <Space direction='vertical'>
        <Text>onChange返回的结果</Text>
        <SimpleCodeEditor
          value={dataToString(value, null, 2)}
          language={'json'}
          styled={resultTextareaStyled}
        />
      </Space>
    </Space>
  );
};

export default App;
