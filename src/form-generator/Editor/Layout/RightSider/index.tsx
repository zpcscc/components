import { omit } from '@zpcscc/utils';
import { Form } from 'antd';
import { useEffect, type FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { componentStructureState, currentState } from 'src/form-generator/Editor/atoms';
import { Render } from 'src/form-generator/Render';
import { type ComponentItemType } from 'src/form-generator/types';
import { updateItem } from '../utils';

export type LeftSiderProps = {
  // 值改变时
  onChange?: (pageData: ComponentItemType[]) => void;
};

// 右侧组件配置面板,用于渲染配置项
const RightSider: FC<LeftSiderProps> = () => {
  const { fieldConfig, currentId } = useRecoilValue(currentState);
  const [{ componentItems, structureItems }, setComponentStructure] =
    useRecoilState(componentStructureState);
  const componentItem = componentItems.find((item) => item.id === currentId);
  const { configPanel } = fieldConfig || {};
  const defaultValue = {
    ...omit(componentItem ?? {}, ['id', 'type', 'props', 'children']),
    ...componentItem?.props,
  };
  const [form] = Form.useForm();

  const onValuesChange = (changeValue?: AnyObject) => {
    if (currentId && changeValue) {
      setComponentStructure((componentStructure) =>
        updateItem(componentStructure, currentId, changeValue),
      );
    }
  };

  useEffect(() => {
    // 组件切换时，更新表单面板对应的值
    if (defaultValue) form?.setFieldsValue(defaultValue);
    // eslint-disable-next-line unicorn/no-abusive-eslint-disable, react-hooks/exhaustive-deps
  }, [currentId, structureItems]);

  return (
    <div className='flex-shrink w-16rem pt-24px flex flex-col h-full mx-auto [&_.ant-form]:w-14rem [&_.ant-form]:mx-auto'>
      <Render
        defaultValue={defaultValue}
        componentItems={configPanel?.()}
        onChange={onValuesChange}
        formOptions={{ form }}
      />
    </div>
  );
};

export default RightSider;
