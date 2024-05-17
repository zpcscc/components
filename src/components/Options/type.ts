import type { OptionsConfigType, OptionType } from 'src/types';

// 选项配置类型
export type CurrOptionType = {
  // 选项的id
  id: string;
} & Omit<OptionType, 'id'>;

// 组件内的
export type CurrOptionsConfigType = {
  options: CurrOptionType[];
} & Omit<OptionsConfigType, 'options'>;
