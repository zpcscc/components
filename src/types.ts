import { type CSSInterpolation } from '@emotion/serialize/types';
import { type CheckboxValueType } from 'antd/lib/checkbox/Group';

// 任意对象类型
export type AnyObject = Record<string, any>;

export type StyledType = CSSInterpolation;

// 选项配置类型
export type OptionType = {
  // 选项的id
  id?: string;
  // 选项显示的标题
  label: string;
  // 选项的值
  value: any;
  // 是否被选中
  checked?: boolean;
};

// 选项可以选择的类型：单选、多选
export type OptionSelectType = 'Radio' | 'Checkbox' | 'allType';

// 选项默认值的类型
export type OptionDefaultValueType = {
  Radio: string;
  Checkbox: CheckboxValueType[];
  trueFalse: boolean;
  allType: string | CheckboxValueType[] | boolean;
};

// 选项组件配置项
export type OptionsConfigType<T extends OptionSelectType = 'allType'> = {
  // 选项的类型：单选、多选、判断
  type?: OptionSelectType;
  // 选项组件的默认值
  defaultValue?: OptionDefaultValueType[T];
  // 选项组件的配选项配置
  options: OptionType[];
};
