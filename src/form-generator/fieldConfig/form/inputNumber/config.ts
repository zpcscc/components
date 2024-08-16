import { type ComponentItemType } from 'src/form-generator/types';
import { labelSpaceConfig, maxConfig, minConfig, placeholderConfig } from '../../commonConfig';

// 整数输入框配置项
export const inputNumberConfig = (): ComponentItemType[] => {
  return [
    labelSpaceConfig(),
    placeholderConfig(),
    {
      id: 'Space',
      type: 'Space',
      children: [minConfig(), maxConfig()]
    }
  ];
};
