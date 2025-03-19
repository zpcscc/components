import { useSortable } from '@dnd-kit/sortable';
import { getUuid } from '@zpcscc/utils';
import { Button as AntdButton } from 'antd';
import { useMemo, type FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  componentStructureState,
  currentState,
  leftSortableItemsState,
} from 'src/form-generator/Editor/atoms';
import { type FieldConfigType } from 'src/form-generator/types';
import { getFieldConfig } from '../utils';

type ItemProps = {
  fieldConfig: FieldConfigType;
};

// 左侧组件item
const Button: FC<ItemProps> = (props) => {
  const { fieldConfig } = props;
  const { label, componentItem } = fieldConfig;
  const [{ currentId }, setCurrent] = useRecoilState(currentState);
  const [{ componentItems }, setComponentStructure] = useRecoilState(componentStructureState);
  const leftSortableItems = useRecoilValue(leftSortableItemsState);
  const id = leftSortableItems.find((item) => item.split('-')[0] === componentItem.id) || 'input';
  const { listeners, setNodeRef, attributes, isDragging } = useSortable({
    id,
  });
  const isComponentItem = useMemo(
    () => (currentId ? Boolean(componentItems.some((item) => item.id === currentId)) : false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentId, componentItems],
  );

  const onClick = () => {
    const newId = getUuid(4, `${componentItem.id}-`);
    setCurrent({
      fieldConfig: getFieldConfig(id),
      currentId: newId,
    });
    setComponentStructure(({ componentItems, structureItems }) => ({
      componentItems: [...componentItems, { ...componentItem, id: newId }],
      structureItems: [...structureItems, { id: newId }],
    }));
  };

  return (
    <AntdButton
      className='w-100px'
      style={{ opacity: isDragging ? 0.5 : undefined }}
      onClick={onClick}
      ref={isComponentItem ? undefined : setNodeRef}
      {...attributes}
      {...listeners}
    >
      {label}
    </AntdButton>
  );
};

export default Button;
