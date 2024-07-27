import { type OptionsConfigType } from 'src/types';

// 级联数据类型；
export type TreeDataType = {
  value: string;
  children: TreeDataType[];
};

export type SelectListType = OptionsConfigType<'Radio'>;
