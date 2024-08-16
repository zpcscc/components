import { SortableContext } from '@dnd-kit/sortable';
import { Space, Typography } from 'antd';
import { type FC } from 'react';
import { useRecoilValue } from 'recoil';
import { leftSortableItemsState } from 'src/form-generator/Editor/atoms';
import * as containerConfigMap from 'src/form-generator/fieldConfig/container';
import * as displayConfigMap from 'src/form-generator/fieldConfig/display';
import * as formConfigMap from 'src/form-generator/fieldConfig/form';
import Item from './Item';
import { LeftSiderWrapper } from './Styled';

const fieldConfig = {
  表单组件: formConfigMap,
  '容器布局组件(开发中，未完成)': containerConfigMap,
  展示组件: displayConfigMap
};

// 左侧组件列表
const LeftSider: FC = () => {
  const leftSortableItems = useRecoilValue(leftSortableItemsState);

  return (
    <LeftSiderWrapper>
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
    </LeftSiderWrapper>
  );
};

export default LeftSider;
