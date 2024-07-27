import { MonacoEditor, Space, type MonacoEditorProps } from '@zpcscc/components';
import { useState, type FC } from 'react';
import ResultTextarea from './ResultTextarea';

const App: FC<MonacoEditorProps> = () => {
  const defaultValue = `import { MonacoEditor } from '@zpcscc/components';

const App = () => {
  return <MonacoEditor height={400} language='javascript'/>;
};

export default App;
`;
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const onChange = (value?: string) => {
    setValue(value);
  };

  const spaceStyled = `
    display: flex;
    justify-content: space-between;
  `;

  const resultTextareaStyled = `
    textarea {
      width: 390px!important;
      height: 368px;
    }
  `;

  return (
    <Space styled={spaceStyled} align='end'>
      <MonacoEditor
        value={defaultValue}
        height={400}
        width={600}
        language='javascript'
        onChange={onChange}
      />
      <ResultTextarea value={value} styled={resultTextareaStyled} />
    </Space>
  );
};

export default App;
