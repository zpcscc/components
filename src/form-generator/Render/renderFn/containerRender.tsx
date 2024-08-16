import { isEmpty } from '@zpcscc/utils';
import { type ComponentItemType, type StructureItemType } from 'src/form-generator/types';
import { isContainer } from 'src/form-generator/utils';
import { getComponent } from '../components';
import { getWrapper } from '../utils';
import loopRender from './loopRender';
import { type BaseRenderType } from './type';

export type ContainerRenderProps = {
  componentItem?: ComponentItemType;
  structureItem?: StructureItemType;
  componentItems: ComponentItemType[];
} & BaseRenderType;

// 渲染包含children的布局组件
const containerRender = (props: ContainerRenderProps) => {
  const { componentItem, componentItems, structureItem, componentMap, defaultValue, editorProps } =
    props;
  const { id = '', children } = structureItem || {};
  const { type, hidden } = componentItem || {};
  const isEditor = !isEmpty(editorProps);
  if ((isEditor && !isContainer(id)) || !children || hidden) return;
  const { Wrapper, wrapperProps } = getWrapper(
    isEditor ? 'editor' : 'play',
    structureItem,
    componentItem
  );
  const Component = getComponent(type);
  return (
    <Wrapper {...wrapperProps}>
      <Component key={id} {...componentItem?.props}>
        {loopRender({
          componentItems,
          structureItems: children,
          defaultValue,
          componentMap,
          editorProps
        })}
      </Component>
    </Wrapper>
  );
};

export default containerRender;
