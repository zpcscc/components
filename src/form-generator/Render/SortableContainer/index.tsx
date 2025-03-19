import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { type FC, type ReactNode } from 'react';
import { type EditorPropsType } from 'src/form-generator/types';

export type SortableContainerProps = {
  children: ReactNode;
  id?: string;
  editorProps?: EditorPropsType;
};

/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */
const SortableContainer: FC<SortableContainerProps> = (props) => {
  const { id = '', children, editorProps } = props;
  const { onSelect, onCopy, onDelete, currentId } = editorProps || {};
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });
  const isFocus = currentId === id;

  return (
    <div
      key={id}
      id={id}
      className='min-w-200px b-1px b-dashed pt-10px px-8px pb-0px mb-8px bg-white relative hover:border hover:b-solid hover:border-[#4096ff]'
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ?? '',
        opacity: isDragging ? 0.5 : undefined,
        ...(isFocus && {
          outline: '2px solid rgb(64, 158, 255)',
          borderColor: 'rgb(255, 255, 255)',
        }),
      }}
      onFocus={(e) => {
        const target = e.target as HTMLDivElement;
        onSelect?.(target.id);
      }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {children}
      <div
        className='absolute z-20 bottom--2px right--2px h-24px b-rd-tl-8px bg-#409eff u-center py-0px px-4px'
        style={{ display: isFocus ? 'flex' : 'none' }}
      >
        <div
          className='color-white py-0px px-4px cursor-pointer'
          role='button'
          onClick={() => onDelete?.(id)}
        >
          <DeleteOutlined />
        </div>
        <div
          className='color-white py-0px px-4px cursor-pointer'
          role='button'
          onClick={() => onCopy?.(id)}
        >
          <CopyOutlined />
        </div>
      </div>
    </div>
  );
};

export default SortableContainer;
