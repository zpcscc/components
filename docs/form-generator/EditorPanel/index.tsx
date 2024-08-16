import { Editor, type ComponentItemType } from '@zpcscc/components';
import { type FC } from 'react';
import { EditorWrapper } from './Styled';

type EditorProps = {
  value: string;
};

// 编辑器
const EditorPanel: FC<EditorProps> = () => {
  const onChange = (pageData: ComponentItemType[]) => {
    console.log(pageData);
  };

  return (
    <EditorWrapper>
      <Editor onChange={onChange} />
    </EditorWrapper>
  );
};

export default EditorPanel;
