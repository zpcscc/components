import { toString } from '@zpcscc/utils';
import { Button, Space, message, type ModalProps } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRecoilValue } from 'recoil';
import { componentStructureState } from 'src/form-generator/Editor/atoms';
import { separateToIntegrate } from 'src/form-generator/Render/utils';
import { SimpleCodeEditor } from 'src/other-components';
import { type ModelType } from '../type';

// 导出弹出框
const useExportModel = (setModalType: (modelType: ModelType | null) => void): ModalProps => {
  const { componentItems, structureItems } = useRecoilValue(componentStructureState);
  const componentItemsData = separateToIntegrate(componentItems, structureItems);
  const value = toString(componentItemsData, null, 2);

  return {
    title: '导出',
    onCancel: () => setModalType(null),
    footer: (
      <Space>
        <Button onClick={() => setModalType(null)}>取消</Button>
        <CopyToClipboard
          text={value}
          onCopy={() => {
            message.success('复制成功');
            setModalType(null);
          }}
        >
          <Button type='primary'>复制</Button>
        </CopyToClipboard>
      </Space>
    ),
    children: (
      <SimpleCodeEditor
        value={value}
        language='json'
        styled={`
          width: 100%;
          height: 500px;
          overflow: auto;
        `}
      />
    )
  };
};

export default useExportModel;
