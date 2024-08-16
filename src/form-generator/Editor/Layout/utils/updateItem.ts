import { ConfigType, type ComponentStructureType } from 'src/form-generator/types';
const ConfigTypeMap = new ConfigType();

/**
 * @name 输入id，与需要调整的字段对象，更新组件对应的值
 * @param id
 * @param items
 * @returns item
 */
const updateItem = (
  componentStructure: ComponentStructureType,
  id: string,
  changeValue: AnyObject
): ComponentStructureType => {
  if (!changeValue) return componentStructure;
  const { componentItems, structureItems } = componentStructure;

  return {
    componentItems: componentItems.map((item) => {
      if (item.id === id) {
        if (Object.keys(changeValue)[0] in ConfigTypeMap) {
          return {
            ...item,
            ...changeValue
          };
        }
        return {
          ...item,
          props: {
            ...item.props,
            ...changeValue
          }
        };
      }
      return item;
    }),
    structureItems
  };
};

export default updateItem;
