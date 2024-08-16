import { type FC } from 'react';
import { RecoilRoot } from 'recoil';
import { type ComponentItemType, type ComponentMapType } from 'src/form-generator/types';
import Layout from './Layout';

export type EditorProps = {
  // 外部传入的自定义组件对象
  componentMap?: ComponentMapType;
  // 值改变时
  onChange: (componentItems: ComponentItemType[]) => void;
};

const Editor: FC<EditorProps> = (props) => {
  return (
    <RecoilRoot>
      <Layout {...props} />
    </RecoilRoot>
  );
};

export default Editor;
