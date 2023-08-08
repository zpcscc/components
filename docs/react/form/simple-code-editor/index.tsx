import { SimpleCodeEditor, Space, type SimpleCodeEditorProps } from '@dxsixpc/components';
import { ResultTextarea } from 'docs/react/common';
import { useState, type FC } from 'react';

const App: FC<SimpleCodeEditorProps> = () => {
  const defaultValue = `
import { SimpleCodeEditor } from '@dxsixpc/components';

const App = () => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  return <SimpleCodeEditor value={value} language='javascript' onChange={onChange}/>;
};

export default App;
`;
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  const spaceStyled = `
    display: flex;
    justify-content: space-between;
  `;

  const resultTextareaStyled = `
    textarea {
      width: 400px!important;
      height: 300px;
    }
  `;

  return (
    <Space styled={spaceStyled} align='end'>
      <SimpleCodeEditor
        value={value}
        language='javascript'
        onChange={onChange}
        styled={{ width: '400px', height: '300px' }}
      />
      <ResultTextarea value={value} styled={resultTextareaStyled} />
    </Space>
  );
};

export default App;
