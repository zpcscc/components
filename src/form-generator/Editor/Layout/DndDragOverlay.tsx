import { defaultDropAnimationSideEffects, DragOverlay } from '@dnd-kit/core';
import { Button, Form } from 'antd';
import { type FC } from 'react';
import { createPortal } from 'react-dom';
import { renderItem, SortableContainer } from 'src/form-generator/Render';
import {
  type ComponentItemType,
  type ComponentMapType,
  type FieldConfigType,
  type StructureItemType,
} from 'src/form-generator/types';

type DndDragOverlayProps = {
  isNew: boolean;
  componentItems: ComponentItemType[];
  activeId?: string | null;
  currentId?: string;
  fieldConfig?: FieldConfigType;
  componentMap?: ComponentMapType;
  structureItem?: StructureItemType;
};

// 用于拖动时，显示组件
const DndDragOverlay: FC<DndDragOverlayProps> = (props) => {
  const { activeId, currentId, isNew, fieldConfig, componentMap, structureItem, componentItems } =
    props;
  return createPortal(
    <DragOverlay
      // 拖动结束后的放置动画
      dropAnimation={{
        sideEffects: defaultDropAnimationSideEffects({
          styles: { active: { opacity: '0.5' } },
        }),
      }}
    >
      {activeId ? (
        isNew ? (
          <Button className='w-100px'>{fieldConfig?.label}</Button>
        ) : (
          <Form layout='vertical'>
            <SortableContainer id={structureItem?.id} editorProps={{ currentId }}>
              {renderItem({
                structureItem,
                componentItems,
                componentMap,
                editorProps: { currentId },
              })}
            </SortableContainer>
          </Form>
        )
      ) : null}
    </DragOverlay>,
    document.body,
  );
};

export default DndDragOverlay;
