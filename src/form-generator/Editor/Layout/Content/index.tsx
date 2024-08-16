import { useDroppable } from '@dnd-kit/core';
import { getUuid } from '@zpcscc/utils';
import { type FC } from 'react';
import { useRecoilState } from 'recoil';
import { componentStructureState, currentState } from 'src/form-generator/Editor/atoms';
import { Render } from 'src/form-generator/Render';
import { copyItem, deleteItem, getFieldConfig } from '../utils';
import ContentHeader from './ContentHeader';
import { ContentLayoutWrapper, ContentPlaceholderWrapper, ContentWrapper } from './Styled';

// 中间画布内容区域
const Content: FC = () => {
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const isInRoot = Boolean(structureItems.some((item) => item?.id === currentId));
  const { setNodeRef } = useDroppable({ id: 'root', disabled: isInRoot });
  return (
    <ContentLayoutWrapper>
      <ContentHeader />
      <ContentWrapper>
        <div ref={setNodeRef}>
          {componentItems?.length ? (
            <Render
              componentItems={componentItems}
              structureItems={structureItems}
              editorProps={{
                currentId,
                onSelect: (id) => setCurrent({ fieldConfig: getFieldConfig(id), currentId: id }),
                onDelete: (id) => {
                  setCurrent({ fieldConfig: undefined, currentId: undefined });
                  setComponentStructure((componentStructure) => deleteItem(componentStructure, id));
                },
                onCopy: (id) => {
                  const newId = getUuid(4, `${id.split('-')[0]}-`);
                  setCurrent({ fieldConfig: getFieldConfig(id), currentId: newId });
                  setComponentStructure((componentStructure) =>
                    copyItem(componentStructure, id, newId)
                  );
                }
              }}
            />
          ) : (
            <ContentPlaceholderWrapper>点击/拖拽左侧栏的组件进行添加</ContentPlaceholderWrapper>
          )}
        </div>
      </ContentWrapper>
    </ContentLayoutWrapper>
  );
};

export default Content;
