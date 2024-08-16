import { type UniqueIdentifier } from '@dnd-kit/core';
import { isEmpty } from '@zpcscc/utils';
import { type StructureItemType } from 'src/form-generator/types';

/**
 * @name 输入容器id，找到id所在的item
 * @param id
 * @param items
 * @returns item
 */
const findStructureItem = (
  structureItems?: StructureItemType[],
  id?: UniqueIdentifier
): StructureItemType | undefined => {
  if (!id || !structureItems) return undefined;
  let structureItem;
  const rootStructureItem = { id: 'root', children: structureItems };
  // 递归循环遍历数据
  const loopItems = (items) => {
    for (const currItem of items) {
      if (currItem?.id === id) {
        structureItem = currItem;
        break;
      } else if (!isEmpty(currItem?.children)) {
        loopItems(currItem.children);
      }
    }
  };
  loopItems(structureItems);
  if (id === 'root') return rootStructureItem;
  return structureItem;
};

export default findStructureItem;
