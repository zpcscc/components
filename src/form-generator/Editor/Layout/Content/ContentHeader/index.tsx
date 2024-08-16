import { Modal } from 'antd';
import { useState, type FC } from 'react';
import { useSetRecoilState } from 'recoil';
import Button from 'src/antd-components/Button';
import { componentStructureState } from 'src/form-generator/Editor/atoms';
import { ContentHeaderWrapper } from './Styled';
import useModelData from './modalData';
import { type ModelType } from './type';

// 中间区域画布头
const ContentHeader: FC = () => {
  const setComponentStructure = useSetRecoilState(componentStructureState);

  const [modalType, setModalType] = useState<ModelType | null>(null);
  const modalDataMap = useModelData(setModalType);
  const modalData = modalType ? modalDataMap[modalType] : {};

  return (
    <ContentHeaderWrapper size={[8, 16]} wrap>
      <Button onClick={() => setModalType('previewModel')}>预览</Button>
      <Button
        danger
        onClick={() => setComponentStructure({ componentItems: [], structureItems: [] })}
      >
        清空
      </Button>
      <Button onClick={() => setModalType('importModel')}>导入</Button>
      <Button type='primary' onClick={() => setModalType('exportModel')}>
        导出
      </Button>
      <Modal open={Boolean(modalType)} {...modalData} />
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
