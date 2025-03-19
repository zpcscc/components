import { SortableContext } from '@dnd-kit/sortable';
import { Space, Typography } from 'antd';
import { type FC } from 'react';
import { useRecoilValue } from 'recoil';
import { leftSortableItemsState } from 'src/form-generator/Editor/atoms';
import * as containerConfigMap from 'src/form-generator/fieldConfig/container';
import * as displayConfigMap from 'src/form-generator/fieldConfig/display';
import * as formConfigMap from 'src/form-generator/fieldConfig/form';
import Item from './Item';

const fieldConfig = {
  表单组件: formConfigMap,
  '容器布局组件(开发中，未完成)': containerConfigMap,
  展示组件: displayConfigMap,
};

// 左侧组件列表
const LeftSider: FC = () => {
  const leftSortableItems = useRecoilValue(leftSortableItemsState);

  return (
    <div className='w-16rem flex-shrink-0 pt-16px pb-0 px-8px overflow-y-auto h-full [&_h5]:ml-10px [&_.ant-space]:w-208px [&_.ant-space]:mx-auto [&_.ant-space]:u-center-start'>
      <SortableContext items={leftSortableItems}>
        {Object.entries(fieldConfig).map(([categoryName, configList]) => {
          return (
            <Typography key={categoryName}>
              <Typography.Title level={5}>{categoryName}:</Typography.Title>
              <Space size={[8, 16]} wrap>
                {Object.entries(configList).map(([fieldName, config]) => (
                  <Item key={fieldName} fieldConfig={config} />
                ))}
              </Space>
            </Typography>
          );
        })}
      </SortableContext>
    </div>
  );
};

export default LeftSider;
