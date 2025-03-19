import { useDroppable } from '@dnd-kit/core';
import { getUuid } from '@zpcscc/utils';
import { type FC } from 'react';
import { useRecoilState } from 'recoil';
import { componentStructureState, currentState } from 'src/form-generator/Editor/atoms';
import { Render } from 'src/form-generator/Render';
import { copyItem, deleteItem, getFieldConfig } from '../utils';
import ContentHeader from './ContentHeader';

// 中间画布内容区域
const Content: FC = () => {
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const isInRoot = Boolean(structureItems.some((item) => item?.id === currentId));
  const { setNodeRef } = useDroppable({ id: 'root', disabled: isInRoot });
  return (
    <div className='pt-0px px-8px pb-8px flex flex-col flex-grow flex-shrink overflow-hidden b-x-1px b-x-solid b-x-#e0e0e0'>
      <ContentHeader />
      <div className='flex-grow overflow-y-auto scrollbar-hide bg-#f6f5f6 p-8px'>
        <div className='h-full' ref={setNodeRef}>
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
                    copyItem(componentStructure, id, newId),
                  );
                },
              }}
            />
          ) : (
            <div className='color-#00000066 h-full u-center'>点击/拖拽左侧栏的组件进行添加</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
