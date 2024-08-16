import { toData } from '@zpcscc/utils';
import { message, type ModalProps } from 'antd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { componentStructureState } from 'src/form-generator/Editor/atoms';
import { integrateToSeparate } from 'src/form-generator/Render';
import { type ComponentItemType } from 'src/form-generator/types';
import SimpleCodeEditor from 'src/other-components/SimpleCodeEditor';
import { type ModelType } from '../type';

// 导入弹出框
const useImportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const setComponentStructure = useSetRecoilState(componentStructureState);
  const [value, setValue] = useState<string>();

  return {
    title: '导入',
    cancelText: '取消',
    okText: '确定',
    onCancel: () => setModalType(null),
    onOk: () => {
      const componentItems = toData(value) as ComponentItemType[];
      if (Array.isArray(componentItems)) {
        setComponentStructure(integrateToSeparate(componentItems));
        setModalType(null);
      } else {
        message.error('格式错误');
      }
    },
    children: (
      <SimpleCodeEditor
        value={value}
        language='json'
        onChange={setValue}
        styled={`
          & > div {
            width: 100%;
            height: 300px;
            overflow: auto!important;
            border: 1px solid rgb(217, 217, 217);
          }
        `}
      />
    )
  };
};

export default useImportModel;
